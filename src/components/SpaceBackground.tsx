import { useRef, useMemo, useEffect, useState, useCallback } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'


const starVertexShader = `
  attribute float size;
  attribute vec3 color;
  attribute float phase;
  
  varying vec3 vColor;
  
  uniform float uTime;

  void main() {
    vColor = color;
    
    // Movimento orbital muito sutil para o universo todo girar
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    
    // Tamanho com base na distância
    gl_PointSize = size * (300.0 / -mvPosition.z);
    
    // Cintilação adicionada visualmente ao Vertex
    float twinkle = sin(uTime * 2.0 + phase) * 0.5 + 0.5;

    gl_PointSize *= (0.5 + 0.5 * twinkle);

    gl_Position = projectionMatrix * mvPosition;
  }
`;

const starFragmentShader = `
  varying vec3 vColor;

  void main() {
    // Calcula a distância do centro do ponto (gl_PointCoord vai de 0.0 a 1.0)
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    
    // Descarta fragmentos fora do círculo para fazer a estrela redonda
    if (distanceToCenter > 0.5) {
      discard;
    }
    
    // Brilho difuso (glow radial)
    float strength = 0.05 / max(distanceToCenter, 0.001) - 0.1;
    strength = clamp(strength, 0.0, 1.0);

    // Alpha final
    gl_FragColor = vec4(vColor, strength);
  }
`;


// --- SPIRAL GALAXY ---
const galaxyVertexShader = `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aPhase;
  
  varying vec3 vColor;
  varying float vAlpha;
  
  uniform float uTime;

  void main() {
    vColor = aColor;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    float twinkle = sin(uTime * 1.5 + aPhase) * 0.3 + 0.7;

    gl_PointSize = aSize * twinkle * (200.0 / -mvPosition.z);
    
    // Fade out partículas muito próximas à câmera (evita artefatos)
    vAlpha = smoothstep(0.0, 30.0, -mvPosition.z);
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const galaxyFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;
    float strength = 0.04 / max(d, 0.001) - 0.08;
    strength = clamp(strength, 0.0, 1.0);


    gl_FragColor = vec4(vColor, strength * vAlpha);
  }
`;

function SpiralGalaxy({ isMobile }: { isMobile: boolean }) {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), [])

  // Espiral logarítmica: Braços longos e núcleo denso (Inspiração Via Láctea)
  const [positions, colors, sizes, phases] = useMemo(() => {
    // Together with the stars: 3,000 mobile / 9,000 desktop.
    const count = isMobile ? 2000 : 6000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const phases = new Float32Array(count)
    const coreCenter = new THREE.Color('#ffffff')
    const coreHalo = new THREE.Color('#ffddaa')
    const armColor = new THREE.Color('#3b82f6')
    const edgeColor = new THREE.Color('#081c3c')
    const finalColor = new THREE.Color()

    const NUM_ARMS = 2
    const ARM_LENGTH = Math.PI * 5  // Braços imensos enrolando bem longe
    const RADIUS_MAX = 130          // Expansão monstruosa (era 95)

    for (let i = 0; i < count; i++) {
      const arm = i % NUM_ARMS
      const t = (i / count) * ARM_LENGTH
      const armOffset = (arm / NUM_ARMS) * Math.PI * 2

      // Crescimento exponencial
      const r = (t / ARM_LENGTH) * RADIUS_MAX + 1.5
      const noise = (Math.random() - 0.5) * (r * 0.3)

      const theta = t + armOffset + noise * 0.1
      const x = r * Math.cos(theta) + (Math.random() - 0.5) * r * 0.2
      
      // Central Bulge: O miolo central (raios menores) é mais "gordinho" verticalmente
      const bulgeThickness = Math.max(0, 1 - (r / (RADIUS_MAX * 0.25)))
      const y = (Math.random() - 0.5) * (8.0 * bulgeThickness + 1.5) * (1 - r / RADIUS_MAX) 
      
      const z = r * Math.sin(theta) + (Math.random() - 0.5) * r * 0.2

      positions[i * 3]     = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Via Láctea Colors
      const radialFraction = r / RADIUS_MAX
      if (radialFraction < 0.1) {
        finalColor.lerpColors(coreCenter, coreHalo, radialFraction / 0.1)
      } else if (radialFraction < 0.4) {
        finalColor.lerpColors(coreHalo, armColor, (radialFraction - 0.1) / 0.3)
      } else {
        finalColor.lerpColors(armColor, edgeColor, (radialFraction - 0.4) / 0.6)
      }

      colors[i * 3]     = finalColor.r
      colors[i * 3 + 1] = finalColor.g
      colors[i * 3 + 2] = finalColor.b

      // Núcleo com partículas maiores, bordas poeira estelar fina
      sizes[i] = THREE.MathUtils.lerp(1.8, 0.4, radialFraction) + Math.random() * 0.5
      phases[i] = Math.random() * Math.PI * 2
      
    }

    return [positions, colors, sizes, phases]
  }, [isMobile])

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
      
    }
    
    // Rotação lenta — dá para perceber mas não cansa
    if (pointsRef.current) pointsRef.current.rotation.y = t * 0.025
  })

  return (
    // Posição: Trazendo a galáxia violentamente mais para a frente para que os braços longos quase batam na tela (câmera)
    <points ref={pointsRef} position={[-20, -35, -135]} rotation={[-0.45, -0.1,  0.25]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aColor"   count={colors.length / 3}    array={colors}    itemSize={3} />
        <bufferAttribute attach="attributes-aSize"    count={sizes.length}          array={sizes}     itemSize={1} />
        <bufferAttribute attach="attributes-aPhase"   count={phases.length}         array={phases}    itemSize={1} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={galaxyVertexShader}
        fragmentShader={galaxyFragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        depthTest={false}
      />
    </points>
  )
}

// Scroll progress is cached outside the render loop.
function CameraRig({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  useFrame(({ camera }, delta) => {
    const progress = scrollRef.current ?? 0
    camera.position.z = THREE.MathUtils.damp(camera.position.z, 1 - progress * 70, 2.5, Math.min(delta, 0.1))
    camera.position.y = THREE.MathUtils.damp(camera.position.y, -progress * 6, 2.5, Math.min(delta, 0.1))
  })
  return null
}

// --- WRAPPER: StarField + Constellations compartilhando posições ---
function StarFieldWithConstellations({ isMobile }: { isMobile: boolean }) {
  const starCount = isMobile ? 1000 : 3000

  const [positions, colors, sizes, phases] = useMemo(() => {
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)
    const phases = new Float32Array(starCount)

    const colorPalette = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#93c5fd'),
      new THREE.Color('#c4b5fd'),
      new THREE.Color('#fcd34d'),
    ]

    for (let i = 0; i < starCount; i++) {
      const r = 200 * Math.cbrt(Math.random())
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi) - 50

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i * 3] = color.r; colors[i * 3 + 1] = color.g; colors[i * 3 + 2] = color.b
      sizes[i] = Math.random() * 2.0 + 0.5
      phases[i] = Math.random() * Math.PI * 2
      
    }
    return [positions, colors, sizes, phases]
  }, [starCount])

  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({
    uTime: { value: 0 }
  }), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
      
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02
      pointsRef.current.rotation.x = t * 0.01
    }
  })

  return (
    <>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={starCount} array={positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={starCount} array={colors} itemSize={3} />
          <bufferAttribute attach="attributes-size" count={starCount} array={sizes} itemSize={1} />
          <bufferAttribute attach="attributes-phase" count={starCount} array={phases} itemSize={1} />
        </bufferGeometry>
        <shaderMaterial
          ref={materialRef}
          vertexShader={starVertexShader}
          fragmentShader={starFragmentShader}
          uniforms={uniforms}
          transparent={true}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        depthTest={false}
        />
      </points>
      <Constellations starPositions={positions} isMobile={isMobile} />
    </>
  )
}

// --- CONSTELLATIONS (Mouse-Reactive Line System) ---
function Constellations({ starPositions, isMobile }: { starPositions: Float32Array; isMobile: boolean }) {
  const linesRef = useRef<THREE.LineSegments>(null)
  const { camera, size } = useThree()

  const candidatePositions = useMemo(() => {
    const candidates: THREE.Vector3[] = []
    const count = Math.min(isMobile ? 40 : 100, starPositions.length / 3)
    for (let i = 0; i < count; i++) {
      candidates.push(new THREE.Vector3(
        starPositions[i * 3],
        starPositions[i * 3 + 1],
        starPositions[i * 3 + 2]
      ))
    }
    return candidates
  }, [isMobile, starPositions])

  // Mouse em coordenadas normalizadas (NDC)
  const mouse = useRef(new THREE.Vector2(9999, 9999))
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const mouseWorld = useMemo(() => new THREE.Vector3(), [])
  const nearStars = useMemo(() => [] as THREE.Vector3[], [])
  const elapsed = useRef(0)
  const pointerChanged = useRef(false)
  const lastCamera = useRef(new THREE.Vector3(Infinity, Infinity, Infinity))

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      pointerChanged.current = true
      mouse.current.x = (e.clientX / size.width) * 2 - 1
      mouse.current.y = -(e.clientY / size.height) * 2 + 1
    }
    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [size])

  // Buffer de linhas pré-alocado para o número máximo de conexões possíveis
  const MAX_CONNECTIONS = 80
  const linePositions = useMemo(
    () => new Float32Array(MAX_CONNECTIONS * 2 * 3), // cada linha = 2 pontos * 3 floats
    []
  )
  const lineColors = useMemo(
    () => new Float32Array(MAX_CONNECTIONS * 2 * 3),
    []
  )

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(lineColors, 3))
    geo.setDrawRange(0, 0)
    return geo
  }, [linePositions, lineColors])

  useEffect(() => {
    return () => geometry.dispose()
  }, [geometry])

  useFrame((_, delta) => {
    elapsed.current += delta
    if (!linesRef.current || elapsed.current < 1 / 15) return
    elapsed.current = 0
    if (!pointerChanged.current && lastCamera.current.distanceToSquared(camera.position) < 0.00001) return
    pointerChanged.current = false
    lastCamera.current.copy(camera.position)

    if (Math.abs(mouse.current.x) > 1 || Math.abs(mouse.current.y) > 1) {
      linesRef.current.visible = false
      return
    }

    // Projeta o mouse no plano Z = -50 (onde as estrelas candidatas vivem)
    raycaster.setFromCamera(mouse.current, camera)
    const targetZ = -50
    const directionZ = raycaster.ray.direction.z
    if (Math.abs(directionZ) < Number.EPSILON) {
      linesRef.current.visible = false
      return
    }
    const distanceToPlane = (targetZ - raycaster.ray.origin.z) / directionZ
    mouseWorld.set(
      raycaster.ray.origin.x + distanceToPlane * raycaster.ray.direction.x,
      raycaster.ray.origin.y + distanceToPlane * raycaster.ray.direction.y,
      targetZ,
    )

    const CONNECT_RADIUS = 30 // raio de ativação em unidades de cena
    const CONNECTION_DISTANCE = 20 // distância máxima entre estrelas vizinhas

    // Encontra estrelas dentro do raio de ativação do mouse
    nearStars.length = 0
    const connectRadiusSquared = CONNECT_RADIUS * CONNECT_RADIUS
    for (const candidate of candidatePositions) {
      if (candidate.distanceToSquared(mouseWorld) < connectRadiusSquared) nearStars.push(candidate)
    }

    let lineCount = 0
    const posAttr = geometry.attributes.position as THREE.BufferAttribute
    const colAttr = geometry.attributes.color as THREE.BufferAttribute

    // Conecta pares de estrelas próximas entre si dentro da zona do mouse
    for (let i = 0; i < nearStars.length && lineCount < MAX_CONNECTIONS; i++) {
      for (let j = i + 1; j < nearStars.length && lineCount < MAX_CONNECTIONS; j++) {
        const distanceSquared = nearStars[i].distanceToSquared(nearStars[j])
        if (distanceSquared < CONNECTION_DISTANCE * CONNECTION_DISTANCE) {
          const alpha = 1.0 - Math.sqrt(distanceSquared) / CONNECTION_DISTANCE // opacidade cai com distância

          const base = lineCount * 6 // 2 pontos * 3 coords
          // Ponto A
          posAttr.array[base]     = nearStars[i].x
          posAttr.array[base + 1] = nearStars[i].y
          posAttr.array[base + 2] = nearStars[i].z
          colAttr.array[base]     = 0.5 * alpha
          colAttr.array[base + 1] = 0.8 * alpha
          colAttr.array[base + 2] = 1.0 * alpha
          // Ponto B
          posAttr.array[base + 3] = nearStars[j].x
          posAttr.array[base + 4] = nearStars[j].y
          posAttr.array[base + 5] = nearStars[j].z
          colAttr.array[base + 3] = 0.5 * alpha
          colAttr.array[base + 4] = 0.8 * alpha
          colAttr.array[base + 5] = 1.0 * alpha

          lineCount++
        }
      }
    }

    linesRef.current.visible = lineCount > 0
    if (lineCount > 0) {
      posAttr.needsUpdate = true
      colAttr.needsUpdate = true
    }
    geometry.setDrawRange(0, lineCount * 2)
  })

  return (
    <lineSegments ref={linesRef} geometry={geometry} visible={false} frustumCulled={false}>
      <lineBasicMaterial
        vertexColors={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        depthTest={false}
      />
    </lineSegments>
  )
}

function PrepareScene({ onReady, onFailure }: { onReady: () => void; onFailure: () => void }) {
  const { gl, scene, camera, setDpr } = useThree()
  const quality = useRef({ seconds: 0, frames: 0, dpr: 1, slowWindows: 0 })
  useEffect(() => {
    let active = true
    gl.compileAsync(scene, camera).then(() => { if (active) onReady() }).catch(() => { if (active) onFailure() })
    return () => { active = false }
  }, [gl, scene, camera, onReady, onFailure])
  useFrame((_, delta) => {
    if (delta > 0.25) return
    const q = quality.current
    q.seconds += delta
    q.frames++
    if (q.seconds < 3) return
    q.slowWindows = q.frames / q.seconds < 45 ? q.slowWindows + 1 : 0
    if (q.slowWindows >= 2 && q.dpr > 0.65) {
      q.dpr = q.dpr > 0.8 ? 0.8 : 0.65
      setDpr(q.dpr)
      q.slowWindows = 0
    }
    q.seconds = 0
    q.frames = 0
  })
  return null
}

export function SpaceBackground({ onReady, onFailure }: { onReady: () => void; onFailure: () => void }) {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)
  const [isPageVisible, setIsPageVisible] = useState(() => !document.hidden)
  const [compiled, setCompiled] = useState(false)
  const scrollRef = useRef(0)
  const ready = useCallback(() => { setCompiled(true); onReady() }, [onReady])

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const resize = () => setIsMobile(media.matches)
    media.addEventListener('change', resize)
    return () => media.removeEventListener('change', resize)
  }, [])

  useEffect(() => {
    let maxScroll = 0
    let resizeFrame = 0
    const onScroll = () => { scrollRef.current = maxScroll > 0 ? THREE.MathUtils.clamp(window.scrollY / maxScroll, 0, 1) : 0 }
    const measure = () => {
      maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
      onScroll()
    }
    const schedule = () => {
      cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(measure)
    }
    const observer = new ResizeObserver(schedule)
    observer.observe(document.body)
    observer.observe(document.documentElement)
    measure()
    const visibility = () => setIsPageVisible(!document.hidden)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    document.addEventListener('visibilitychange', visibility)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(resizeFrame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', schedule)
      document.removeEventListener('visibilitychange', visibility)
    }
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 1] }} dpr={1}
      frameloop={compiled && isPageVisible ? 'always' : 'never'}
      gl={{ antialias: false, alpha: true, depth: false, stencil: false, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        const lost = (event: Event) => { event.preventDefault(); onFailure() }
        gl.domElement.addEventListener('webglcontextlost', lost, { once: true })
      }}>
      <CameraRig scrollRef={scrollRef} />
      <SpiralGalaxy key={isMobile ? 'galaxy-mobile' : 'galaxy-desktop'} isMobile={isMobile} />
      <StarFieldWithConstellations key={isMobile ? 'stars-mobile' : 'stars-desktop'} isMobile={isMobile} />
      <PrepareScene onReady={ready} onFailure={onFailure} />
    </Canvas>
  )
}

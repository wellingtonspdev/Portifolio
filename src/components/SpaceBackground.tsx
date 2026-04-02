import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const starVertexShader = `
  attribute float size;
  attribute vec3 color;
  attribute float phase;
  
  varying vec3 vColor;
  varying float vPhase;
  
  uniform float uTime;

  void main() {
    vColor = color;
    vPhase = phase;
    
    // Movimento orbital muito sutil para o universo todo girar
    vec3 pos = position;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
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
  varying float vPhase;
  uniform float uTime;

  void main() {
    // Calcula a distância do centro do ponto (gl_PointCoord vai de 0.0 a 1.0)
    float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
    
    // Descarta fragmentos fora do círculo para fazer a estrela redonda
    if (distanceToCenter > 0.5) {
      discard;
    }
    
    // Brilho difuso (glow radial)
    float strength = 0.05 / distanceToCenter - 0.1;
    strength = clamp(strength, 0.0, 1.0);

    // Alpha final
    gl_FragColor = vec4(vColor, strength);
  }
`;


// --- FBM NEBULA SHADER ---
const nebulaVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const nebulaFragmentShader = `
  varying vec2 vUv;
  uniform float uTime;

  // Função de ruído rápido
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 )) + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // FBM de 4 oitavas
  float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < 4; ++i) {
      v += a * snoise(x);
      x = rot * x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 st = vUv * 3.0; // Escala do ruído
    vec2 q = vec2(0.);
    
    // Domain Warping
    q.x = fbm( st + 0.03 * uTime);
    q.y = fbm( st + vec2(1.0));
    
    vec2 r = vec2(0.);
    r.x = fbm( st + 1.0 * q + vec2(1.7,9.2) + 0.05 * uTime );
    r.y = fbm( st + 1.0 * q + vec2(8.3,2.8) + 0.02 * uTime );
    
    float f = fbm(st + r);
    
    // Cores: Mistura do cyber-roxo com ciano e azul escuro profundo
    vec3 color = mix(vec3(0.02, 0.04, 0.1), vec3(0.1, 0.2, 0.5), clamp((f*f)*4.0, 0.0, 1.0));
    color = mix(color, vec3(0.2, 0.05, 0.4), clamp(length(q), 0.0, 1.0));
    color = mix(color, vec3(0.05, 0.3, 0.4), clamp(length(r.x), 0.0, 1.0));
    
    // Brilho volumétrico e atenuação
    vec3 finalColor = (f*f*f + 0.6*f*f + 0.5*f) * color;
    
    // Esmaecimento macio nas bordas
    float vignette = 1.0 - smoothstep(0.3, 1.5, length(vUv - 0.5));
    finalColor *= vignette;

    gl_FragColor = vec4(finalColor, vignette * 0.7); // Opacidade sutil
  }
`;

function Nebula() {
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame((state) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
  })

  return (
    <mesh position={[0, 0, -80]}>
      <planeGeometry args={[300, 200]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={nebulaVertexShader}
        fragmentShader={nebulaFragmentShader}
        uniforms={uniforms}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  )
}

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
    float strength = 0.04 / d - 0.08;
    strength = clamp(strength, 0.0, 1.0);
    gl_FragColor = vec4(vColor, strength * vAlpha);
  }
`;

function SpiralGalaxy() {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  // Espiral logarítmica: 2 braços, partículas que se fundem com a nebulosa
  const [positions, colors, sizes, phases] = useMemo(() => {
    const count = isMobile ? 2500 : 8000
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const phases = new Float32Array(count)

    const NUM_ARMS = 2
    const ARM_LENGTH = Math.PI * 3  // comprimento angular de cada braço
    const RADIUS_MAX = 45

    for (let i = 0; i < count; i++) {
      const arm = i % NUM_ARMS
      const t = (i / count) * ARM_LENGTH  // progresso ao longo do braço
      const armOffset = (arm / NUM_ARMS) * Math.PI * 2

      // Raio: cresce exponencialmente com o ângulo
      const r = (t / ARM_LENGTH) * RADIUS_MAX + 2
      // Ruído angular para dar aspecto orgânico
      const noise = (Math.random() - 0.5) * (r * 0.25)

      const theta = t + armOffset + noise * 0.1
      const x = r * Math.cos(theta) + (Math.random() - 0.5) * r * 0.15
      const y = (Math.random() - 0.5) * 2.5 * (1 - r / RADIUS_MAX) // disco fino
      const z = r * Math.sin(theta) + (Math.random() - 0.5) * r * 0.15

      positions[i * 3]     = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z

      // Cor: núcleo quente (branco-amarelo) → braços frios (ciano) → bordas escuras
      const radialFraction = r / RADIUS_MAX
      const coreColor  = new THREE.Color('#fffde8')  // branco-amarelado
      const armColor   = new THREE.Color('#7ec8e3')  // ciano suave
      const edgeColor  = new THREE.Color('#1a3a5c')  // azul profundo
      const finalColor = new THREE.Color()

      if (radialFraction < 0.3) {
        finalColor.lerpColors(coreColor, armColor, radialFraction / 0.3)
      } else {
        finalColor.lerpColors(armColor, edgeColor, (radialFraction - 0.3) / 0.7)
      }

      colors[i * 3]     = finalColor.r
      colors[i * 3 + 1] = finalColor.g
      colors[i * 3 + 2] = finalColor.b

      // Partículas menores nas bordas (dão sensação de dissolução)
      sizes[i] = THREE.MathUtils.lerp(1.2, 0.2, radialFraction) + Math.random() * 0.4
      phases[i] = Math.random() * Math.PI * 2
    }

    return [positions, colors, sizes, phases]
  }, [])

  useFrame((state) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    // Rotação lenta — dá para perceber mas não cansa
    if (pointsRef.current) pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.025
  })

  useEffect(() => {
    return () => {
      pointsRef.current?.geometry.dispose()
      materialRef.current?.dispose()
    }
  }, [])

  return (
    // Posição: distante, deslocada para baixo-direita, inclinada para parecer em perspectiva
    <points ref={pointsRef} position={[10, -8, -130]} rotation={[-0.35, 0, 0.15]}>
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
      />
    </points>
  )
}

// --- CAMERA RIG: Scroll Fly-Through ---
function CameraRig({ scrollRef }: { scrollRef: React.RefObject<number> }) {
  useFrame(({ camera }) => {
    const scrollY = scrollRef.current ?? 0
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0

    // Câmera voa de z=1 até z=-70 conforme o scroll progride
    const targetZ = 1 - progress * 70
    // Deriva leve para baixo para guiar o olhar em direção à galáxia
    const targetY = -progress * 6

    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.04)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.04)
  })
  return null
}

// --- WRAPPER: StarField + Constellations compartilhando posições ---
function StarFieldWithConstellations({ dpr }: { dpr: number }) {
  const starCount = dpr > 1 ? 5000 : 2000

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
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame((state) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01
    }
  })

  useEffect(() => {
    return () => {
      pointsRef.current?.geometry.dispose()
      materialRef.current?.dispose()
    }
  }, [])

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
        />
      </points>
      <Constellations starPositions={positions} />
    </>
  )
}

// --- CONSTELLATIONS (Mouse-Reactive Line System) ---
function Constellations({ starPositions }: { starPositions: Float32Array }) {
  const linesRef = useRef<THREE.LineSegments>(null)
  const { camera, size } = useThree()

  // Pré-seleciona um subconjunto de estrelas para serem candidatas à constelação
  // (usar todas as 5000 seria O(n²) - selecionamos as 200 mais próximas do centro)
  const candidatePositions = useMemo(() => {
    const candidates: THREE.Vector3[] = []
    const count = Math.min(200, starPositions.length / 3)
    for (let i = 0; i < count; i++) {
      candidates.push(new THREE.Vector3(
        starPositions[i * 3],
        starPositions[i * 3 + 1],
        starPositions[i * 3 + 2]
      ))
    }
    return candidates
  }, [starPositions])

  // Mouse em coordenadas normalizadas (NDC)
  const mouse = useRef(new THREE.Vector2(9999, 9999))
  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  raycaster.params.Points = { threshold: 2 }

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
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

  useFrame(() => {
    if (!linesRef.current) return

    // Projeta o mouse no plano Z = -50 (onde as estrelas candidatas vivem)
    raycaster.setFromCamera(mouse.current, camera)
    const targetZ = -50
    const t = (targetZ - raycaster.ray.origin.z) / raycaster.ray.direction.z
    const mouseWorld = new THREE.Vector3(
      raycaster.ray.origin.x + t * raycaster.ray.direction.x,
      raycaster.ray.origin.y + t * raycaster.ray.direction.y,
      targetZ
    )

    const CONNECT_RADIUS = 30 // raio de ativação em unidades de cena
    const CONNECTION_DISTANCE = 20 // distância máxima entre estrelas vizinhas

    // Encontra estrelas dentro do raio de ativação do mouse
    const nearStars = candidatePositions.filter(
      (p) => p.distanceTo(mouseWorld) < CONNECT_RADIUS
    )

    let lineCount = 0
    const posAttr = geometry.attributes.position as THREE.BufferAttribute
    const colAttr = geometry.attributes.color as THREE.BufferAttribute

    // Conecta pares de estrelas próximas entre si dentro da zona do mouse
    for (let i = 0; i < nearStars.length && lineCount < MAX_CONNECTIONS; i++) {
      for (let j = i + 1; j < nearStars.length && lineCount < MAX_CONNECTIONS; j++) {
        const dist = nearStars[i].distanceTo(nearStars[j])
        if (dist < CONNECTION_DISTANCE) {
          const alpha = 1.0 - dist / CONNECTION_DISTANCE // opacidade cai com distância

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

    posAttr.needsUpdate = true
    colAttr.needsUpdate = true
    geometry.setDrawRange(0, lineCount * 2)
  })

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial
        vertexColors={true}
        transparent={true}
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  )
}

export function SpaceBackground() {
  const dpr = isMobile ? 1 : 1.5
  const scrollRef = useRef<number>(0)

  // Bridge: Lenis já suaviza o scroll antes de chegar ao window.scrollY
  useEffect(() => {
    const onScroll = () => { scrollRef.current = window.scrollY }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        backgroundColor: '#050811'
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: false,
          powerPreference: 'high-performance'
        }}
      >
        <color attach="background" args={['#050811']} />

        {/* Camera Rig: voa pelo espaço conforme o scroll */}
        <CameraRig scrollRef={scrollRef} />

        {/* Galáxia: muito distante, mínima velocidade de parallax */}
        <SpiralGalaxy />

        {/* Nebulosa: desativada em mobile (FBM é pesado) */}
        {!isMobile && <Nebula />}

        {/* Campo estelar + constelações */}
        <StarFieldWithConstellations dpr={dpr} />
      </Canvas>
    </div>
  )
}

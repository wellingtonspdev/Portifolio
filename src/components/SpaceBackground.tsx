import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing'

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

const EXPLOSION_START = 1.0; 

const starVertexShader = `
  attribute float size;
  attribute vec3 color;
  attribute float phase;
  attribute vec3 aRandomDir;
  
  varying vec3 vColor;
  varying float vPhase;
  
  uniform float uTime;
  uniform float uExplosion;
  uniform float uFormation;

  void main() {
    vColor = color;
    vPhase = phase;
    
    // Movimento orbital muito sutil para o universo todo girar
    vec3 targetPos = position;
    
    vec3 origin = vec3(0.0, 0.0, -100.0);
    vec3 explodePos = origin + aRandomDir * (uExplosion * 800.0);
    
    vec3 mixedPos = mix(explodePos, targetPos, uFormation);
    
    vec4 mvPosition = modelViewMatrix * vec4(mixedPos, 1.0);
    
    // Tamanho com base na distância
    gl_PointSize = size * (300.0 / -mvPosition.z);
    
    // Cintilação adicionada visualmente ao Vertex
    float twinkle = sin(uTime * 2.0 + phase) * 0.5 + 0.5;
    
    // Brilham muito durante a explosão
    float introGlow = (1.0 - uFormation) * 3.0; 
    
    gl_PointSize *= (0.5 + 0.5 * twinkle) + introGlow;

    gl_Position = projectionMatrix * mvPosition;
  }
`;

const starFragmentShader = `
  varying vec3 vColor;
  varying float vPhase;
  uniform float uTime;
  uniform float uFormation;

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
    
    // Intensifica o brilho durante a explosão
    float boost = (1.0 - uFormation) * 2.0;

    // Alpha final
    gl_FragColor = vec4(vColor * (1.0 + boost), strength);
  }
`;



// --- SPIRAL GALAXY ---
const galaxyVertexShader = `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aPhase;
  attribute vec3 aRandomDir;
  
  varying vec3 vColor;
  varying float vAlpha;
  
  uniform float uTime;
  uniform float uExplosion;
  uniform float uFormation;

  void main() {
    vColor = aColor;
    
    vec3 targetPos = position;
    
    // Origem da explosão (em coordenadas locais da galáxia que estão transladadas)
    // O array positions guarda as coordenadas originais.
    // Vamos usar (0,0,0) local
    vec3 origin = vec3(0.0, 0.0, 0.0);
    vec3 explodePos = origin + aRandomDir * (uExplosion * 300.0); // voam até 300 unidades
    
    // Interpolação suave do caos do BigBang para a ordem da Galáxia Espiral
    vec3 mixedPos = mix(explodePos, targetPos, uFormation);
    
    vec4 mvPosition = modelViewMatrix * vec4(mixedPos, 1.0);
    float twinkle = sin(uTime * 1.5 + aPhase) * 0.3 + 0.7;
    
    // Partículas explodindo no começo são maiores
    float explosionBoost = (1.0 - uFormation) * 4.0;
    
    gl_PointSize = (aSize + explosionBoost) * twinkle * (200.0 / -mvPosition.z);
    
    // Fade out partículas muito próximas à câmera (evita artefatos)
    vAlpha = smoothstep(0.0, 30.0, -mvPosition.z);
    
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const galaxyFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;
  uniform float uFormation;

  void main() {
    float d = distance(gl_PointCoord, vec2(0.5));
    if (d > 0.5) discard;
    float strength = 0.04 / d - 0.08;
    strength = clamp(strength, 0.0, 1.0);
    
    float boost = (1.0 - uFormation) * 2.0;

    gl_FragColor = vec4(vColor * (1.0 + boost), strength * vAlpha);
  }
`;

function SpiralGalaxy() {
  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uExplosion: { value: 0 }, uFormation: { value: 0 } }), [])

  // Espiral logarítmica: Braços longos e núcleo denso (Inspiração Via Láctea)
  const [positions, colors, sizes, phases, randomDirs] = useMemo(() => {
    const count = isMobile ? 8000 : 25000 // Partículas extras para compensar falta da nebulosa
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const phases = new Float32Array(count)
    const randomDirs = new Float32Array(count * 3)

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
      const coreCenter = new THREE.Color('#ffffff') // Nucléo puro
      const coreHalo   = new THREE.Color('#ffddaa') // Amarelado/Dourado em volta do núcleo
      const armColor   = new THREE.Color('#3b82f6') // Azul dos braços com estrelas jovens
      const edgeColor  = new THREE.Color('#081c3c') // Obscuro profundo nas bordas

      const finalColor = new THREE.Color()

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
      
      // Random direction for explosion
      const u = Math.random();
      const v = Math.random();
      const thetaRandom = u * 2.0 * Math.PI;
      const phiRandom = Math.acos(2.0 * v - 1.0);
      const rDir = Math.cbrt(Math.random());
      randomDirs[i * 3]     = rDir * Math.sin(phiRandom) * Math.cos(thetaRandom);
      randomDirs[i * 3 + 1] = rDir * Math.sin(phiRandom) * Math.sin(thetaRandom);
      randomDirs[i * 3 + 2] = rDir * Math.cos(phiRandom);
    }

    return [positions, colors, sizes, phases, randomDirs]
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
      
      // Cálculo do progresso do Big Bang
      // Explosão de 1.0s a 2.5s (rápido)
      let expl = Math.max(0, (t - EXPLOSION_START) / 1.5);
      expl = Math.min(expl, 1.0);
      const easeOutExpo = expl === 1 ? 1 : 1 - Math.pow(2, -10 * expl);
      materialRef.current.uniforms.uExplosion.value = easeOutExpo;

      // Formação a partir de 2.0s a 4.5s
      let form = Math.max(0, (t - 2.0) / 2.5);
      form = Math.min(form, 1.0);
      // Ease in-out para acomodar as estrelas suavemente
      const easeInOutCubic = form < 0.5 ? 4 * form * form * form : 1 - Math.pow(-2 * form + 2, 3) / 2;
      materialRef.current.uniforms.uFormation.value = easeInOutCubic;
    }
    
    // Rotação lenta — dá para perceber mas não cansa
    if (pointsRef.current) pointsRef.current.rotation.y = t * 0.025
  })

  useEffect(() => {
    return () => {
      pointsRef.current?.geometry.dispose()
      materialRef.current?.dispose()
    }
  }, [])

  return (
    // Posição: Trazendo a galáxia violentamente mais para a frente para que os braços longos quase batam na tela (câmera)
    <points ref={pointsRef} position={[-20, -35, -135]} rotation={[-0.45, -0.1,  0.25]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-aColor"   count={colors.length / 3}    array={colors}    itemSize={3} />
        <bufferAttribute attach="attributes-aSize"    count={sizes.length}          array={sizes}     itemSize={1} />
        <bufferAttribute attach="attributes-aPhase"   count={phases.length}         array={phases}    itemSize={1} />
        <bufferAttribute attach="attributes-aRandomDir" count={randomDirs.length/3} array={randomDirs} itemSize={3} />
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
  const starCount = dpr > 1 ? 10000 : 4000 // MUITO mais estrelas de fundo

  const [positions, colors, sizes, phases, randomDirs] = useMemo(() => {
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    const sizes = new Float32Array(starCount)
    const phases = new Float32Array(starCount)
    const randomDirs = new Float32Array(starCount * 3)

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
      
      const distExpl = Math.random();
      const vx = Math.random() * 2.0 - 1.0;
      const vy = Math.random() * 2.0 - 1.0;
      const vz = Math.random() * 2.0 - 1.0;
      
      randomDirs[i*3] = vx * (0.5 + distExpl);
      randomDirs[i*3+1] = vy * (0.5 + distExpl);
      randomDirs[i*3+2] = vz * (0.5 + distExpl);
    }
    return [positions, colors, sizes, phases, randomDirs]
  }, [starCount])

  const pointsRef = useRef<THREE.Points>(null)
  const materialRef = useRef<THREE.ShaderMaterial>(null)
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uExplosion: { value: 0 }, uFormation: { value: 0 } }), [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
      
      let expl = Math.max(0, (t - EXPLOSION_START) / 1.5);
      expl = Math.min(expl, 1.0);
      const easeOutExpo = expl === 1 ? 1 : 1 - Math.pow(2, -10 * expl);
      materialRef.current.uniforms.uExplosion.value = easeOutExpo;

      let form = Math.max(0, (t - 2.0) / 2.5);
      form = Math.min(form, 1.0);
      const easeInOutCubic = form < 0.5 ? 4 * form * form * form : 1 - Math.pow(-2 * form + 2, 3) / 2;
      materialRef.current.uniforms.uFormation.value = easeInOutCubic;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02
      pointsRef.current.rotation.x = t * 0.01
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
          <bufferAttribute attach="attributes-aRandomDir" count={randomDirs.length/3} array={randomDirs} itemSize={3} />
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

// --- SINGULARITY & SHOCKWAVE UNIFICADAS (Big Bang Core) ---
function BigBangCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  
  const purpleColor = useMemo(() => new THREE.Color("#8b5cf6").multiplyScalar(15), []); 
  const whiteColor = useMemo(() => new THREE.Color("#ffffff").multiplyScalar(20), []); 
  const haloColor = useMemo(() => new THREE.Color("#c4b5fd").multiplyScalar(8), []); 

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (!meshRef.current || !matRef.current) return;

    meshRef.current.quaternion.copy(state.camera.quaternion);

    if (t < EXPLOSION_START) {
      // Fase 1: Pulsando antes de explodir
      meshRef.current.visible = true;
      const freq = 5.0 + t * 5.0; 
      const pulse = 0.5 + Math.sin(t * freq) * 0.15 + (t / EXPLOSION_START) * 0.2;
      
      // Ajuste para não ficar um ponto irrelevante e não ter pop:
      meshRef.current.scale.setScalar(pulse * 3.0); 
      
      matRef.current.uniforms.uOpacity.value = 1.0;
      matRef.current.uniforms.uExpand.value = 0.0; // mantém retido
      // Totalmente Roxo
      matRef.current.uniforms.uCoreColor.value.copy(purpleColor);
      matRef.current.uniforms.uHaloColor.value.setHex(0x000000); 
    } else if (t < EXPLOSION_START + 3.0) {
      // Fase 2: Explosão (Ininterrupta)
      meshRef.current.visible = true;
      const p = (t - EXPLOSION_START) / 3.0; // Progresso (0.0 até 1.0)
      const easeOut = 1 - Math.pow(1 - p, 4); // Rápido no início, macio no fim
      
      // Continua a escalada do valor base (ex: 2.1) até 400 homogeneamente
      meshRef.current.scale.setScalar(2.1 + easeOut * 400.0);
      
      matRef.current.uniforms.uOpacity.value = 1.0 - p;
      matRef.current.uniforms.uExpand.value = easeOut;
      
      // Efeito de Flash: O núcleo fica branco incandescente no frame do gatilho 
      // e esfria para o roxo natural rapidamente, como todo flash fotográfico.
      const flashProgress = Math.min(p * 5.0, 1.0); // Transição em décimos de seg
      matRef.current.uniforms.uCoreColor.value.copy(purpleColor).lerp(whiteColor, 1.0 - flashProgress);
      matRef.current.uniforms.uHaloColor.value.copy(haloColor);
    } else {
      meshRef.current.visible = false;
    }
  });

  return (
    <mesh ref={meshRef} position={[-20, -35, -135]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={matRef}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{
          uOpacity: { value: 1.0 },
          uExpand: { value: 0.0 },
          uCoreColor: { value: purpleColor },
          uHaloColor: { value: new THREE.Color(0x000000) }
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float uOpacity;
          uniform float uExpand;
          uniform vec3 uCoreColor;
          uniform vec3 uHaloColor;
          varying vec2 vUv;
          
          void main() {
             float dist = distance(vUv, vec2(0.5)) * 2.0; 
             
             // Core blinding flash (Esmaece o centro expandindo)
             float core = smoothstep(1.0 - uExpand * 0.9, 0.0, dist);
             
             // Halo (Onda de choque atrelada ao core, preenchida mas invisível onde o expand é 0)
             float ringDist = abs(dist - uExpand * 0.8);
             float halo = smoothstep(0.6, 0.0, ringDist) * (1.0 - uExpand * 0.3) * uExpand;
             
             vec3 finalColor = uCoreColor * core + uHaloColor * halo;
             float alpha = (core + halo) * uOpacity;
             
             alpha *= smoothstep(1.0, 0.8, dist);

             gl_FragColor = vec4(finalColor, alpha);
          }
        `}
      />
    </mesh>
  );
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

        {/* Campo estelar + constelações */}
        <StarFieldWithConstellations dpr={dpr} />

        {/* Efeitos Ativos da Explosão (Intro) */}
        <BigBangCore />

        {/* Pós-processamento: responsável pelo Bloom espetacular */}
        <EffectComposer>
          <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} />
          <Noise opacity={0.03} />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

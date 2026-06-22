import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Original abstract centerpiece — a distorted icosahedron that breathes, rotates,
 * and warps toward the cursor. No external assets / no avatar; pure procedural geometry.
 */
function Blob() {
  const mesh = useRef()
  const mat = useRef()
  const target = useRef(0.4)

  useFrame((state, delta) => {
    const { x, y } = state.pointer // -1..1
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.16
      mesh.current.rotation.x = THREE.MathUtils.lerp(mesh.current.rotation.x, y * 0.45, 0.04)
      mesh.current.rotation.z = THREE.MathUtils.lerp(mesh.current.rotation.z, x * 0.25, 0.04)
    }
    if (mat.current) {
      target.current = 0.38 + Math.hypot(x, y) * 0.32
      mat.current.distort = THREE.MathUtils.lerp(mat.current.distort, target.current, 0.05)
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={mesh} scale={1.15}>
        <icosahedronGeometry args={[1, 16]} />
        <MeshDistortMaterial
          ref={mat}
          color="#0ECCA8"
          roughness={0.35}
          metalness={0.1}
          distort={0.4}
          speed={1.4}
        />
      </mesh>
    </Float>
  )
}

export default function Scene({ active = true }) {
  return (
    <Canvas
      className="!absolute inset-0"
      dpr={[1, 1.6]}
      frameloop={active ? 'always' : 'demand'}
      camera={{ position: [0, 0, 6], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} color="#ffffff" />
      <pointLight position={[-6, -3, -2]} intensity={45} color="#0ECCA8" />
      <pointLight position={[6, 4, 4]} intensity={10} color="#bfeee6" />
      <Suspense fallback={null}>
        <Blob />
      </Suspense>
    </Canvas>
  )
}

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls, PerspectiveCamera, Plane, BakeShadows } from '@react-three/drei'
import Car from './Car'
import Cone from './Cone'
import Tag from './Tag'

export default function App() {
  return (
    <>
      <Canvas shadows gl={{ toneMappingExposure: 0.7 }}>
        <Suspense fallback={null}>
          <Environment files={'/old_depot_2k.hdr'} exposure={0.5} ground={{ height: 32, radius: 130 }} />
          <spotLight angle={0.5} castShadow position={[-80, 200, -100]} intensity={1} shadow-mapSize={[515, 128]} />

          <Car position={[-8, -1.9, -2]} scale={20} rotation-y={-Math.PI / 4} />

          <Cone scale={25} position={[35, 0, 0]} rotation={[0, 0.5, 0]} />
          <Cone scale={25} position={[-5, 0, 40]} rotation={[0, 1.5, 0]} />
          <Cone scale={25} position={[-55, 0, 0]} rotation={[0, -0.25, 0]} />
          <Cone scale={25} position={[-20, 0, -35]} rotation={[0, 2.9, 0]} />

          <Plane receiveShadow position={[0, 0.1, 0]} rotation-x={-Math.PI / 2} args={[500, 500]}>
            <shadowMaterial opacity={0.65} />
          </Plane>
          <ContactShadows frames={1} resolution={1024} scale={110} blur={0.5} opacity={0.2} far={100} />
          <BakeShadows />
        </Suspense>

        <OrbitControls autoRotate autoRotateSpeed={0.5} enableZoom={false} enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2.15} makeDefault />
        <PerspectiveCamera makeDefault position={[-30, 100, 120]} fov={35} />
      </Canvas>
      <Tag />
    </>
  )
}

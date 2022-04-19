import { useGLTF } from '@react-three/drei'

export default function Cone({ ...props }) {
  const { nodes, materials } = useGLTF('/cone-transformed-v1.glb')
  return <mesh dispose={null} castShadow geometry={nodes.Aset_other__M_uhrhabqfa_LOD0.geometry} material={materials.DefaultMaterial} {...props} />
}

useGLTF.preload('/cone-transformed-v1.glb')

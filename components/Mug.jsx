import { useGLTF } from '@react-three/drei'

export function Mug(props) {
	const { nodes } = useGLTF('/models/mug.glb')

	return <group {...props} dispose={null}>
		<mesh geometry={nodes.Mug_MugMaterial_0.geometry}>
			<meshBasicMaterial />
		</mesh>
	</group>
}

useGLTF.preload('/models/mug.glb')

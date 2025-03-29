import { useGLTF } from "@react-three/drei"

export default function Name() {
	const { nodes } = useGLTF("/models/name.glb")

	return <>
		<mesh
			rotation-x={Math.PI / 2}
			position={[-5, -.1, .3]}
			geometry={nodes["Text"].geometry}
		>
			<meshBasicMaterial />
		</mesh>
	</>
}

useGLTF.preload("/models/name.glb")

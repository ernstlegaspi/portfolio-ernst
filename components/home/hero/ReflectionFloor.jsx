import { MeshReflectorMaterial, useGLTF } from "@react-three/drei"

export default function ReflectionFloor() {
	const { nodes } = useGLTF("/models/code.glb")

	return <>
		<mesh position-y={-.4} rotation-x={-Math.PI / 2}>
			<planeGeometry args={[100, 100]} />
			<MeshReflectorMaterial
				blur={[1000, 1000]}
				resolution={2048}
				mixBlur={100}
				mixStrength={100}
				roughness={1}
				depthScale={1}
				opacity={1}
				transparent
				minDepthThreshold={.4}
				maxDepthThreshold={1.4}
				color="#080808"
				metalness={0}
			/>
		</mesh>
		<mesh position={[-.7, -.3, 2]} geometry={nodes.Test.geometry}>
			<meshBasicMaterial color="#ffffff" />
		</mesh>
	</>
}
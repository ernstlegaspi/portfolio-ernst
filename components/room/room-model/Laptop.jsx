export default function Laptop({ nodes, materials }) {
	return <group name="laptop" position={[3.494, 3.266, 4.357]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.457}>
		<group name="root">
			<group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
				<group name="Plane001_5" position={[0, 1.408, -1.343]} rotation={[Math.PI / 2, 0, 0]}>
					<mesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials['Material.005']} />
				</group>
				<group name="Plane003_1" position={[0, 0.13, 0]}>
					<mesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.003']} />
				</group>
				<group name="Plane_0" position={[-0.929, 0, -0.308]}>
					<mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.002']} />
					<mesh name="Object_5" geometry={nodes.Object_5.geometry} material={materials['Material.001']} />
				</group>
			</group>
		</group>
	</group>
}

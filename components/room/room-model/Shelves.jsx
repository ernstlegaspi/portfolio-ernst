export default function Shelves({ nodes, materials }) {
	return <group name="shelves" position={[-1.796, 3.839, 0.717]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={3.299}>
		<group name="Collada_visual_scene_group" rotation={[Math.PI / 2, 0, 0]}>
			<group name="Box001" />
			<group name="decorated_shelf">
				<mesh name="defaultMaterial005" geometry={nodes.defaultMaterial005.geometry} material={materials.decor_shelf} position={[0.955, 1.034, -1.891]} scale={1.368} />
			</group>
			<group name="empty_shelf">
				<mesh name="defaultMaterial002" geometry={nodes.defaultMaterial002.geometry} material={materials.empty_shelf} position={[0.955, 1.034, -1.891]} scale={1.368} />
			</group>
			<group name="empty_triangluar">
				<mesh name="defaultMaterial001" geometry={nodes.defaultMaterial001.geometry} material={materials.empty_triangle} position={[0.955, 1.034, -1.891]} scale={1.368} />
			</group>
			<group name="triangluar_shelf">
				<mesh name="defaultMaterial003" geometry={nodes.defaultMaterial003.geometry} material={materials.fern} position={[0.955, 1.034, -1.891]} scale={1.368} />
			</group>
			<group name="triangluar_shelf001">
				<mesh name="defaultMaterial004" geometry={nodes.defaultMaterial004.geometry} material={materials.decor_triangle} position={[0.955, 1.034, -1.891]} scale={1.368} />
			</group>
		</group>
	</group>
}

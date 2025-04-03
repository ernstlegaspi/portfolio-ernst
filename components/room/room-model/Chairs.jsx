export default function Chairs({ nodes, materials }) {
	return <group name="chair001" position={[1.85, 2.55, 4.321]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.347}>
		<group name="Collada_visual_scene_group002" rotation={[Math.PI / 2, 0, 0]}>
			<group name="Chair">
				<mesh name="left_chair_hover" geometry={nodes.left_chair_hover.geometry} material={materials['01___Default']} position={[2.722, 0, -0.582]} rotation={[0, 1.571, 0]} />
				<mesh name="right_chair_hover" geometry={nodes.right_chair_hover.geometry} material={materials['01___Default']} />
			</group>
		</group>
	</group>
}

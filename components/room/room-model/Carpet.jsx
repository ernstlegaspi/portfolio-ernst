export default function Carpet({ nodes, materials }) {
	return <group name="carpet" position={[-0.411, 0.25, 0.816]} rotation={[-Math.PI / 2, 0, 0]} scale={[4.772, 4.205, 1]}>
		<group name="Collada_visual_scene_group001" rotation={[Math.PI / 2, 0, 0]}>
			<group name="CarpetFluffy">
				<mesh name="defaultMaterial" geometry={nodes.defaultMaterial.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial006" geometry={nodes.defaultMaterial006.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial007" geometry={nodes.defaultMaterial007.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial008" geometry={nodes.defaultMaterial008.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial009" geometry={nodes.defaultMaterial009.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial010" geometry={nodes.defaultMaterial010.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial011" geometry={nodes.defaultMaterial011.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial012" geometry={nodes.defaultMaterial012.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial013" geometry={nodes.defaultMaterial013.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial014" geometry={nodes.defaultMaterial014.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial015" geometry={nodes.defaultMaterial015.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial016" geometry={nodes.defaultMaterial016.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial017" geometry={nodes.defaultMaterial017.geometry} material={materials.CarpetFluffy} />
				<mesh name="defaultMaterial018" geometry={nodes.defaultMaterial018.geometry} material={materials.CarpetFluffy} />
			</group>
		</group>
	</group>
}

export default function Clock({ nodes, materials }) {
	return <group name="clock" position={[-3.342, 7.882, -4.216]} rotation={[-Math.PI / 2, 0, -3.142]}>
		<group name="root001">
			<group name="GLTF_SceneRootNode001" rotation={[Math.PI / 2, 0, 0]}>
				<group name="H_29" position={[0, 0, -0.004]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.346, 0.005, 0.041]}>
					<mesh name="Object_40001" geometry={nodes.Object_40001.geometry} material={materials['.004']} />
				</group>
				<group name="M_30" position={[0, 0, 0.009]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.422, 0.005, 0.031]}>
					<mesh name="Object_42001" geometry={nodes.Object_42001.geometry} material={materials['.004']} />
				</group>
				<group name="Sec_31" position={[0, 0, 0.015]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.422, 0.005, 0.031]}>
					<mesh name="Object_44001" geometry={nodes.Object_44001.geometry} material={materials['.004']} />
				</group>
				<group name="Clock_28" rotation={[Math.PI / 2, 0, Math.PI]} scale={[-1, -0.101, -1]}>
					<group name="22_0" position={[0, -0.738, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-0.009, -0.293, -0.009]}>
						<mesh name="Object_8001" geometry={nodes.Object_8001.geometry} material={materials['.005']} />
					</group>
					<group name="glass_1" position={[0, -1.515, 0]} rotation={[Math.PI, 0, 0]}>
						<mesh name="Object_10001" geometry={nodes.Object_10001.geometry} material={materials['.002']} />
					</group>
					<group name="t013_15" position={[0, -0.65, 0.797]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_14001" geometry={nodes.Object_14001.geometry} material={materials.material_5} />
					</group>
					<group name="t014_16" position={[0.804, -0.65, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_16001" geometry={nodes.Object_16001.geometry} material={materials.material_5} />
					</group>
					<group name="t015_17" position={[-0.836, -0.65, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_18001" geometry={nodes.Object_18001.geometry} material={materials.material_5} />
					</group>
					<group name="t016_18" position={[-0.722, -0.65, 0.418]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_20001" geometry={nodes.Object_20001.geometry} material={materials.material_5} />
					</group>
					<group name="t017_19" position={[0, -0.65, -0.797]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_22001" geometry={nodes.Object_22001.geometry} material={materials.material_5} />
					</group>
					<group name="t018_20" position={[-0.417, -0.65, 0.723]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_24001" geometry={nodes.Object_24001.geometry} material={materials.material_5} />
					</group>
					<group name="t019_21" position={[-0.397, -0.65, -0.693]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_26001" geometry={nodes.Object_26001.geometry} material={materials.material_5} />
					</group>
					<group name="t020_22" position={[-0.688, -0.65, -0.401]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_28001" geometry={nodes.Object_28001.geometry} material={materials.material_5} />
					</group>
					<group name="t021_23" position={[0.396, -0.65, -0.693]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_30001" geometry={nodes.Object_30001.geometry} material={materials.material_5} />
					</group>
					<group name="t022_24" position={[0.687, -0.65, -0.402]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_32001" geometry={nodes.Object_32001.geometry} material={materials.material_5} />
					</group>
					<group name="t023_25" position={[0.669, -0.65, 0.381]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_34001" geometry={nodes.Object_34001.geometry} material={materials.material_5} />
					</group>
					<group name="t024_26" position={[0, -0.65, 0]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.073, 0.728, 0.073]}>
						<mesh name="Object_36001" geometry={nodes.Object_36001.geometry} material={materials.material_5} />
					</group>
					<group name="t025_27" position={[0.391, -0.65, 0.657]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_38001" geometry={nodes.Object_38001.geometry} material={materials.material_5} />
					</group>
					<group name="t_2" position={[0, -0.65, -0.915]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.238, 2.365, 0.238]}>
						<mesh name="Object_12001" geometry={nodes.Object_12001.geometry} material={materials.material_5} />
					</group>
					<mesh name="Object_4001" geometry={nodes.Object_4001.geometry} material={materials.WoodFlooring044_3K} />
					<mesh name="Object_5001" geometry={nodes.Object_5001.geometry} material={materials.material} />
					<mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.material_2} />
				</group>
			</group>
		</group>
	</group>
}

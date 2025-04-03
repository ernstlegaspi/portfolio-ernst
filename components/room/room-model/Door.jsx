export default function Door({ nodes, materials }) {
	return <group name="door" position={[-3.211, 0.2, -4.624]} rotation={[-Math.PI / 2, 0, 0]} scale={[2.459, 3.936, 2.682]}>
		<group name="c6e82a2cb0fb4dd08e069d6fed419d9ffbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
			<group name="RootNode">
				<group name="BigDoor" position={[70.96, 1219.193, 3.448]} rotation={[-Math.PI / 2, 0, 0]} scale={[5, 70, 137.5]}>
					<mesh name="BigDoor_DoorHandle_0" geometry={nodes.BigDoor_DoorHandle_0.geometry} material={materials.DoorHandle} />
					<mesh name="BigDoor_OutsideWindowLight_0" geometry={nodes.BigDoor_OutsideWindowLight_0.geometry} material={materials.OutsideWindowLight} />
					<mesh name="BigDoor_WhiteWalls001_0" geometry={nodes.BigDoor_WhiteWalls001_0.geometry} material={materials['WhiteWalls.001']} />
				</group>
				<group name="Frame" position={[-5.531, 124.634, 3.345]} rotation={[-Math.PI / 2, 0, 0]} scale={[5, 100, 137.5]}>
					<mesh name="Frame_WhiteWalls001_0" geometry={nodes.Frame_WhiteWalls001_0.geometry} material={materials['WhiteWalls.001']} />
				</group>
				<group name="SmallDoor" position={[-81.831, 1220.264, 3.487]} rotation={[-Math.PI / 2, 0, 0]} scale={[5, 70, 137.5]}>
					<mesh name="SmallDoor_OutsideWindowLight_0" geometry={nodes.SmallDoor_OutsideWindowLight_0.geometry} material={materials.OutsideWindowLight} />
					<mesh name="SmallDoor_WhiteWalls001_0" geometry={nodes.SmallDoor_WhiteWalls001_0.geometry} material={materials['WhiteWalls.001']} />
				</group>
			</group>
		</group>
	</group>
}

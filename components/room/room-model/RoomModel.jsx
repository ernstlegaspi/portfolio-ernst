import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import Door from './Door'
import Carpet from './Carpet'
import Shelves from './Shelves'
import Plant from './Plant'
import Laptop from './Laptop'
import Chairs from './Chairs'
import PC from './PC'
import Clock from './Clock'

export default function RoomModel(props) {
	const { nodes, materials } = useGLTF('/models/room.glb')
	const group = useRef()

	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<Shelves nodes={nodes} materials={materials} />

				<Carpet nodes={nodes} materials={materials} />

				<Door nodes={nodes} materials={materials} />

				<Plant nodes={nodes} materials={materials} />

				<Laptop nodes={nodes} materials={materials} />

				<Chairs nodes={nodes} materials={materials} />

				<PC nodes={nodes} materials={materials} />

				<Clock nodes={nodes} materials={materials} />

				{/* <group name="Empty" position={[-0.358, 8.239, -3.923]} rotation={[Math.PI / 2, 0, 0]} scale={0.193} />
				<group name="Empty001" position={[2.129, 7.184, -4.045]} rotation={[Math.PI / 2, 0, 0]} scale={[0.267, 0.267, 0.226]} />
				<group name="Empty002" position={[3.517, 7.815, -4.045]} rotation={[Math.PI / 2, 0, 0]} scale={0.229} />
				<group name="Empty003" position={[0.823, 8.369, -3.942]} rotation={[Math.PI / 2, 0, 0]} scale={0.258} />
				<group name="Empty004" position={[3.413, 6.123, -4.045]} rotation={[Math.PI / 2, 0, 0]} scale={0.264} />
				<group name="Empty005" position={[0.775, 6.54, -4.045]} rotation={[Math.PI / 2, 0, 0]} scale={0.29} />
				<group name="Empty006" position={[-0.378, 6.305, -4.045]} rotation={[Math.PI / 2, 0, 0]} scale={0.199} /> */}

				<mesh name="light" geometry={nodes.light.geometry} material={materials.lambert1} position={[-4.708, 9.592, -3.88]} scale={[0.09, 0.065, 0.065]} />
				<mesh name="floor" geometry={nodes.floor.geometry} material={materials.Material} position={[-0.381, 0.065, 0.784]} scale={[5.27, 0.135, 5.27]} />
				<mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.table} position={[3.6, 3.266, -4.216]} scale={[1, 0.1, 5.135]} />
				<mesh name="left_wall" geometry={nodes.left_wall.geometry} material={materials.Material} position={[-0.381, 5.443, -4.351]} rotation={[Math.PI / 2, 0, 0]} scale={[5.27, 0.135, 5.243]} />
				<mesh name="right_wall" geometry={nodes.right_wall.geometry} material={materials.Material} position={[4.889, 5.168, -4.216]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[5.135, 0.135, 5.243]} />
				<mesh name="floor003" geometry={nodes.floor003.geometry} material={materials.white} position={[-0.381, -0.205, 0.784]} scale={[5.27, 0.135, 5.27]} />
				<mesh name="left_wall2" geometry={nodes.left_wall2.geometry} material={materials.white} position={[4.889, -0.34, -4.756]} rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={[5.513, 0.135, 5.27]} />
				<mesh name="right_wall2" geometry={nodes.right_wall2.geometry} material={materials.white} position={[4.889, -0.34, -4.756]} rotation={[0, 0, -Math.PI / 2]} scale={[5.513, 0.135, 5.405]} />
				<mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials.table} position={[-1.385, 3.266, -3.178]} rotation={[0, Math.PI / 2, 0]} scale={[1, 0.1, 2.002]} />
				<mesh name="Cube085" geometry={nodes.Cube085.geometry} material={materials['Material.026']} position={[1.583, 7.012, -4.032]} scale={[2.639, 1.974, 0.09]} />
				<mesh name="Cube086" geometry={nodes.Cube086.geometry} material={materials.table} position={[-7.261, 10.469, -4.473]} scale={[1.61, 0.066, 0.066]} />
				<mesh name="experience_hover" geometry={nodes.experience_hover.geometry} material={materials.Material} position={[-8.76, 9.107, -4.48]} scale={[1.472, 0.45, 0.029]} />
				<mesh name="floor002" geometry={nodes.floor002.geometry} material={materials.black} position={[-8.66, 10.403, -4.48]} rotation={[-Math.PI, 0, 0]} scale={[0.011, 0.199, 0.003]} />
				<mesh name="floor004" geometry={nodes.floor004.geometry} material={materials.black} position={[-5.939, 10.403, -4.48]} rotation={[-Math.PI, 0, 0]} scale={[0.011, 0.199, 0.003]} />
				<mesh name="experience_text" geometry={nodes.experience_text.geometry} material={nodes.experience_text.material} position={[-8.442, 9.377, -4.453]} rotation={[Math.PI / 2, 0, 0]} scale={0.541} />
				<mesh name="skills_hover" geometry={nodes.skills_hover.geometry} material={materials.Material} position={[-8.76, 7.81, -4.48]} rotation={[0, 0, -0.027]} scale={[1.472, 0.45, 0.029]} />
				<mesh name="floor001" geometry={nodes.floor001.geometry} material={materials.black} position={[-8.66, 9.107, -4.48]} rotation={[-Math.PI, 0, 0]} scale={[0.011, 0.201, 0.003]} />
				<mesh name="floor005" geometry={nodes.floor005.geometry} material={materials.black} position={[-5.939, 9.107, -4.48]} rotation={[-Math.PI, 0, 0.081]} scale={[0.011, 0.244, 0.003]} />
				<mesh name="skills_text" geometry={nodes.skills_text.geometry} material={nodes.skills_text.material} position={[-7.803, 8.056, -4.453]} rotation={[Math.PI / 2, -0.037, 0]} scale={0.541} />
				<mesh name="projects_hover" geometry={nodes.projects_hover.geometry} material={materials.Material} position={[-8.76, 6.403, -4.48]} rotation={[0, 0, 0.062]} scale={[1.472, 0.45, 0.029]} />
				<mesh name="floor006" geometry={nodes.floor006.geometry} material={materials.black} position={[-8.66, 7.81, -4.48]} rotation={[-Math.PI, 0, 0]} scale={[0.011, 0.25, 0.003]} />
				<mesh name="floor007" geometry={nodes.floor007.geometry} material={materials.black} position={[-6.006, 7.729, -4.48]} rotation={[-Math.PI, 0, -0.239]} scale={[0.011, 0.131, 0.003]} />
				<mesh name="projects_text" geometry={nodes.projects_text.geometry} material={nodes.projects_text.material} position={[-8.145, 6.705, -4.453]} rotation={[Math.PI / 2, 0.11, 0]} scale={0.541} />
			</group>
		</group>
	)
}

// useGLTF.preload('/models/room.glb')

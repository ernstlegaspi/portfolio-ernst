import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"
import { Mug } from "./Mug"
import CoffeeSmoke from "./CoffeeSmoke"

export default function CoffeeMug() {
	const { nodes, materials } = useLoader(GLTFLoader, "/models/mug.glb")
	// console.log(nodes)
	// console.log(materials)

	return <group>
		<CoffeeSmoke
			position={[.15, 3.05, 0]}
		/>

		<Mug
			position-y={-.1}
			scale={[.2, .2, .2]}
		/>

		<mesh
			position={[0, 1, 0]}
			scale={[.5, .5, .5]}
		>
			<cylinderGeometry />
			<meshBasicMaterial color="#74512D" />
		</mesh>
	</group>
}

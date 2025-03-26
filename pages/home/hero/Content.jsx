import { useFrame } from "@react-three/fiber"
import Name from "./Name"
import ReflectionFloor from "./ReflectionFloor"
import Wall from "./Wall"

export default function Content() {
	const pointer = { x: 0, y: 0 }

	useFrame(() => {

	})

	return <group>
		<Name />
		<Wall />
		<ReflectionFloor />
	</group>
}
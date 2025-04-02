import { useEffect, useRef } from "react"
import { RoomModel } from "./RoomModel"
import { useFrame } from "@react-three/fiber"
import gsap from "gsap"

export default function Room() {
	const ref = useRef()

	useEffect(() => {
		if(!ref.current) return

		gsap.to(ref.current.scale, {
			x: 1,
			y: 1,
			z: 1,
			duration: 2
		})
	}, [])

	return <group scale={[.1, .1, .1]} ref={ref}>
		<mesh
			rotation-x={-Math.PI / 2}
			scale={[100, 100, 1]}
		>
			<planeGeometry />
			<meshBasicMaterial color="#AF8F6F" />
		</mesh>

		<RoomModel
			scale={[.7, .7, .7]}
			position-y={.3}
		/>
	</group>
}

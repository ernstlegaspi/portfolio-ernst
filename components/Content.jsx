import { useEffect, useRef } from "react"
import CoffeeMug from "./CoffeeMug"
import Floor from "./Floor"
import { useFrame } from "@react-three/fiber"
import { MathUtils } from "three"

export default function Content() {
	const ref = useRef()
	const pointer = { x: 0, y: 0 }

	useEffect(() => {
		const pointerMove = e => {
			pointer.x = (e.clientX / window.innerWidth) * 2 - 1
			pointer.y = - (e.clientY / window.innerHeight) * 2 + 1
		}

		window.addEventListener("pointermove", pointerMove)

		return () => {
			window.removeEventListener("pointermove", pointerMove)
		}
	}, [])

	useFrame(() => {
		if(!ref.current) return

		ref.current.rotation.y = MathUtils.lerp(
			ref.current.rotation.y,
			MathUtils.clamp(pointer.x, -.1, .1),
			.01
		)

		ref.current.rotation.x = MathUtils.lerp(
			ref.current.rotation.x,
			MathUtils.clamp(pointer.y, -.1, .1),
			.005
		)
	})
	
	return <group ref={ref}>
		<CoffeeMug />
		<Floor />
	</group>
}

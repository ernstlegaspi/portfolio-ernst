import { useEffect, useRef } from "react"
import { useGrowingStore } from "@/hooks/growing"
import { useFrame } from "@react-three/fiber"
import { MathUtils } from "three"

import RoomModel from "./RoomModel"
import gsap from "gsap"
import RoomFloor from "./RoomFloor"

export default function Room() {
	const { isGrowing, isGrowingDone } = useGrowingStore()
	const pointer = { x: 0, y: 0 }
	const ref = useRef()

	useEffect(() => {
		if(!ref.current || !isGrowing) return

		gsap.to(ref.current.scale, {
			x: 1,
			y: 1,
			z: 1,
			duration: 2,
			delay: 2
		})
	}, [isGrowing])

	useEffect(() => {
		if(!isGrowingDone) return

		const pointerMove = e => {
			pointer.x = (e.clientX / window.innerWidth) * 2 - 1
			pointer.y = - (e.clientY / window.innerHeight) * 2 + 1
		}

		window.addEventListener("pointermove", pointerMove)

		return () => {
			window.removeEventListener("pointermove", pointerMove)
		}
	}, [isGrowingDone])

	useFrame(() => {
		if(!ref.current || !isGrowingDone) return

		ref.current.rotation.y = MathUtils.lerp(
			ref.current.rotation.y,
			MathUtils.clamp(pointer.x, -.2, .2),
			.003
		)
	})

	return <group position-y={5} ref={ref} scale={[0, 0, 0]}>
		<RoomModel
			scale={[.6, .6, .6]}
			position-y={.3}
			rotation={[0, 6.7, 0]}
		/>

		<RoomFloor />
	</group>
}

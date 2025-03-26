"use client"

import { useEffect, useRef } from "react"
import Name from "./Name"
import ReflectionFloor from "./ReflectionFloor"
import Wall from "./Wall"
import { useFrame } from "@react-three/fiber"
import { MathUtils } from "three"

export default function Content() {
	const ref = useRef()
	const pointer = { x: 0, y: 0 }

	const pointerMove = e => {
		pointer.x = (e.clientX / window.innerWidth) * 2 - 1
		pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
	}

	useEffect(() => {
		window.addEventListener("pointermove", pointerMove)

		return () => {
			window.removeEventListener("pointermove", pointerMove)
		}
	}, [])

	useFrame(() => {
		if(!ref.current) return

		ref.current.rotation.y = MathUtils.lerp(
			MathUtils.clamp(ref.current.rotation.y, -.52, .52),
			-pointer.x * 1,
			.03
		)

		console.log(ref.current.rotation.x)
		
		ref.current.rotation.x = MathUtils.lerp(
			MathUtils.clamp(ref.current.rotation.x, -.035, .8),
			pointer.y * 1,
			.03
		)
	})

	return <group ref={ref}>
		<Name />
		<Wall />
		<ReflectionFloor />
	</group>
}
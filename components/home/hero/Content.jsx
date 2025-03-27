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
			MathUtils.clamp(ref.current.rotation.y, -.5, .5),
			-pointer.x * 1,
			.005
		)

		ref.current.rotation.x = MathUtils.lerp(
			MathUtils.clamp(ref.current.rotation.x, .07, .7),
			pointer.y * 1,
			.005
		)
	})

	return <group ref={ref}>
		<Name />
		<Wall />
		<ReflectionFloor />
	</group>
}
import { useGrowingStore } from "@/hooks/growing"
import { useEffect, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"

import gsap from "gsap"

export default function MainCamera() {
	const { isGrowingDone } = useGrowingStore()
	const cameraRef = useRef()

	useEffect(() => {
		if(!cameraRef.current || !isGrowingDone) return

		gsap.to(cameraRef.current.position, {
			x: -2.9504296930208564,
			y: 25,
			z: 25,
			duration: 1
		})
	}, [isGrowingDone])

	useFrame(() => {
		if(!cameraRef.current || !isGrowingDone) return

		cameraRef.current.lookAt(0, 7.2, 0)

		// cameraRef.current.position.x += .003
		// cameraRef.current.lookAt(cameraRef.current.position.x, 0, 0)
	})

	return <PerspectiveCamera
		name="Main Camera"
		makeDefault
		position={[-2.9504296930208564, 16.15804234763166, 13.40389032298172]}
		ref={cameraRef}
		zoom={isGrowingDone ? 2 : 1}
	/>
}

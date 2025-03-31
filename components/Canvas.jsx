"use client"

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import CoffeeMug from "./CoffeeMug"
import Floor from "./Floor"

export default function CanvasComp() {
	return <Canvas>
		<PerspectiveCamera makeDefault position={[-2.9504296930208564, 16.15804234763166, 13.40389032298172]} />

		<CoffeeMug />
		<Floor />

		<OrbitControls
			makeDefault
			enableDamping
			dampingFactor={.03}
			enablePan={false}
			enableRotate={false}
			minDistance={6}
			maxDistance={22}
		/>
	</Canvas>
}

"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

import Content from "./Content"

export default function Hero() {
	return <Canvas>
		<color args={[0, 0, 0]} attach="background" />
		<PerspectiveCamera makeDefault position={[0, 0, 7]} />

		<ambientLight />

		<Content />

		<OrbitControls
			makeDefault
			enableDamping
			dampingFactor={0.03}
			enablePan={false}
			enableZoom={false}
			// minAzimuthAngle={-Math.PI / 6}
			// maxAzimuthAngle={Math.PI / 6}
			// minPolarAngle={Math.PI / 7}
			// maxPolarAngle={Math.PI / 2}
		/>
	</Canvas>
}
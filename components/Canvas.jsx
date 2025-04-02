"use client"

import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useGrowingStore } from "@/hooks/growing"

import dynamic from "next/dynamic"

import Content from "./Content"
// import Room from "./Room"

export default function CanvasComp() {
	const { isGrowingDone } = useGrowingStore()
	// 794C22

	return <div className={`${isGrowingDone ? "bg-[#794C22]" : "bg-light-brown"} h-[100vh]`}>
		<p className="absolute bottom-3 left-[50%] translate-x-[-50%] text-white">Scroll to continue</p>
		<Canvas>
			<PerspectiveCamera
				name="Main Camera"
				makeDefault
				position={[-2.9504296930208564, 16.15804234763166, 13.40389032298172]}
			/>

			<ambientLight intensity={3} />

			{/* { isGrowingDone ? <Room /> : <Content /> } */}
			<Content />

			<OrbitControls
				makeDefault
				enableDamping
				dampingFactor={.03}
				enablePan={false}
				enableRotate={false}
				enableZoom={false}
			/>
		</Canvas>
	</div>
}

"use client"

import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useGrowingStore } from "@/hooks/growing"

import CoffeeContent from "./coffee/CoffeeContent"
import MainCamera from "./MainCamera"
import Room from "./room/Room"
import Modal from "./modals/Modal"
import { useModalStore } from "@/hooks/modal"

export default function CanvasComp() {
	const { isModalActive } = useModalStore()
	const { isGrowing, isGrowingDone } = useGrowingStore()

	return <div className="h-[100vh] relative">
		{ isModalActive ? <Modal /> : null }

		<div className={`${isGrowingDone ? "bg-[#794C22]" : "bg-light-brown"} h`}>
			{
				isGrowing ? null
				: <p className="absolute bottom-3 left-[50%] translate-x-[-50%] text-white">Scroll to continue</p>
			}

			<Canvas shadows>
				<MainCamera />

				<Environment preset="sunset" />

				<Room />

				{ isGrowingDone ? null : <CoffeeContent /> }

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
	</div>
}

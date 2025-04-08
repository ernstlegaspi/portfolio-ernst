"use client"

import { Environment, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useGrowingStore } from "@/hooks/growing"
import { useModalStore } from "@/hooks/modal"
import { useEffect, useState } from "react"
import { MdKeyboardDoubleArrowDown } from "react-icons/md"

import CoffeeContent from "./coffee/CoffeeContent"
import MainCamera from "./MainCamera"
import Room from "./room/Room"
import Modal from "./modals/Modal"

export default function CanvasComp() {
	const { isModalActive } = useModalStore()
	const { isGrowing, isGrowingDone } = useGrowingStore()
	const [isMobile, setIsMobile] = useState(false)
	const [innerWidth, setInnerWidth] = useState(null)

	useEffect(() => {
		setInnerWidth(window.innerWidth)

		const resize = () => {
			setIsMobile(window.innerWidth < 771)
		}

		window.addEventListener("resize", resize)

		return () => {
			window.removeEventListener("resize", resize)
		}
	}, [])

	if(isMobile || innerWidth < 771) return <div className="px-4 text-center w h-[100vh] bg-light-brown flex items-center justify-center font-bold text-white flex-col text-[20px]">
		<p>This app is best viewed on a larger screen.</p>
		<p>Please use a tablet or desktop for the best experience.</p>
	</div>

	return <div className="h-[100vh] relative">
		{ isModalActive ? <Modal /> : null }

		<div className={`${isGrowingDone ? "bg-[#794C22]" : "bg-light-brown"} h`}>
			{
				isGrowing ? null
				: <div className="absolute bottom-3 flex flex-col items-center left-[50%] translate-x-[-50%] text-white">
					<p>Scroll to continue</p>
					<p className="mt-2"><MdKeyboardDoubleArrowDown size={22} /></p>
				</div>
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

"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, ScrollControls } from "@react-three/drei"

import Content from "./Content"
import { useEffect, useRef } from "react"
import gsap from "gsap"

// tasks
// 3. particles
// 4. detect if scroll up or down

export default function Hero() {
	const heroRef = useRef()
	const skillsRef = useRef()

	let numScroll = 0
	let userScrolled = false

	useEffect(() => {
		const onWheel = e => {
			numScroll++
			userScrolled = true

			if(numScroll < 2) {
				const interval = setInterval(() => {
					numScroll = 0
				}, 200)
		
				setTimeout(() => {
					clearInterval(interval)
				}, 300)

				return
			}

			gsap.to(heroRef.current.style, {
				opacity: 0,
				duration: .3
			})

			gsap.to(skillsRef.current.style, {
				opacity: 1,
				marginTop: "0px",
				duration: .3
			})
		}

		window.addEventListener("wheel", onWheel)

		return () => {
			window.removeEventListener("wheel", onWheel)
		}
	}, [])

	return <div className="w h relative overflow-hidden">
		<div ref={heroRef} style={{ position: "absolute", top: 0, opacity: 1 }} className="w h">
			<Canvas>
				<PerspectiveCamera makeDefault position={[0, 0, 8]} />

				<Content />

				<ambientLight />

				<OrbitControls
					makeDefault
					enableDamping
					dampingFactor={0.03}
					enablePan={false}
					enableZoom={false}
					enableRotate={false}
				/>
			</Canvas>
		</div>

		<div ref={skillsRef} style={{ position: "absolute", marginTop: "1000px", opacity: 0 }} className="w h">
			<Canvas>
				<PerspectiveCamera makeDefault position={[0, 0, 8]} />

				<mesh>
					<boxGeometry />
					<meshStandardMaterial color="#fff" />
				</mesh>

				<ambientLight />

				<OrbitControls
					makeDefault
					enableDamping
					dampingFactor={0.03}
				/>
			</Canvas>
		</div>
	</div>
}
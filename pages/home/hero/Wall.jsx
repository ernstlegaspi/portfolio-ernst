"use client"

import gsap from "gsap"
import { useRef, useState } from "react"

const planeWidth = 40
const planeHeight = 11.4

export default function Wall() {
	const arr = new Array(60).fill(0)
	let x = 0, y = 0, prev = 0

	const Plane = ({ idx }) => {
		const planeRef = useRef()
		const matRef = useRef()
		const [hovering, setHovering] = useState(false)

		const onPointerEnter = () => {
			// if(hovering) return

			// setHovering(true)

			gsap.to(matRef.current, {
				opacity: .6,
				duration: 1
			})
		}

		const onPointerLeave = () => {
			// if(!hovering) return
			
			// setHovering(false)

			gsap.to(matRef.current, {
				opacity: 0.013,
				duration: 1
			})
		}

		if(idx % 20 === 0 && idx !== 0 && prev !== idx) {
			y += 2.05
			x = -2.05
		}

		if(idx !== 0 && prev !== idx) {
			x += 2.05
		}

		prev = idx

		return <mesh ref={planeRef} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} position={[(-planeWidth / 2) + (1.0 + x), (planeHeight / 2) - (1.0 + y), .01]}>
			<planeGeometry args={[2, 2]} />
			<meshBasicMaterial ref={matRef} transparent opacity={.013} color="#fff" />
		</mesh>
	}

	return <mesh position-z={-.5}>
		<planeGeometry args={[planeWidth, planeHeight]} />
		<meshBasicMaterial color="#080808" />

		{ arr && arr.map((v, i) => <Plane key={i} idx={i} />) }
	</mesh>
}
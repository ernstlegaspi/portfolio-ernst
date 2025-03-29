import gsap from "gsap"
import { useRef } from "react"

const planeWidth = 40
const planeHeight = 11.4

export default function Wall() {
	const arr = new Array(60).fill(0)
	let x = 0, y = 0, prev = 0

	const Plane = ({ idx }) => {
		const planeRef = useRef()
		const matRef = useRef()

		const onPointerEnter = () => {
			gsap.to(matRef.current, {
				opacity: .75,
				duration: 1
			})
		}

		const onPointerLeave = () => {
			gsap.to(matRef.current, {
				opacity: 0.1,
				duration: 1
			})
		}

		if(idx % 20 === 0 && idx !== 0 && prev !== idx) {
			y += 2.015
			x = -2.015
		}

		if(idx !== 0 && prev !== idx) {
			x += 2.015
		}

		prev = idx

		return <mesh ref={planeRef} onPointerEnter={onPointerEnter} onPointerLeave={onPointerLeave} position={[(-planeWidth / 2) + (1.0 + x), (planeHeight / 2) - (1.0 + y), .01]}>
			<planeGeometry args={[2, 2]} />
			<meshBasicMaterial ref={matRef} transparent opacity={.1} color="#fff" />
		</mesh>
	}

	return <mesh position-z={-.5}>
		<planeGeometry args={[planeWidth, planeHeight]} />
		<meshBasicMaterial color="#080808" />

		{ arr && arr.map((v, i) => <Plane key={i} idx={i} />) }
	</mesh>
}
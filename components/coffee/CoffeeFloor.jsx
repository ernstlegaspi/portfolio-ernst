import { useRef } from "react"
import { useGrowingStore } from "@/hooks/growing"

import gsap from "gsap"

const arr = new Array(40).fill(0)
const tileSize = 10

export default function CoffeeFloor() {
	const { isGrowing } = useGrowingStore()

	let x = 0
	let k = 1
	let z = -35

	const Tile = ({ i }) => {
		const matRef = useRef()
		
		const pointerEnter = () => {
			if(isGrowing) return

			gsap.to(matRef.current, {
				opacity: .75,
				duration: .5
			})
		}

		const pointerLeave = () => {
			if(isGrowing) return

			gsap.to(matRef.current, {
				opacity: 0,
				duration: 1
			})
		}

		if(i % 8 === 0) {
			z += tileSize
			k = 0
		}

		x = -35 + (tileSize * k++)

		return <mesh
			onPointerEnter={pointerEnter}
			onPointerLeave={pointerLeave}
			position-x={x}
			position-z={z}
			rotation-x={-Math.PI / 2}
		>
			<planeGeometry args={[tileSize, tileSize]} />
			<meshBasicMaterial ref={matRef} transparent opacity={.0} color="#6e4a26" />
		</mesh>
	}

	return <>
		{ arr && arr.map((v, i) => <Tile key={i} i={i} />) }
	</>
}

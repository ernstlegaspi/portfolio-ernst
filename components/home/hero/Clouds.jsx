import * as THREE from "three"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Clouds, Cloud, Sky as SkyImpl } from "@react-three/drei"
import { useControls } from "leva"

export default function Clouds1() {
	const ref = useRef()
	const cloud0 = useRef()

	const { color, x, y, z, range, ...config } = useControls({
		seed: { value: 1, min: 1, max: 100, step: 1 },
		segments: { value: 20, min: 1, max: 80, step: 1 },
		volume: { value: 6, min: 0, max: 100, step: 0.1 },
		opacity: { value: 0.8, min: 0, max: 1, step: 0.01 },
		fade: { value: 10, min: 0, max: 400, step: 1 },
		growth: { value: 4, min: 0, max: 20, step: 1 },
		speed: { value: 0.3, min: 0, max: 1, step: 0.01 },
		x: { value: 15, min: 0, max: 100, step: 1 },
		y: { value: 1, min: 0, max: 100, step: 1 },
		z: { value: 1, min: 0, max: 100, step: 1 },
		color: "white",
	})

	useFrame((state, delta) => {
		// ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2
		// ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2
		// ref.current.position.x += delta * 0.2
	})

	return <group scale={[.5, .5, .5]} ref={ref} position={[0, -1.2, 4]}>
		<ambientLight />
		<Clouds material={THREE.MeshLambertMaterial} limit={400} range={range}>
			<Cloud
				ref={cloud0}
				{...config}
				bounds={[x, y, z]}
				color={color}
			/>
			{/* <Cloud concentrate="outside" growth={100} color="#ffccdd" opacity={1.25} seed={0.3} bounds={200} volume={200} /> */}
		</Clouds>
	</group>
}

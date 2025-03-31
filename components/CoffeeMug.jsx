import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from "three/addons/loaders/GLTFLoader"
import { Mug } from "./Mug"
import { useEffect, useRef, useState } from "react"

import CoffeeSmoke from "./CoffeeSmoke"
import gsap from "gsap"

export default function CoffeeMug() {
	const coffeeGroupRef = useRef()
	const smokeRef = useRef()
	const coffeeRef = useRef()
	const coffeeSpillRef = useRef()
	const { nodes, materials } = useLoader(GLTFLoader, "/models/coffee.glb")
	const [mugFell, setMugFell] = useState(false)

	useEffect(() => {
		const wheel = e => {
			smokeRef.current.scale.set(0, 0, 0)

			gsap.to(coffeeGroupRef.current.rotation, {
				z: 1.55,
				duration: .5
			})

			gsap.to(coffeeGroupRef.current.position, {
				y: .5,
				duration: .5,
				onComplete: () => {
					setMugFell(true)
				}
			})

			
		}

		window.addEventListener("wheel", wheel)

		return () => {
			window.removeEventListener("wheel", wheel)
		}
	}, [])

	useEffect(() => {
		if(!mugFell) return

		gsap.to(coffeeRef.current.scale, {
			x: 0,
			y: 0,
			z: 0,
			duration: .5
		})

		gsap.to(coffeeSpillRef.current.scale, {
			x: 1,
			y: 1,
			z: 1,
			duration: .5
		})

		gsap.to(coffeeSpillRef.current.position, {
			x: -2,
			y: -.85,
			duration: .5
		})
	}, [mugFell])

	return <group>
		<group ref={coffeeGroupRef}>
			<CoffeeSmoke
				ref={smokeRef}
				position={[.15, 3.05, 0]}
			/>

			<Mug
				position-y={-.1}
				scale={[.2, .2, .2]}
			/>

			<mesh
				ref={coffeeRef}
				position={[0, 1, 0]}
				scale={[.5, .5, .5]}
			>
				<cylinderGeometry />
				<meshBasicMaterial color="#74512D" />
			</mesh>
		</group>

		<mesh
			ref={coffeeSpillRef}
			scale={[0, 0, 0]}
			position={[0, 0, 0]}
			geometry={nodes.Cylinder.geometry}
			material={materials.Material}
		>
			<meshBasicMaterial color="#74512D" />
		</mesh>
	</group>
}

useLoader.preload(GLTFLoader, "/models/coffee.glb")

import { OrbitControls, PerspectiveCamera, Text, useTexture } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useEffect, useState } from "react"
import { IoCloseSharp } from "react-icons/io5"

import gsap from "gsap"

export default function Skill({ description, skillName, texturePath }) {
	const [element, setElement] = useState(null)
	const [isViewingDescription, setIsViewingDescription] = useState(null)

	useEffect(() => {
		setElement(document.getElementById(skillName))
	}, [])
	
	const Comp = () => {
		const texture = useTexture(texturePath)

		return <>
			<Text scale={[.35, .35, .35]} position-y={.6}>
				{skillName}
				<meshBasicMaterial color="white" />
			</Text>

			<mesh rotation-x={0} position-y={-.3}>
				<planeGeometry />
				<meshBasicMaterial map={texture} />
			</mesh>
		</>
	}

	const pointerEnter = () => {
		gsap.to(element, {
			bottom: "0px",
			duration: .2,
		})
	}

	const pointerLeave = () => {
		gsap.to(element, {
			bottom: "-40px",
			duration: .2
		})
	}
	
	return <div className="h-[200px] relative overflow-hidden">
		<div onPointerEnter={pointerEnter} onPointerLeave={pointerLeave} className="h-[200px] relative overflow-hidden">
			<Canvas>
				<color args={[0, 0, 0]} attach="background" />
				
				<PerspectiveCamera
					makeDefault
					position-z={8}
					zoom={3}
				/>

				<Comp />

				<OrbitControls enablePan={false} makeDefault enableDamping dampingFactor={.03} minDistance={7} maxDistance={10} />
			</Canvas>

			<div id={skillName} onClick={() => setIsViewingDescription(true)} className="cursor-pointer overflow-hidden flex items-center justify-center bg-light-brown text-white absolute w bottom-[-40px] hover:bg-brown">
				<button className="cursor-pointer">View Description</button>
			</div>
		</div>

		{ isViewingDescription ? <div className="absolute inset-0 z-30 bg-light-brown text-white">
			<div className="p-2 text-[14px]">
				<IoCloseSharp onClick={() => setIsViewingDescription(false)} className="cursor-pointer w-[20px] h-[20px]" />
				<p>{description}</p>
			</div>
		</div> : null }
	</div>
}

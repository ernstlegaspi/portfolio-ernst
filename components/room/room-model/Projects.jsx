import { useRef } from "react"
import { useModalStore } from "@/hooks/modal"

import gsap from "gsap"

export default function Projects({ nodes, materials }) {
	const { setActiveModal, setIsModalActive } = useModalStore()
	const ref = useRef()

	const onClick = () => {
		setActiveModal("projects")
		setIsModalActive(true)
	}
	
	const pointerEnter = () => {
		document.body.style.cursor = "pointer"

		if(!ref.current) return

		gsap.to(ref.current.position, {
			x: -.1,
			duration: .3
		})
	}

	const pointerLeave = () => {
		document.body.style.cursor = "default"

		if(!ref.current) return

		gsap.to(ref.current.position, {
			x: 0,
			duration: .3
		})
	}

	return <>
		<group
			ref={ref}
			onClick={onClick}
			onPointerEnter={pointerEnter}
			onPointerLeave={pointerLeave}
		>
			<mesh name="projects_hover" geometry={nodes.projects_hover.geometry} material={materials.Material} position={[-8.76, 6.403, -4.48]} rotation={[0, 0, 0.062]} scale={[1.472, 0.45, 0.029]} />
			<mesh name="projects_text" geometry={nodes.projects_text.geometry} material={nodes.projects_text.material} position={[-8.145, 6.705, -4.453]} rotation={[Math.PI / 2, 0.11, 0]} scale={0.541} />
		</group>
	</>
}

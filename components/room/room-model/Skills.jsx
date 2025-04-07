import { useModalStore } from "@/hooks/modal"
import { useRef } from "react"

import gsap from "gsap"

export default function Skills({ nodes, materials }) {
	const { setActiveModal, setIsModalActive } = useModalStore()
	const ref = useRef()

	const onClick = () => {
		setActiveModal("skills")
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
			<mesh name="skills_hover" geometry={nodes.skills_hover.geometry} material={materials.Material} position={[-8.76, 7.81, -4.48]} rotation={[0, 0, -0.027]} scale={[1.472, 0.45, 0.029]} />
			<mesh name="skills_text" geometry={nodes.skills_text.geometry} material={nodes.skills_text.material} position={[-7.803, 8.056, -4.453]} rotation={[Math.PI / 2, -0.037, 0]} scale={0.541} />
		</group>
	</>
}

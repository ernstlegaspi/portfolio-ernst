import { useModalStore } from "@/hooks/modal"
import { useRef } from "react"

import gsap from "gsap"

export default function Experience({ nodes, materials }) {
	const { setActiveModal, setIsModalActive } = useModalStore()
	const ref = useRef()

	const onClick = () => {
		setActiveModal("experience")
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

	return <group
		ref={ref}
		onClick={onClick}
		onPointerEnter={pointerEnter}
		onPointerLeave={pointerLeave}
	>
		<mesh name="experience_hover" geometry={nodes.experience_hover.geometry} material={materials.Material} position={[-8.76, 9.107, -4.48]} scale={[1.472, 0.45, 0.029]} />
		<mesh name="experience_text" geometry={nodes.experience_text.geometry} material={nodes.experience_text.material} position={[-8.442, 9.377, -4.453]} rotation={[Math.PI / 2, 0, 0]} scale={0.541} />
	</group>
}

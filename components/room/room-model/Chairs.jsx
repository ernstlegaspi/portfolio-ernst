import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

export default function Chairs({ nodes, materials }) {
	const [isChair1Hovered, setIsChair1Hovered] = useState(false)
	const [isChair2Hovered, setIsChair2Hovered] = useState(false)
	const chair1Ref = useRef()
	const chair2Ref = useRef()
	
	const chair1PointerEnter = () => {
		setIsChair1Hovered(true)
	}

	const chair1PointerLeave = () => {
		setIsChair1Hovered(false)
	}

	const chair2PointerEnter = () => {
		setIsChair2Hovered(true)
	}

	const chair2PointerLeave = () => {
		setIsChair2Hovered(false)
	}

	useFrame(() => {
		if(!chair1Ref.current || !chair2Ref.current) return


		if(isChair1Hovered) {
			chair1Ref.current.rotation.y += .015
		}

		if(isChair2Hovered) {
			chair2Ref.current.rotation.y += .015
		}
	})

	return <group name="chair001" position={[1.85, 2.55, 4.321]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={2.347}>
		<group name="Collada_visual_scene_group002" rotation={[Math.PI / 2, 0, 0]}>
			<group name="Chair">
				<mesh
					ref={chair1Ref}
					onPointerEnter={chair1PointerEnter}
					onPointerLeave={chair1PointerLeave}
					name="left_chair_hover"
					geometry={nodes.left_chair_hover.geometry}
					material={materials['01___Default']}
					position={[2.25, 0, -0.582]}
					rotation={[0, 1.571, 0]}
				/>

				<mesh
					onPointerEnter={chair2PointerEnter}
					onPointerLeave={chair2PointerLeave}
					ref={chair2Ref}
					name="right_chair_hover"
					geometry={nodes.right_chair_hover.geometry} material={materials['01___Default']}
					position-z={-.1}
				/>
			</group>
		</group>
	</group>
}

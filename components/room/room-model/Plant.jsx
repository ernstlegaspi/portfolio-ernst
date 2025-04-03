import { useRef } from "react"

import gsap from "gsap"

export default function Plant({ nodes, materials }) {
	const ref = useRef()
	const tl = gsap.timeline()

	const pointerEnter = () => {
		if(!ref.current || tl.isActive()) return

		tl.to(ref.current.position, {
			y: 3.5,
			duration: .15
		})
		.to(ref.current.position, {
			y: 3.266,
			duration: .15
		})
	}

	return <group ref={ref} onPointerEnter={pointerEnter} name="plant" position={[4.111, 3.266, 0.754]} rotation={[-Math.PI / 2, 0, 0]}>
		<group name="ecbad94c5a7e48f582eb5188a2bdcc64fbx" rotation={[Math.PI / 2, 0, 0]}>
			<group name="RootNode001">
				<group name="plant_hover" scale={0.01}>
					<group name="leaves_hover">
						<mesh name="plant_lambert2_0" geometry={nodes.plant_lambert2_0.geometry} material={materials.lambert2} />
					</group>
					<group name="pot_hover">
						<mesh name="concrete_pot_lambert3_0" geometry={nodes.concrete_pot_lambert3_0.geometry} material={materials.lambert3} />
					</group>
				</group>
			</group>
		</group>
	</group>
}

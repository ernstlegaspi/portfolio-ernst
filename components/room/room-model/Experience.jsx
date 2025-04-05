export default function Experience({ nodes, materials }) {
	return <>
		<mesh name="experience_hover" geometry={nodes.experience_hover.geometry} material={materials.Material} position={[-8.76, 9.107, -4.48]} scale={[1.472, 0.45, 0.029]} />
		<mesh name="experience_text" geometry={nodes.experience_text.geometry} material={nodes.experience_text.material} position={[-8.442, 9.377, -4.453]} rotation={[Math.PI / 2, 0, 0]} scale={0.541} />
	</>
}

export default function Projects({ nodes, materials }) {
	return <>
		<mesh name="projects_hover" geometry={nodes.projects_hover.geometry} material={materials.Material} position={[-8.76, 6.403, -4.48]} rotation={[0, 0, 0.062]} scale={[1.472, 0.45, 0.029]} />
		<mesh name="projects_text" geometry={nodes.projects_text.geometry} material={nodes.projects_text.material} position={[-8.145, 6.705, -4.453]} rotation={[Math.PI / 2, 0.11, 0]} scale={0.541} />
	</>
}

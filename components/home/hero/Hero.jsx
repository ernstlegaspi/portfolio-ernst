import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"

import Content from "./Content"

// tasks
// 3. particles
// 4. detect if scroll up or down

export default function Hero() {
	return <Canvas>
		<PerspectiveCamera makeDefault position={[0, 0, 8]} />

		<Content />

		<ambientLight />

		<OrbitControls
			makeDefault
			enableDamping
			dampingFactor={0.03}
			enablePan={false}
			enableZoom={false}
			enableRotate={false}
		/>
	</Canvas>
}
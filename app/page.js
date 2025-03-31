import Canvas from "@/components/Canvas"

export default function App() {
	return <div className="h-[100vh] bg-light-brown">
		<p className="absolute bottom-3 left-[50%] translate-x-[-50%] text-white">Scroll to continue</p>
		<Canvas />
	</div>
}

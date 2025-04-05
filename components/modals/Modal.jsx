import Skills from "./skills/Skills"

export default function Modal() {
	return <div className="rounded-sm bg-white h-[500px] w-[1000px] absolute z-[2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		<Skills />
	</div>
}

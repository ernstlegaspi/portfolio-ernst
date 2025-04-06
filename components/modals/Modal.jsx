import { useModalStore } from "@/hooks/modal"
import Skills from "./skills/Skills"

export default function Modal() {
	const { activeModal } = useModalStore()
	
	return <div className="absolute z-[2] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
		{ activeModal === "none" ? null : activeModal === "skills" ? <Skills /> : null }
	</div>
}

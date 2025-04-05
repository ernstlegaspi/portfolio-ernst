import { RiArrowDownDoubleFill } from "react-icons/ri"

import Skill from "./Skill"

export default function Skills() {
	return <>
		<div className="scroll-y grid grid-cols-4 gap-[2px] w h">
			<Skill description="lorem" skillName="React.js" texturePath="/images/reactjs.png" />
		</div>

		<div className="arrow-down absolute bottom-[10px] left-1/2 -translate-x-1/2 text-white text-[35px]">
			<RiArrowDownDoubleFill />
		</div>
	</>
}
import { backendSkills, databaseSkills, frontendSkills, otherSkills } from "@/contants"
import { useModalStore } from "@/hooks/modal"
import { IoClose } from "react-icons/io5"

export default function Skills() {
	const { setActiveModal, setIsModalActive } = useModalStore()

	const close = () => {
		setActiveModal("none")
		setIsModalActive(false)
	}

	const Skill = ({ image, name }) => {
		return <div className="transition-all rounded-sm flex items-center justify-center flex-col bshadow w-[150px] h-[150px]">
			<div className="w-[100px] h-[100px]">
				<img src={`/images/${image}`} alt={name} className="w h" />
			</div>
			<p className="mt-1 font-medium">{name}</p>
		</div>
	}

	const Label = ({ label, noMarginTop }) => <p className={`${noMarginTop ? "" : "mt-12"} font-medium text-[20px] mb-3`}>{label}</p>

	const SkillsGrid = ({ skills: __skills }) => <div className="grid grid-cols-5 gap-5">
		{ __skills.map(({ image, name }) => <Skill image={image} name={name} />) }
	</div>

	return <div className="relative p-5 rounded-sm bg-white overflow-y-scroll h-[600px]">
		<IoClose className="absolute mt-[5px] right-4 cursor-pointer" onClick={close} size={22} />

		<Label label="Front End" noMarginTop />
		<SkillsGrid skills={frontendSkills} />
		

		<Label label="Back End" />
		<SkillsGrid skills={backendSkills} />

		<Label label="Database" />
		<SkillsGrid skills={databaseSkills} />

		<Label label="Others" />
		<SkillsGrid skills={otherSkills} />
	</div>
}

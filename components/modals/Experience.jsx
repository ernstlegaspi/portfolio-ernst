import { IoClose } from "react-icons/io5"
import { useModalStore } from "@/hooks/modal"

import Image from "next/image"

import allworld from "@/public/images/allworld.png"
import jblanton from "@/public/images/jblanton.png"
import Link from "next/link"

export default function Experience() {
	const { setActiveModal, setIsModalActive } = useModalStore()

	const close = () => {
		setActiveModal("none")
		setIsModalActive(false)
	}

	return <div className="relative h-[600px]">
		<IoClose className="text-white absolute mt-[-35px] right-0 cursor-pointer" onClick={close} size={30} />

		<div className="select-none bg-white rounded-sm h overflow-y-scroll">
			<Link href="https://jblantonplumbing.com/" rel="noreferrer" target="_blank">
				<Image src={jblanton} alt="JBlanton Plumbing" className="w-[1000px] h-[600px]" />
			</Link>
			
			<div className="p-4 mb-6">
				<p className="text-[20px] font-bold">JBlanton Plumbing</p>
				<p><strong>Position:</strong> Full Stack Developer</p>
				<p>From Feb 2024 to Feb 2025</p>

				<p className="mt-3 font-bold">Tasks:</p>
				<p className="font-bold">- Front End</p>
				<p>• Design and implement responsive user interfaces using HTML, CSS, and JavaScript</p>
				<p>• Optimize UI performance (e.g., lazy loading, image optimization)</p>
				<p>• Ensure cross-browser and cross-device compatibility</p>
				<p>• Consume and cached RESTful APIs </p>
				<p>• Integrate third-party libraries (maps, google reviews, social media platforms)</p>

				<p className="font-bold mt-6">- Back End</p>
				<p>• Design and implement RESTful APIs endpoints</p>
				<p>• Create server-side logic using Go</p>
				<p>• Handle authentication and authorization (e.g., JWT, sessions)</p>
				<p>• Set up middleware for logging, error handling, and security</p>
				<p>• Perform input validation and sanitization</p>
				<p>• Manage file uploads and downloads</p>
				<p>• Implement business logic and rules</p>
			</div>

			<Link href="https://allworldseodigitalmarketingsolutions.com/" rel="noreferrer" target="_blank">
				<Image src={allworld} alt="ALLWorld SEO" className="w-[1000px] h-[600px]" />
			</Link>

			<div className="p-4 pt-0 mt-[-20px] mb-6">
				<p className="text-[20px] font-bold">ALLWorld SEO</p>
				<p><strong>Position:</strong> Full Stack Developer</p>
				<p>From Mar 2019 to Apr 2022</p>

				<p className="mt-3 font-bold">Tasks:</p>
				<p className="font-bold">- Front End</p>
				<p>• Design and implement responsive user interfaces using HTML, CSS, and JavaScript</p>
				<p>• Use frameworks like React to build dynamic components</p>
				<p>• Optimize UI performance (e.g., lazy loading, code splitting, image optimization)</p>
				<p>• Ensure cross-browser and cross-device compatibility</p>
				<p>• Consume and cached RESTful APIs </p>

				<p className="font-bold mt-6">- Back End</p>
				<p>• Design and implement RESTful APIs endpoints</p>
				<p>• Create server-side logic using Node.js</p>
				<p>• Handle authentication and authorization (e.g., JWT, sessions)</p>
				<p>• Set up middleware for logging, error handling, and security</p>
				<p>• Perform input validation and sanitization</p>
				<p>• Manage file uploads and downloads</p>
				<p>• Implement business logic and rules</p>
			</div>
		</div>
	</div>
}

"use client"

import { usePageStore } from "@/hooks/page"
import { useEffect, useRef } from "react"

import gsap from "gsap"
import Hero from "./hero/Hero"
import Skills from "./Skills/Skills"

// frontend = nextjs, reactjs, threejs, javascript, typescript, html, css, react native, tailwind css, HTMX, gsap
// backend = nodejs, expressjs, javascript, typescript, go, htmx, graphql
// database = mysql, mongodb, postgresql, redis
// others = AWS, jest, docker, git

export default function HomeComp() {
	const { currentPage, setCurrentPage } = usePageStore()
	const heroRef = useRef()
	const skillsRef = useRef()
	const tl = gsap.timeline()
	const firstPageTL = gsap.timeline()

	let numScroll = 0
	let userScrolled = false

	useEffect(() => {
		let page = 1

		const onWheel = e => {
			numScroll++
			userScrolled = true

			firstPageTL.to(heroRef.current.style, {
				marginTop: "-50px",
				duration: .3
			})

			if(numScroll < 2) {
				const interval = setInterval(() => {
					numScroll = 0

					firstPageTL.to(heroRef.current.style, {
						marginTop: "0px",
						duration: .3
					})
				}, 200)
		
				setTimeout(() => {
					clearInterval(interval)
				}, 300)

				return
			}

			if(page > 1) return

			firstPageTL.clear()

			page = 2

			firstPageTL.to(heroRef.current.style, {
				opacity: 0,
				marginTop: "-100px",
				duration: .3
			})

			tl.to(skillsRef.current.style, {
				opacity: 1,
				marginTop: "-100px",
				duration: .3
			}).to(skillsRef.current.style, {
				marginTop: "0px",
				duration: .3
			})
		}

		window.addEventListener("wheel", onWheel)

		return () => {
			window.removeEventListener("wheel", onWheel)
		}
	}, [])
	
	return <div className="w h relative overflow-hidden">
		<div ref={heroRef} style={{ position: "absolute", top: 0, opacity: 1 }} className="w h">
			<Hero />
		</div>
		<div ref={skillsRef} style={{ position: "absolute", marginTop: "1000px", opacity: 0 }} className="w h">
			<Skills />
		</div>
	</div>
}

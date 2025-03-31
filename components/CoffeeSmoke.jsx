import { extend, useFrame, useLoader } from "@react-three/fiber"
import { MeshLineGeometry, MeshLineMaterial } from "meshline"
import { useEffect, useRef } from "react"
import { CatmullRomCurve3, TextureLoader, Vector2, Vector3 } from "three"

extend({ MeshLineGeometry, MeshLineMaterial })

export default function CoffeeSmoke(props) {
	const smokeTexture = useLoader(TextureLoader, "/images/stroke.png")
	const leftSmokeRef = useRef()
	const rightSmokeRef = useRef()
	let leftCurve = null, rightCurve = null
	let leftPoints = null, rightPoints = null
	let leftGeo = null, rightGeo = null

	useEffect(() => {
		leftCurve = new CatmullRomCurve3([
			new Vector3(0, -2, 0),
			new Vector3(-0.1, -1, 0),
			new Vector3(0.1, 0, 0),
			new Vector3(-0.1, 1, 0),
		])

		rightCurve = new CatmullRomCurve3([
			new Vector3(0, -2, 0),
			new Vector3(-0.1, -1, 0),
			new Vector3(0.1, 0, 0),
			new Vector3(-0.1, 1, 0),
			new Vector3(0, 2, 0)
		])

		leftPoints = leftCurve.getPoints(50)

		leftGeo = new MeshLineGeometry()
		leftGeo.setPoints(leftPoints)

		rightPoints = rightCurve.getPoints(50)

		rightGeo = new MeshLineGeometry()
		rightGeo.setPoints(rightPoints)

		const mat = new MeshLineMaterial({
			map: smokeTexture,
			useMap: true,
			alphaTest: 0.5,
			transparent: true,
			color: "white",
			lineWidth: .5,
			resolution: new Vector2(window.innerWidth, window.innerHeight)
		})

		leftSmokeRef.current.geometry = leftGeo
		leftSmokeRef.current.material = mat

		rightSmokeRef.current.geometry = rightGeo
		rightSmokeRef.current.material = mat
	}, [])

	let toLeft = false

	useFrame(() => {
		if(!leftCurve || !leftGeo || !leftPoints) return
		if(!rightCurve || !rightGeo || !rightPoints) return

		if(rightCurve.points[1].x > .2) toLeft = true

		if(rightCurve.points[1].x < -.2) toLeft = false

		if(toLeft) {
			leftCurve.points[1].x -= .0005
			leftCurve.points[2].x += .0005

			rightCurve.points[1].x -= .0005
			rightCurve.points[3].x += .0005
		}
		else {
			leftCurve.points[1].x += .0005
			leftCurve.points[2].x -= .0005

			rightCurve.points[1].x += .0005
			rightCurve.points[3].x -= .0005
		}

		leftPoints = leftCurve.getPoints(50)
		leftGeo.setPoints(leftPoints)

		rightPoints = rightCurve.getPoints(50)
		rightGeo.setPoints(rightPoints)
	})

	return <group { ...props } dispose={null}>
		<mesh scale={[.5, .5, .5]} position={[-.3, -.2, 0]} ref={leftSmokeRef} />
		<mesh scale={[.5, .5, .5]} ref={rightSmokeRef} />
	</group>
}
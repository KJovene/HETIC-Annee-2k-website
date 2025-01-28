import { useFrame } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { extend, useLoader } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

extend({ TextGeometry })


// renderer.setPixelRatio(Math.min(window.devicePixelRatio, .2))
// renderer.domElement.style.imageRendering = 'pixelated'

export default () => {
    const boxRef = useRef()
    const [currentDate, setCurrentDate] = useState(new Date())

    const font = useLoader(FontLoader, "/assets/fonts/Bricolage.json")
    console.log(font);


    useFrame(() => {
        boxRef.current.rotation.y += 0.02
        // renderer.domElement.style.imageRendering = 'pixelated'
    })

    useEffect(() => {
        setCurrentDate(new Date())
    }, [currentDate])

    useEffect(() => {
        const geometry = boxRef.current.geometry
        geometry.computeBoundingBox()
        geometry.translate(
            -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x),
            -0.5 * (geometry.boundingBox.max.y - geometry.boundingBox.min.y),
            -0.5 * (geometry.boundingBox.max.z - geometry.boundingBox.min.z)
        )
    })

    return <>
    <mesh ref={boxRef}>
        <textGeometry args={["10:10", { font, size: 3, depth: 1 }]} />
        <meshStandardMaterial color="black" />
    </mesh>
    </>
}
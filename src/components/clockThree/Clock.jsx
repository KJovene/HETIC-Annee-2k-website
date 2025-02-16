import { useFrame, useThree } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { extend, useLoader } from '@react-three/fiber'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

extend({ TextGeometry })

const getDateString = () => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    return `${hours.toString().length !== 1 ? hours : `0${hours}`} : ${minutes.toString().length !== 1 ? minutes : `0${minutes}`}`
}

export default () => {
    const boxRef = useRef()
    const [currentDate, setCurrentDate] = useState(getDateString())

    const font = useLoader(FontLoader, "/assets/fonts/Bricolage.json")

    useFrame((state, delta) => {
        boxRef.current.rotation.y += delta
    })
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(getDateString())
        }, 1000)
        
        
        return () => clearInterval(interval)
    }, [])
    
    useEffect(() => {
        const geometry = boxRef.current.geometry
        geometry.computeBoundingBox()
        geometry.translate(
            -0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x),
            -0.5 * (geometry.boundingBox.max.y - geometry.boundingBox.min.y),
            -0.5 * (geometry.boundingBox.max.z - geometry.boundingBox.min.z)
        )
    }, [currentDate])
    

    return <>
        <ambientLight intensity={0.5} castShadow />
        <directionalLight 
            position={[10, 10, 5]} 
            intensity={1}
            castShadow
        />
        <mesh ref={boxRef} castShadow receiveShadow>
            <textGeometry args={[currentDate, { font, size: 3, depth: .8 }]} />
            <meshStandardMaterial color="gray" />
        </mesh>
    </>
}
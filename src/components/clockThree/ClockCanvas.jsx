import { Canvas } from '@react-three/fiber'
import Clock from "./Clock"

export default () => {
    return <Canvas style={{width: "100vw", height: "100vh"}}  orthographic camera={{ zoom: 35 }} >
        <Clock />
    </Canvas>
}
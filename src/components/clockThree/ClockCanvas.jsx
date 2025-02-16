import { Canvas } from '@react-three/fiber'
import Clock from "./Clock"

const ClockCanvas = ({width="300px", height="200px", zoom=35}) => {
    return <Canvas style={{width, height}}  orthographic camera={{ zoom }} >
        <Clock />
    </Canvas>
}

export default ClockCanvas
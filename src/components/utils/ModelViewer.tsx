import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Attributes } from "react";

const Model = ({...props}) => {
    const { scene } = useGLTF("/images/bocchi.glb");
    return <primitive object={scene} {...props} />
}

const ModelViewer = () => {
    return (
        <Canvas dpr={[1,2]} camera={{fov: 45}}>
             <PresentationControls speed={1.5} zoom={.5} polar={[-0.1, Math.PI / 2]} >
                <Stage environment={null} >
                    <Model scale={0.01} />
                </Stage>
             </PresentationControls>
        </Canvas>
    )
}

export default ModelViewer;
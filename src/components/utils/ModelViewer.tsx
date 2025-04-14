import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

// Tipe Props untuk komponen Model
interface ModelProps {
  scale?: number;
}

const Model = ({ scale = 1, ...props }: ModelProps) => {
  const { scene } = useGLTF("/images/bocchi.glb");
  const modelRef = useRef<THREE.Group | null>(null);

  // Menghapus shadow dan shader pada model
  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        // Memastikan child adalah Mesh
        if (child instanceof THREE.Mesh) {
          child.castShadow = false; // Hapus cast shadow
          child.receiveShadow = false; // Hapus receive shadow

          // Ganti material menjadi MeshStandardMaterial untuk menghapus shader custom
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff, // Sesuaikan dengan warna dasar
          });
        }
      });
    }
  }, []);

  return <primitive ref={modelRef} object={scene} scale={scale} {...props} />;
};

const ModelViewer = () => {
  return (
    <Suspense fallback={null}>
      <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
      <PresentationControls speed={1.5} zoom={0.5} polar={[-0.1, Math.PI / 2]}>
        <Stage environment={null}>
          <Model scale={0.01} />
        </Stage>
      </PresentationControls>
    </Canvas>
    </Suspense>
  );
};

export default ModelViewer;

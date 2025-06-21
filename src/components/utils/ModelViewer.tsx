// src/components/utils/ModelViewer.tsx
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, useProgress, Html } from "@react-three/drei";
import { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from "three";

// Model loading progress indicator
function LoadingIndicator() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center bg-white/20 backdrop-blur-md p-4 rounded-lg">
        <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-2 text-sm font-medium">{progress.toFixed(0)}% loaded</p>
      </div>
    </Html>
  );
}

// Tipe Props untuk komponen Model
interface ModelProps {
  scale?: number;
  autoRotate?: boolean;
  rotationSpeed?: number;
}

const Model = ({ scale = 0.01, autoRotate = true, rotationSpeed = 0.005, ...props }: ModelProps) => {
  const { scene } = useGLTF("/images/bocchi.glb");
  const modelRef = useRef<THREE.Group>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  // Mengimplementasikan rotasi otomatis
  useFrame(() => {
    if (modelRef.current && autoRotate && !isInteracting) {
      modelRef.current.rotation.y += rotationSpeed;
    }
  });

  // Mendeteksi interaksi pengguna untuk menghentikan rotasi sementara
  useEffect(() => {
    const handlePointerDown = () => setIsInteracting(true);
    const handlePointerUp = () => setIsInteracting(false);
    
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    
    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return <primitive ref={modelRef} object={scene} scale={scale} {...props} />;
};

// Lazy load model
const LazyModel = (props: ModelProps) => {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <Model {...props} />
    </Suspense>
  );
};

interface ModelViewerProps {
  autoRotate?: boolean;
  rotationSpeed?: number;
  scale?: number;
}

const ModelViewer = ({ 
  autoRotate = true, 
  rotationSpeed = 0.005,
  scale = 0.01 
}: ModelViewerProps) => {
  return (
    <div className="w-full h-full relative" >
      <Canvas 
        title="She (Hitori Gotō) is literally me (70%)"
        dpr={[1, 2]} 
        camera={{ fov: 45 }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true
        }}
      >
        <PresentationControls
          speed={1.5}
          zoom={0.5}
          polar={[-0.1, Math.PI / 2]}
        >
          <Stage environment={null}>
            <LazyModel 
              scale={scale} 
              autoRotate={autoRotate} 
              rotationSpeed={rotationSpeed} 
            />
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
// // Preload model (opsional, tergantung kasus penggunaan)
// useGLTF.preload("/images/bocchi.glb");
// components/utils/MouseEffect.tsx
'use client';
import { motion, AnimatePresence } from "framer-motion";
import { useMouseContext } from "../../providers/MouseContext";
import { useEffect } from "react";

export default function MouseEffect() {
  const { 
    smoothMouse, 
    isHovering, 
    isMousePresent, 
    isMobile 
  } = useMouseContext();

  // Sembunyikan cursor asli ketika mouse terdeteksi
  useEffect(() => {
    if (isMousePresent && !isMobile) {
      document.body.style.cursor = 'none';
    } else {
      document.body.style.cursor = 'auto';
    }
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, [isMousePresent, isMobile]);

  // Hanya tampilkan cursor jika mouse terdeteksi dan tidak di mobile
  // ATAU jika di mobile tapi terdeteksi mouse
  const shouldShowCursor = isMousePresent && (!isMobile || (isMobile && isMousePresent));

  return (
    <AnimatePresence>
      {shouldShowCursor && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: isHovering ? 2 : 1,
            // Optional: tambahkan opacity fade out jika mouse tidak bergerak setelah beberapa detik
            // opacity: isMouseMoving ? 1 : 0.3,
          }}
          exit={{ opacity: 0, scale: 0 }}
          className={`w-8 h-8 rounded-full fixed ${isMobile ? "hidden" : ""} z-999 mix-blend-difference bg-background pointer-events-none`} 
          style={{
            left: smoothMouse.x, 
            top: smoothMouse.y,
          }}
          transition={{
            duration: 0.2,
            opacity: { duration: 0.5 }
          }}
        />
      )}
    </AnimatePresence>
  );
}
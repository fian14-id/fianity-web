// contexts/MouseContext.tsx
'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { MotionValue, useMotionValue, useSpring } from "framer-motion";

interface MouseContextType {
  smoothMouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  mouse: {
    x: MotionValue<number>;
    y: MotionValue<number>;
  };
  isHovering: boolean;
  setIsHovering: (value: boolean) => void;
  isMousePresent: boolean;
  isMouseMoving: boolean;
  isMobile: boolean;
}

const MouseContext = createContext<MouseContextType | undefined>(undefined);

export const MouseProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMousePresent, setIsMousePresent] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mouseTimeout, setMouseTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const cursorSize = isHovering ? 60 : 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };

  // Deteksi mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = 
        typeof window.navigator === "undefined" ? "" : navigator.userAgent;
      const mobileRegex = 
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      
      return mobileRegex.test(userAgent) && window.innerWidth <= 768;
    };

    const handleResize = () => {
      setIsMobile(checkIfMobile());
    };

    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle mouse movement dan presence
  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      // Update mouse position
      mouse.x.set(clientX - cursorSize/2);
      mouse.y.set(clientY - cursorSize/2);
      
      // Set mouse as present and moving
      setIsMousePresent(true);
      setIsMouseMoving(true);
      
      // Clear previous timeout if exists
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }
      
      // Set timeout to detect when mouse stops moving
      const timeout = setTimeout(() => {
        setIsMouseMoving(false);
      }, 2000); // Mouse dianggap berhenti setelah 2 detik tanpa gerakan
      
      setMouseTimeout(timeout as unknown as NodeJS.Timeout);
    };
    
    const handleMouseEnter = () => {
      setIsMousePresent(true);
    };
    
    const handleMouseLeave = () => {
      setIsMousePresent(false);
    };

    // Add event listeners
    window.addEventListener('mousemove', manageMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', manageMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      if (mouseTimeout) {
        clearTimeout(mouseTimeout);
      }
    };
  }, [mouse, cursorSize, mouseTimeout]);

  return (
    <MouseContext.Provider value={{ 
      mouse, 
      smoothMouse, 
      isHovering, 
      setIsHovering,
      isMousePresent,
      isMouseMoving,
      isMobile
    }}>
      {children}
    </MouseContext.Provider>
  );
};

export const useMouseContext = (): MouseContextType => {
  const context = useContext(MouseContext);
  if (context === undefined) {
    throw new Error('useMouseContext must be used within a MouseProvider');
  }
  return context;
};
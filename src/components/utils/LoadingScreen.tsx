// src/components/utils/LoadingScreen.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  minDisplayTime?: number; // Waktu minimum loading ditampilkan (ms)
  exitDuration?: number;   // Durasi animasi exit (ms)
}

const LoadingScreen = ({ 
  minDisplayTime = 2000, 
  exitDuration = 800 
}: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const loadStartTime = useRef(Date.now());
  const componentLoaded = useRef(false);

  // Simulasi tracking progress loading komponen
  useEffect(() => {
    const interval = setInterval(() => {
      // Track konten yang sedang dimuat
      const resources = Array.from(document.querySelectorAll('img, video, audio, script'))
                        .filter(el => !el.getAttribute('loading') || el.getAttribute('loading') !== 'lazy');
      
      const loadedResources = resources.filter(el => {
        if (el instanceof HTMLImageElement) return el.complete;
        if (el instanceof HTMLVideoElement) return el.readyState >= 3;
        if (el instanceof HTMLAudioElement) return el.readyState >= 3;
        return true;
      }).length;
      
      const resourceProgress = resources.length ? (loadedResources / resources.length) * 100 : 100;
      const artificialProgress = Math.min(progress + 1, 95); // Cap at 95% for artificial progress
      
      // Take the higher of the two progress values
      const newProgress = Math.max(resourceProgress, artificialProgress);
      setProgress(newProgress);
      
      // Check if all important components loaded
      if (newProgress >= 100) {
        componentLoaded.current = true;
        checkComplete();
        clearInterval(interval);
      }
    }, 30);
    
    const checkComplete = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - loadStartTime.current;
      
      if (componentLoaded.current && elapsedTime >= minDisplayTime) {
        // If we've met both conditions, start exit animation and set timer to remove loading screen
        setTimeout(() => {
          setIsLoading(false);
        }, exitDuration);
      }
    };
    
    // Event listener for when page is fully loaded
    window.addEventListener('load', () => {
      componentLoaded.current = true;
      setProgress(100);
      checkComplete();
    });
    
    // Check if minimum display time has passed
    const timeoutId = setTimeout(checkComplete, minDisplayTime);
    
    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
      window.removeEventListener('load', checkComplete);
    };
  }, [progress, minDisplayTime, exitDuration]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -50,
            transition: { duration: exitDuration / 1000 } 
          }}
          className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center"
        >
          <div className="w-full max-w-md px-4">
            <div className="space-y-6">
              <h2 className="text-4xl font-black">
                Loading Experience
              </h2>
              <p className="text-sm opacity-60">
                Sedang memuat konten interaktif dan visual untuk pengalaman terbaik Anda.
              </p>
              
              <div className="relative pt-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1">
                      Progress
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mt-1 flex rounded bg-foreground/10">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
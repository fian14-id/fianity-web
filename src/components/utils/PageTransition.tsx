// src/components/ui/PageTransition.tsx
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [exitComplete, setExitComplete] = useState(true);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsLoading(true);
      setExitComplete(false);
    };

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 300); 
    };

    window.addEventListener("navigationstart", handleRouteChangeStart);
    window.addEventListener("navigatesuccess", handleRouteChangeComplete);
    window.addEventListener("navigateerror", handleRouteChangeComplete);

    return () => {
      window.removeEventListener("navigationstart", handleRouteChangeStart);
      window.removeEventListener("navigatesuccess", handleRouteChangeComplete);
      window.removeEventListener("navigateerror", handleRouteChangeComplete);
    };
  }, []);

  // Reset loading state when path or search params change
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, [pathname, searchParams]);

  // Variasi animasi untuk loading
  const loadingVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };
  return (
    <>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => setExitComplete(true)}
      >
        {isLoading && exitComplete && (
          <motion.div
            key="loading"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={loadingVariants}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="relative bg-background border rounded-lg shadow-lg p-6 max-w-md">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                <div>
                  <h3 className="font-medium">Loading Page</h3>
                  <p className="text-sm opacity-70">Memuat konten halaman...</p>
                </div>
              </div>
              
              <div className="mt-4 overflow-hidden h-1 flex rounded bg-foreground/10">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: "100%", 
                    transition: { duration: 2, ease: "easeInOut" } 
                  }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
};
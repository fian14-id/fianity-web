// hooks/useMouseInteraction.tsx
'use client';
import { useMouseContext } from "@/providers/MouseContext";

export const useMouseInteraction = () => {
  const { setIsHovering } = useMouseContext();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return {
    mouseProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
};
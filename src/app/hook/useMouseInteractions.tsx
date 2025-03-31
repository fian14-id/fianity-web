// hooks/useMouseInteraction.tsx
'use client';
import { useMouseContext } from "@/providers/MouseContext";

interface MouseInteractionProps {
  scale?: boolean;
  color?: boolean;
}

export const useMouseInteraction = ({ scale = true, color = true }: MouseInteractionProps = {}) => {
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
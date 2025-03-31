"use client"
import { useMouseInteraction } from '@/app/hook/useMouseInteractions';
import React, { FC, ReactNode } from 'react';

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  borderDefault?: boolean;
  title?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const RippleButton: FC<RippleButtonProps> = ({
  children,
  className = '',
  borderDefault = true,
  title = '',
  onClick,
  disabled = false,
  type = 'button',
}) => {  
  const {mouseProps} = useMouseInteraction();
  

  
  return (
    <button
      title={title}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`Ripple-button ${borderDefault ? "border-foreground" : ""} ease-in-out duration-300 rounded-full font-medium uppercase ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...mouseProps}
    >
      {children}
    </button>
  );
};

export default RippleButton;
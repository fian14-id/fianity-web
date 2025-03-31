"use client"

import React from 'react';
import Link from 'next/link';
import { useLoading } from '@/providers/LoadingProvider';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ 
  href, 
  children, 
  className = '',
  ...props 
}) => {
  const { startLoading } = useLoading();
  
  const handleClick = (e: any) => {
    // Trigger loading only for internal links
    if (href.startsWith('/')) {
      startLoading();
    }
  };
  
  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
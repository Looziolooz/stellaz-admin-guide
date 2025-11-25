import React from 'react';
import { THEME } from '@/constants/theme';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 flex items-center gap-2 ${className}`}
      style={{ backgroundColor: THEME.colors.accent, color: THEME.colors.white }}
    >
      {children}
    </button>
  );
}
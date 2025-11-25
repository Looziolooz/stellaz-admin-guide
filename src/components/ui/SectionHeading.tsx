import React from 'react';
import { THEME } from '@/constants/theme';

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-bold mb-4" style={{ color: THEME.colors.primary }}>
      {children}
    </h2>
  );
}
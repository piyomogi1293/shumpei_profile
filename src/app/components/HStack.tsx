// components/HStack.tsx
import React from 'react';

interface HStackProps {
  children: React.ReactNode;
  className?: string;
}

const HStack: React.FC<HStackProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-row ${className}`}>
      {children}
    </div>
  );
};

export default HStack;

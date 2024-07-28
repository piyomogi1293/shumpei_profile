// components/VStack.tsx
import React from 'react';

interface VStackProps {
  children: React.ReactNode;
  className?: string;
}

const VStack: React.FC<VStackProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default VStack;

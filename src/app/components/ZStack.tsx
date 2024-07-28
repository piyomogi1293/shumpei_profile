// components/ZStack.tsx
import React from 'react';

interface ZStackProps {
  children: React.ReactNode;
  className?: string;
}

const ZStack: React.FC<ZStackProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {React.Children.map(children, (child, index) => (
        <div className="absolute inset-0">
          {child}
        </div>
      ))}
    </div>
  );
};

export default ZStack;

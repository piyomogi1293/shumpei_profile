// app/components/TechImage.tsx
import React from 'react';
import Image from 'next/image';

type TechImageProps = {
  techName: string;
  techData: Record<string, { name: string; image_path: string }>;
};

const TechImage: React.FC<TechImageProps> = ({ techName, techData }) => {
  const tech = techData[techName];

  if (!tech) return null;

  return (
    <div className="relative group">
      <Image
        src={tech.image_path}
        alt={tech.name}
        width={40}
        height={40}
        className="w-8 h-8 object-cover"
      />
      <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 text-sm font-medium bg-black text-white py-1 px-2 rounded-lg pointer-events-none">
        {tech.name}
      </span>
    </div>
  );
};

export default TechImage;

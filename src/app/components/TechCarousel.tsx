// app/components/TechCarousel.tsx
'use client'; // クライアントコンポーネントとして宣言

import React from 'react';
import TechImage from './TechImage';

type TechData = Record<string, { name: string; image_path: string }>;

interface TechCarouselProps {
  techData: TechData;
}

const TechCarousel: React.FC<TechCarouselProps> = ({ techData }) => {
  const techEntries = Object.entries(techData);

  return (
    <div className="overflow-hidden py-4">
      <div className="flex animate-marquee whitespace-nowrap">
        {techEntries.map(([techKey]) => (
          <div key={techKey} className="mx-4">
            <TechImage techName={techKey} techData={techData} />
          </div>
        ))}
        {/* 同じコンテンツを繰り返すことでループ感を出す */}
        {techEntries.map(([techKey]) => (
          <div key={`${techKey}-duplicate`} className="mx-4">
            <TechImage techName={techKey} techData={techData} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechCarousel;

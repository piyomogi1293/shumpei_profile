// components/TechImageList.tsx
import React from 'react';
import TechImage from './TechImage';

type TechImageListProps = {
  techNames?: string[]; // techNamesをオプショナルに変更
  techData: Record<string, { name: string; image_path: string }>;
};

const TechImageList: React.FC<TechImageListProps> = ({ techNames = [], techData }) => {
  // techNamesが配列であり、長さが0より大きいかどうかをチェック
  const hasTechNames = Array.isArray(techNames) && techNames.length > 0;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {hasTechNames ? (
        techNames.map((tech) => (
          <TechImage key={tech} techName={tech} techData={techData} />
        ))
      ) : (
        <p>No technologies listed</p>
      )}
    </div>
  );
};

export default TechImageList;

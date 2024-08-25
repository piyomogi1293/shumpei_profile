// components/ProjectCard.tsx
import React from 'react';
import TechImage from './TechImage';
import Image from 'next/image';

const projectTypeMap: { [key: number]: string } = {
  0: '大学',
  1: 'インターン',
  2: '個人開発等',
};

const projectTypeColorMap: { [key: number]: string } = {
  0: 'bg-yellow-400',
  1: 'bg-blue-400',
  2: 'bg-red-400',
};

type ProjectCardProps = {
  projectName: string;
  mainImage: string;
  techNames: string[];
  techData: Record<string, { name: string; image_path: string }>;
  projectType: number;
  onClick: () => void; // 新しいプロパティを追加
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  mainImage,
  techNames = [],
  techData,
  projectType,
  onClick, // onClickを受け取る
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="relative w-full">
        <div className='relative' style={{ aspectRatio: '16 / 9' }}>
          <Image
            src={mainImage}
            alt={projectName}
            layout="fill"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-3 px-2 mt-1 mx-1">
        <h2 className="text-sm md:text-base lg:text-lg font-bold">{projectName}</h2>
        <div className='w-[100px] mt-2 mb-2'>
          <p className={`text-xs md:text-sm px-2 py-1 rounded ${projectTypeColorMap[projectType]} flex justify-center font-bold text-white`}>
            {projectTypeMap[projectType]}
          </p>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {techNames?.length > 0 ? (
            techNames.map((tech) => (
              <TechImage key={tech} techName={tech} techData={techData} />
            ))
          ) : (
            <p>No technologies listed</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

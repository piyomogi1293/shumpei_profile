// app/components/ProjectCard.tsx
import React from 'react';
import TechImage from './TechImage';
import Image from 'next/image';

const projectTypeMap: { [key: number]: string } = {
  0: '大学',
  1: 'アルバイト',
  2: 'インターン',
  3: '個人開発',
};

const projectTypeColorMap: { [key: number]: string } = {
  0: 'bg-yellow-400',
  1: 'bg-green-400',
  2: 'bg-blue-400',
  3: 'bg-red-400',
};

type ProjectCardProps = {
  projectName: string;
  mainImage: string;
  techNames: string[];
  techData: Record<string, { name: string; image_path: string }>;
  projectType: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ projectName, mainImage, techNames = [], techData, projectType }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative w-full">
        <div className='relative' style={{ aspectRatio: '16 / 9' }}>
          <Image
            src={mainImage}
            alt={projectName}
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="p-6 mt-2">
        <h2 className="text-sm md:text-base lg:text-lg font-bold">{projectName}</h2>
        <div className='w-1/3 mt-2 mb-2'>
          <p className={`text-xs md:text-sm px-2 py-1 rounded ${projectTypeColorMap[projectType]} flex justify-center font-bold text-white`}>{
            projectTypeMap[projectType]}
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

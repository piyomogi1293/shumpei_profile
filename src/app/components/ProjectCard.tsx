import React from 'react';
import TechImage from './TechImage';
import Image from 'next/image';

const projectTypeMap: { [key: number]: string } = {
  0: '大学(研究含)',
  1: 'アルバイト(塾講師)',
  2: 'インターン',
  3: '個人(チーム)開発',
};

type ProjectCardProps = {
  projectName: string;
  mainImage: string;
  techNames: string[]; // techNames は配列として扱います
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
        <h2 className="text-lg font-bold">{projectName}</h2>
        <p className='font-italic'>{projectTypeMap[projectType]}</p>
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

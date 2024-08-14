// app/components/ProjectList.tsx
'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const projectTypeMap: { [key: number]: string } = {
  0: '大学',
  1: 'アルバイト',
  2: 'インターン',
  3: '個人開発',
};

type Project = {
  projectName: string;
  mainImage: string;
  techNames: string[];
  type: number;
};

type ProjectListProps = {
  projectsData: Project[];
  techData: any;
};

const ProjectList: React.FC<ProjectListProps> = ({ projectsData, techData }) => {
  const [filteredType, setFilteredType] = useState<number | null>(null);

  const filteredProjects = filteredType === null
    ? projectsData
    : projectsData.filter((project) => project.type === filteredType);

  return (
    <>
      {/* フィルタリングボタン */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setFilteredType(null)}
          className={`px-4 py-2 rounded ${filteredType === null ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
        >
          全て
        </button>
        {Object.entries(projectTypeMap).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilteredType(parseInt(key))}
            className={`px-4 py-2 rounded ${filteredType === parseInt(key) ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* <div className='m-96'></div> */}

      {/* プロジェクトの表示 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            mainImage={project.mainImage}
            techNames={project.techNames}
            techData={techData}
            projectType={project.type}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectList;

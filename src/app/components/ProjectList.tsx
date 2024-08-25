// components/ProjectList.tsx
'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';

const projectTypeMap: { [key: number]: string } = {
  0: '大学',
  1: 'インターン',
  2: '個人開発等',
};

type Project = {
  projectName: string;
  mainImage: string;
  techNames: string[];
  type: number;
  description: string; // プロジェクトの説明を追加
};

type ProjectListProps = {
  projectsData: Project[];
  techData: any;
};

const ProjectList: React.FC<ProjectListProps> = ({ projectsData, techData }) => {
  const [filteredType, setFilteredType] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // モーダルに表示するプロジェクトの状態
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

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
            onClick={() => handleProjectClick(project)} // プロジェクトクリック時の処理
          />
        ))}
      </div>

      {/* モーダル */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedProject && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.projectName}</h2>
            <p>{selectedProject.description}</p>
            {/* 他のプロジェクトの詳細をここに追加することができます */}
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectList;

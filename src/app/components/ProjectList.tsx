'use client';

import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import Modal from './Modal';
import Image from 'next/image'; // 画像表示用にインポート
import TechImageList from './TechImageList';

const projectTypeMap: { [key: number]: string } = {
  0: '大学',
  1: 'インターン',
  2: '個人開発等',
};

type ProjectContents = {
  [key: string]: string; // contentsの型定義
};

type Project = {
  projectName: string;
  mainImage: string;
  techNames: string[];
  type: number;
  contents: ProjectContents; // contentsを追加
};

type ProjectListProps = {
  projectsData: Project[];
  techData: any;
};

const ProjectList: React.FC<ProjectListProps> = ({ projectsData, techData }) => {
  const [filteredType, setFilteredType] = useState<number | null>(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null); // 現在選択されたプロジェクトのインデックスを管理
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (index: number) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const handleNextProject = () => {
    if (selectedProjectIndex !== null) {
      const nextIndex = (selectedProjectIndex + 1) % filteredProjects.length;
      setSelectedProjectIndex(nextIndex);
    }
  };

  const handlePreviousProject = () => {
    if (selectedProjectIndex !== null) {
      const prevIndex = (selectedProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedProjectIndex(prevIndex);
    }
  };

  const filteredProjects = filteredType === null
    ? projectsData
    : projectsData.filter((project) => project.type === filteredType);

  const selectedProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

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
            onClick={() => handleProjectClick(index)} // インデックスを渡す
          />
        ))}
      </div>

      {/* モーダル */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onNext={handleNextProject}
        onPrevious={handlePreviousProject}
      >
        {selectedProject && (
          <div>
            {/* メイン画像の表示 - アスペクト比16:9を保つ */}
            <div className="relative w-full mb-4" style={{ aspectRatio: '16 / 9' }}>
              <Image
                src={selectedProject.mainImage}
                alt={selectedProject.projectName}
                layout="fill" // 親コンテナに合わせる
                objectFit="cover" // コンテンツを中央に合わせてカバー
                className="rounded-lg"
              />
            </div>

            {/* プロジェクト名 */}
            <h2 className="text-2xl font-bold mb-4">{selectedProject.projectName}</h2>

            <div className='mb-4'>
              <h3 className='text-xl font-bold'>使用技術</h3>
              <TechImageList
                techNames={selectedProject.techNames}
                techData={techData}
              />
            </div>

            {/* contentsのキーとバリューを動的に表示 */}
            <div className="mb-4">
              {Object.entries(selectedProject.contents).map(([title, text]) => (
                <div key={title} className="mb-4">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default ProjectList;

// app/page.tsx
import fs from 'fs';
import path from 'path';
import React from 'react';
import ProjectCard from './components/ProjectCard';

const projectTypeMap: { [key: number]: string } = {
  0: '大学(研究含)',
  1: 'アルバイト(塾講師)',
  2: 'インターン',
  3: '個人(チーム)開発',
};

async function getProjectsData() {
  const projectsFilePath = path.join(process.cwd(), 'public', 'projects.json');
  const projectsFileContent = fs.readFileSync(projectsFilePath, 'utf8');
  return JSON.parse(projectsFileContent);
}

async function getTechData() {
  const techFilePath = path.join(process.cwd(), 'public', 'tech.json');
  const techFileContent = fs.readFileSync(techFilePath, 'utf8');
  return JSON.parse(techFileContent);
}

const Home = async () => {
  const projectsData = await getProjectsData();
  const techData = await getTechData();

  return (
    <div className="relative h-screen overflow-hidden bg-fixed bg-center bg-[url('/images/shumpei.jpg')] bg-custom bg-no-repeat">
      <div className="absolute inset-0 bg-white opacity-50"></div>
      <div className="relative z-10 h-full overflow-y-auto">
        <div className="container mx-auto px-4 py-8 text-black">
          <h1 className="text-4xl font-bold mb-4 flex justify-center">Shumpei Portfolio</h1>
          <div className='m-96'></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsData.map((project: any, index: number) => (
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
        </div>
      </div>
    </div>
  );
};

export default Home;

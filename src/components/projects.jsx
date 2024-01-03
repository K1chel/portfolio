import { projects } from "../constants/index";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto md:px-7 px-5">
      <div className="flex items-center justify-center my-10">
        <h1 className="text-4xl text-white font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </div>
  );
};

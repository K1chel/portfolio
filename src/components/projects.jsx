import { projects } from "../constants/index";
import { ProjectCard } from "./project-card";

export const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto md:px-7 px-5">
      <div className="flex items-center justify-center my-10">
        <h1 className="text-4xl text-white font-bold">Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
        {projects.map((project) => (
          <ProjectCard key={project.key} project={project} />
        ))}
      </div>
    </div>
  );
};

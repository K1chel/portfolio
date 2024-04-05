import { Link } from "react-router-dom";
import { Button } from "./button";

/* eslint-disable react/prop-types */
export const ProjectCard = ({ project }) => {
  const { name, description, image, github, demo } = project;

  return (
    <div className="w-full rounded-lg bg-zinc-800 py-4 px-3">
      <div className="rounded-md w-full h-full flex flex-col gap-y-4">
        <img
          src={image}
          alt={name}
          className="w-full object-cover rounded-md shadow-lg h-[220px] opacity-80"
        />
        <div className="flex flex-col gap-y-1 px-2">
          <h1 className="text-xl font-bold text-white">{name}</h1>
          <p className="text-[13px] text-gray-300 tracking-tight">
            {description}
          </p>
        </div>
        <div className="h-[1px] w-full bg-gray-500" />
        <div className="flex gap-x-5 justify-start">
          {demo && (
            <Link to={`${demo}`} target="_blank">
              <Button className="border px-5 py-2 rounded-lg">Demo</Button>
            </Link>
          )}
          <Link to={github} target="_blank">
            <Button className="border px-5 py-2 rounded-lg">GitHub</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

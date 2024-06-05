/* eslint-disable no-unused-vars */
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../lib/reveal";
import { ProjectModal } from "./modals/project-modal";

/* eslint-disable react/prop-types */
export const ProjectCard = ({ project }) => {
  const { name, description, image, github, demo, tech_stack, modalContent } =
    project;
  const [hovered, setHovered] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className="w-full aspect-video bg-zinc-700 cursor-pointer relative rounded-lg overflow-hidden"
        >
          <img
            src={image}
            alt={`An image of the ${name} project.`}
            style={{
              width: hovered ? "90%" : "85%",
              rotate: hovered ? "2deg" : "0deg",
            }}
            className="w-[85%] absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 transition-all rounded"
          />
        </div>
        <div className="mt-6">
          <Reveal width="w-full">
            <div className="flex items-center gap-2 w-full">
              <h4 className="font-bold lg:text-lg text-base shrink-0 max-w-[calc(100%_-_150px)]">
                {name}
              </h4>
              <div className="w-full h-[1px] bg-zinc-600" />

              <Link to={github} target="_blank">
                <GithubIcon className="lg:size-5 size-4 text-zinc-300 hover:text-indigo-500 transition-colors" />
              </Link>

              <Link to={demo} target="_blank">
                <ExternalLinkIcon className="lg:size-5 size-4 text-zinc-300 hover:text-indigo-500 transition-colors" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap gap-4 lg:text-sm text-xs text-indigo-500 my-2">
              {tech_stack.join(" - ")}
            </div>
          </Reveal>
          <Reveal>
            <p className="text-zinc-300 leading-relaxed line-clamp-2 break-words text-sm lg:text-base">
              {description}{" "}
            </p>
            <div
              className="flex items-center text-sm text-indigo-500 cursor-pointer group py-1"
              onClick={() => setIsOpen(true)}
            >
              Learn more{" "}
              <ChevronRightIcon className="size-4 group-hover:scale-110 scale-90 group-hover:translate-x-1 transition-all" />
            </div>
          </Reveal>
        </div>
      </motion.div>
      <ProjectModal
        modalContent={modalContent}
        projectLink={demo}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        imgSrc={image}
        title={name}
        code={github}
        tech={tech_stack}
      />
    </>
  );
};

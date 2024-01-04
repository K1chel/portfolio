import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className="md:px-5 px-10 max-w-5xl mx-auto">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-center my-5">
          <h1 className="text-5xl">About me</h1>
        </div>
        <div className="flex items-center justify-center w-full my-5">
          <div className="p-[1px] rounded-full h-10 bg-zinc-800" />
        </div>
        <h1 className="text-3xl tracking-tight">
          <p className="text-xl tracking-tight">
            Being a web developer allows me to combine my passion for technology
            with creativity. My expertise lies in{" "}
            <span className="text-indigo-500  ml-1">React</span>{" "}
            <span className="text-indigo-500  ml-1">JavaScript</span>{" "}
            <span className="text-indigo-500  ml-1">TypeScript</span>
            <span className="text-indigo-500  ml-1">Node</span> and{"  "}
            <span className="text-indigo-500">NextJS</span>. I thrive on the
            challenges of crafting seamless, responsive, and user-friendly web
            applications. With a keen eye for detail and a commitment to staying
            updated with the latest trends, I enjoy turning ideas into reality
            through clean, efficient code. My goal is to not just meet
            expectations but to exceed them by delivering innovative solutions
            that resonate with users and make a lasting impact.
          </p>
        </h1>
        <div className="flex items-center justify-center my-5 gap-x-5">
          <Link to="https://www.linkedin.com/in/kyrylcherevko/" target="_blank">
            <button className="p-4 rounded-full group relative bg-indigo-500 scale-100 active:scale-90 transition-all">
              <FaLinkedin
                size={25}
                className="group-hover:scale-110 transition-all"
              />
            </button>
          </Link>
          <Link to="https://github.com/K1chel" target="_blank">
            <button className="p-4 rounded-full group relative bg-indigo-500 scale-100 active:scale-90 transition-all">
              <FaGithub
                size={25}
                className="group-hover:scale-110 transition-all"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

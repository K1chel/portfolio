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
            A dedicated web developer committed to delivering high-quality
            digital solutions. With a solid foundation in{" "}
            <strong className="underline text-indigo-500">front-end</strong> and{" "}
            <strong className="underline text-indigo-500">back-end</strong>{" "}
            development, I specialize in creating responsive and user-friendly
            websites. I bring 2 years of experience collaborating with teams to
            meet project goals and exceed client expectations. My passion for
            web development extends to a keen interest in emerging technologies
            and trends, ensuring I stay at the forefront of this dynamic field.
            I thrive in fast-paced environments, leveraging my skills in{" "}
            <strong className="underline text-indigo-500">JavaScript</strong>,{" "}
            <strong className="underline text-indigo-500">Node</strong>,{" "}
            <strong className="underline text-indigo-500">React</strong>,{" "}
            <strong className="underline text-indigo-500">NextJS</strong>,{" "}
            <strong className="underline text-indigo-500">MongoDB</strong> to
            tackle challenges and deliver innovative solutions. I&apos;m eager
            to contribute my expertise to a team that values creativity,
            innovation, and a relentless pursuit of excellence in web
            development. Let&apos;s connect and explore how my skills can
            elevate your projects to new heights.
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

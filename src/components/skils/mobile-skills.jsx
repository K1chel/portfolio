/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { skills } from "../../constants";

const MobileSkills = () => {
  return (
    <div className="py-8">
      <div className="mb-5 px-4">
        <h3 className="text-slate-50 text-4xl font-semibold text-center">
          Skills
        </h3>
      </div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-zinc-900 to-transparent" />
        <div className="flex items-center mb-4">
          <TestimonialList duration={50} reverse />
          <TestimonialList duration={50} reverse />
          <TestimonialList duration={50} reverse />
        </div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-zinc-900 to-transparent" />
      </div>
    </div>
  );
};

const TestimonialList = ({ reverse = false, duration = 50 }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {skills.map((skill) => {
        return (
          <div
            key={skill.key}
            className="shrink-0 grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative h-24"
          >
            <div className="flex items-center justify-center p-2 bg-zinc-800">
              <img src={skill.image} className="w-full h-20 object-contain" />
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default MobileSkills;

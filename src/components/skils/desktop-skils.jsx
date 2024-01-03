import { skills } from "../../constants";
import { SkillCard } from "./skill-card";

const DesktopSkils = () => {
  return (
    <div className="px-5 lg:px-3">
      <div className="flex items-center justify-center mb-5">
        <h1 className="text-3xl font-bold">Skils</h1>
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-7 xl:grid-cols-8 gap-5">
        {skills.map((skill) => (
          <SkillCard key={skill.key} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default DesktopSkils;

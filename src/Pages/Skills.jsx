import useSkills from "../Hooks/useSkills";
import SkillCard from "../Components/SkillCard";
import { NavLink } from "react-router";

const Skills = () => {
  const { skills } = useSkills();

  return (
    <div>
      <h1 className="text-[48px] text-green-700 font-bold text-center mb-4  ">All Skills</h1>
      <p className="text-xl text-[#627382] text-center mb-10">
        Explore Every Skill — From Coding to Cooking!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;

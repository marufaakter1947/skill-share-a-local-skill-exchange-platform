import React from 'react';
import Hero from '../Components/Hero';
import Skills from './Skills';
import SkillCard from '../Components/SkillCard';
import useSkills from '../Hooks/useSkills';
import { NavLink } from 'react-router';

const Home = () => {
    const { skills } = useSkills();
     const popularApps = skills.slice(0, 6);
    return (
        <div>
            <Hero></Hero>
            

            <div>
                <h1 className="text-[48px] font-bold text-center mb-4 mt-8 ">
          Popular Skills
        </h1>
        <p className="text-xl text-[#627382] text-center mb-10">
          Explore All Popular Skills, Top Skills Everyone is Learning - Join the Trend!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularApps.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill}></SkillCard>
          ))}
        </div>

        <div className="flex justify-center items-center"></div>
            </div>
             <div className="flex justify-center items-center">
          <button className="btn text-[16px] font-semibold bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white mt-10  mb-4 ">
            <NavLink to="/skills">Show All</NavLink>
          </button>
        </div>
        </div>
    );
};

export default Home;
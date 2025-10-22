import React from 'react';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const SkillCard = ({skill}) => {
    console.log(skill)
  const { image,skillName, price, rating, skillId } = skill;
  return (
    <div className="card bg-base-100   shadow-sm hover:scale-105 transition ease-in-out px-4 py-4">
      <Link to={`/skill/${skillId}`}>
        <figure className="h-48 overflow-hidden ">
          <img
            className="w-full h-full object-cover  rounded-xl "
            src={image}
            alt={skillName}
          />
        </figure>

        <h2 className="text-xl font-medium my-4 truncate hover:overflow-visible hover:whitespace-normal hover:text-clip">{skillName}</h2>
        <div className="flex justify-between">
          <button className="flex items-center gap-1 text-[#00D390] text-[16px] font-medium btn bg-[#F1F5E8]">
            <FaDollarSign /> {price}
          </button>
          <button className="flex items-center gap-1 text-[16px] font-medium btn text-[#FF8811] bg-[#FFF0E1]">
            <FaStar />
            {rating}
          </button>
        </div>
        <div>
            <button className='btn w-full mt-3 bg-[linear-gradient(125.07deg,#89F336,#458018)]'>View Details</button>
        </div>
      </Link>
    </div>
  );
};

export default SkillCard;
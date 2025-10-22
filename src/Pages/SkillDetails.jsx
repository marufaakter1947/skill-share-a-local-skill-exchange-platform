import React from "react";
import useSkills from "../Hooks/useSkills";
import { FaDollarSign, FaStar, FaUsers } from "react-icons/fa";
import { useParams } from "react-router";

const SkillDetails = () => {
  const { skillId } = useParams();
  const { skills } = useSkills();

  if (!skills || skills.length === 0) {
    return <div>Loading...</div>;
  }

  const skill = skills.find((s) => s.skillId === parseInt(skillId));
  console.log(skill);

  if (!skill) {
    return (
      <div className="text-center py-20 text-gray-500 text-xl">
        Skill not found!
      </div>
    );
  }

  const {
    image,
    skillName,
    providerName,
    rating,
    price,
    slotsAvailable,
    description,
    category,
  } = skill;

  return (
    <div className="max-w-6xl mx-auto bg-white shadow-sm rounded-lg p-6 md:flex gap-8 ">
      <div className="md:w-1/3 flex justify-center items-center">
        <img
          src={image}
          alt={skillName}
          className="rounded-xl w-full h-72 object-cover"
        />
      </div>

      <div className="md:w-2/3 space-y-4">
        <h2 className="text-3xl font-bold text-gray-900">{skillName}</h2>
        <p className="text-lg text-gray-500">
          Provided by{" "}
          <span className="text-purple-600 font-semibold">{providerName}</span>
        </p>

        <div className="mt-4">
          <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full font-medium">
            Category: {category}
          </span>
        </div>

        <hr />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <FaUsers className="text-green-500 text-2xl mx-auto" />
            <h4 className="text-gray-500 mt-1">Slots Available</h4>
            <p className="text-2xl font-bold">{slotsAvailable}</p>
          </div>

          <div>
            <FaStar className="text-yellow-500 text-2xl mx-auto" />
            <h4 className="text-gray-500 mt-1"> Rating</h4>
            <p className="text-2xl font-bold">{rating}</p>
          </div>

          <div>
            <FaDollarSign className="text-[#458018] text-2xl mx-auto" />
            <h4 className="text-gray-500 mt-1">Price</h4>
            <p className="text-2xl font-bold">{price}</p>
          </div>
        </div>

        <hr />

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Description
          </h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;

import { useState } from "react";
import useSkills from "../Hooks/useSkills";
import SkillCard from "../Components/SkillCard";

const Skills = () => {
  const { skills } = useSkills();

  const [sortType, setSortType] = useState("name-asc");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredSkills = skills
    .filter((skill) =>
      skill.skillName.toLowerCase().includes(search.toLowerCase())
    )
    .filter((skill) =>
      category === "all" ? true : skill.category === category
    );

  const sortedSkills = [...filteredSkills].sort((a, b) => {
    switch (sortType) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating-desc":
        return b.rating - a.rating;
      case "name-desc":
        return b.skillName.localeCompare(a.skillName);
      default:
        return a.skillName.localeCompare(b.skillName); // name-asc
    }
  });

  const categories = ["all", ...new Set(skills.map((skill) => skill.category))];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-2">
        All Skills
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Explore Every Skill — From Coding to Cooking!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by skill name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-2 border-green-800  p-2 rounded-lg outline-green-500"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 border-green-800 p-2 rounded-lg outline-green-500"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
          className="border-2 border-green-800 p-2 rounded-lg outline-green-500"
        >
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="rating-desc">Rating (High to Low)</option>
        </select>
      </div>

      {sortedSkills.length === 0 ? (
        <p className="text-center text-red-500">No skills found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedSkills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Skills;

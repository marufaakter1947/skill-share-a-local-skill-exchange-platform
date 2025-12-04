import React, { useState } from "react";
import useSkills from "../Hooks/useSkills";
import { FaStar } from "react-icons/fa";

const TopRatedProviders = () => {
  const { skills, loading, error } = useSkills();
  const [showAll, setShowAll] = useState(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  const topProviders = skills.filter((item) => item.rating >= 4.7);

  const displayedProviders = showAll ? topProviders : topProviders.slice(0, 3);

  return (
    <section className="py-10 bg-[#d6f2c0] rounded-2xl mt-10">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <span className="text-yellow-500 mr-2">
            <FaStar></FaStar>
          </span>{" "}
          Top Rated Providers
        </h2>
        <div className="space-y-4">
          {displayedProviders.map((provider) => (
            <div
              key={provider.skillId}
              className="flex items-center justify-between bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={provider.providerImage || "/default-avatar.png"}
                  alt={provider.providerName}
                  className="w-12 h-12 rounded-full   object-contain object-center"
                />
                <div>
                  <h3 className="font-semibold text-lg">
                    {provider.providerName}
                  </h3>
                  <p
                    className="text-gray-500 text-sm truncate"
                    title={provider.skillName}
                  >
                    {provider.skillName}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <button className="flex items-center gap-1 text-[16px] font-medium btn text-[#FF8811] bg-[#FFF0E1]">
                  <FaStar />
                  {provider.rating}
                </button>
              </div>
            </div>
          ))}
        </div>

        {topProviders.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 w-full bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white font-semibold py-2 rounded hover:bg-yellow-600 transition"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default TopRatedProviders;

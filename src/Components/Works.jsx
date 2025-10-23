import React from "react";

const Works = () => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-2 animate__animated animate__bounce animate__infinite animate__slow">
          How SkillShare Works
        </h2>
        <p className="text-gray-500 mb-12">
          Simple, secure, and designed for meaningful skill exchange
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center px-4">
            <div className="bg-[#458018] w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2">Share Your Skills</h3>
            <p className="text-gray-500 text-sm">
              Create your profile and list the skills you can teach. From coding
              to cooking, languages to leadership - every skill has value.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2">Find Your Match</h3>
            <p className="text-gray-500 text-sm">
              Browse skills you want to learn and connect with teachers. Our
              matching system helps you find the perfect learning partner.
            </p>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <div className="bg-[#89F336] w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2">Learn & Teach</h3>
            <p className="text-gray-500 text-sm">
              Have live video sessions with your skill partner. Learn something
              new while sharing your expertise in return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;

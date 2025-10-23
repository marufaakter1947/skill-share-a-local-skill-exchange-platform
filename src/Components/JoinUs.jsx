import React from "react";
import { Link } from "react-router";

const JoinUs = () => {
  return (
    <section className="py-20 bg-[#458018] text-white text-center rounded-2xl">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate__animated animate__bounce animate__infinite animate__slow">
          Ready to Share your skills?
        </h2>
        <p className="text-lg text-gray-200 mb-8">
          Join SkillShare today and start learning, teaching, and growing
          together!
        </p>
        <Link
          to="/signup"
          className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Join Us
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;

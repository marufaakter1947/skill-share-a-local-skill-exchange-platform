import { FaBookOpen, FaHandsHelping, FaUsers } from "react-icons/fa";

const About = () => {
  return (
   
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-2xl shadow-lg">

        <h1 className="text-4xl font-bold text-green-700  mb-4 text-center animate-slideDown">
          About Skill Share
        </h1>

        <div className="w-20 h-1 bg-green-500 mx-auto mb-6 rounded animate-scale"></div>

        <p className="text-gray-700 leading-relaxed text-lg text-center animate-fadeUp">
          Skill Share is a local skill exchange platform where people can share,
          learn, and grow together. Users can offer their skills, request help,
          and connect with others to exchange knowledge.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-green-100 p-6 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition duration-300 animate-card">
            <FaBookOpen className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-700">Learn</h3>
            <p className="text-sm text-gray-600 mt-2">
              Discover new skills and improve yourself with community help.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition duration-300 animate-card">
            <FaHandsHelping className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-700">Share</h3>
            <p className="text-sm text-gray-600 mt-2">
              Share your expertise and help others grow.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition duration-300 animate-card">
            <FaUsers className="text-green-600 text-4xl mx-auto mb-3" />
            <h3 className="text-xl font-semibold text-green-700">Connect</h3>
            <p className="text-sm text-gray-600 mt-2">
              Build meaningful connections through skills.
            </p>
          </div>

        </div>

      </div>
    
  );
};

export default About;

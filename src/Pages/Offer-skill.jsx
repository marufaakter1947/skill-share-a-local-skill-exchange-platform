// import { FaLightbulb } from "react-icons/fa";

// const OfferSkill = () => {
//   return (
//     <div className="min-h-screen bg-green-50 flex items-center">
//       <div className="max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-lg animate-fadeIn">
        
//         <h1 className="text-4xl font-bold text-green-700 mb-6 text-center bg-gradient-to-r from-green-400 to-green-700 bg-clip-text text-transparent animate-slideDown">
//           Offer a Skill
//         </h1>

//         <div className="flex flex-col md:flex-row items-center gap-6">

//           <div className="flex-1 bg-green-100 p-6 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
//             <FaLightbulb className="text-green-600 text-5xl mx-auto mb-4" />
//             <h3 className="text-xl font-semibold text-green-700">Share Your Expertise</h3>
//             <p className="text-gray-600 mt-2">
//               Let others learn from your skills and knowledge.  
//             </p>
//           </div>

//           <div className="flex-1 bg-green-100 p-6 rounded-xl text-center hover:shadow-lg transform hover:-translate-y-2 transition duration-300">
//             <h3 className="text-xl font-semibold text-green-700">Submit Your Skill</h3>
//             <p className="text-gray-600 mt-2">
//               Fill in the details of your skill, experience, and availability.
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default OfferSkill;
import { FaLightbulb, FaUser, FaTools, FaClipboard } from "react-icons/fa";

const OfferSkill = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-100 via-green-50 to-white flex items-center">
      <div className="max-w-5xl mx-auto p-8 bg-white rounded-3xl shadow-xl animate-fadeIn">

        <h1 className="text-4xl font-bold mb-6 text-center bg-linear-to-r from-green-400 to-green-800 bg-clip-text text-transparent animate-slideDown">
          Offer a Skill
        </h1>

        <p className="text-center text-gray-600 mb-10 animate-fadeUp">
          Share what you know and help others grow. Submit your skill below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Left Card */}
          <div className="bg-green-100 p-7 rounded-2xl flex flex-col items-center text-center shadow-md hover:shadow-xl transition transform hover:-translate-y-2 animate-card">
            <FaLightbulb className="text-green-600 text-6xl mb-4 animate-bounce" />
            <h3 className="text-xl font-semibold text-green-700">Why Offer a Skill?</h3>
            <p className="text-gray-600 mt-2">
              Teach others, grow your network, and gain real experience.
            </p>

            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>✅ Build your profile</li>
              <li>✅ Help your community</li>
              <li>✅ Increase confidence</li>
            </ul>
          </div>

          {/* Form */}
          <form className="bg-green-100 p-7 rounded-2xl shadow-md animate-card">
            
            <div className="mb-4">
              <label className="block text-green-700 font-semibold mb-1">Name</label>
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-green-500" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-10 p-2 rounded-lg border outline-green-400"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-green-700 font-semibold mb-1">Skill</label>
              <div className="relative">
                <FaTools className="absolute top-3 left-3 text-green-500" />
                <input
                  type="text"
                  placeholder="Your skill"
                  className="w-full pl-10 p-2 rounded-lg border outline-green-400"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-green-700 font-semibold mb-1">Description</label>
              <div className="relative">
                <FaClipboard className="absolute top-3 left-3 text-green-500" />
                <textarea
                  placeholder="Describe your skill"
                  rows="3"
                  className="w-full pl-10 p-2 rounded-lg border outline-green-400 resize-none"
                ></textarea>
              </div>
            </div>

            <button className="w-full bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white py-2 rounded-lg font-semibold hover:scale-105 transition">
              Submit Skill
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};

export default OfferSkill;

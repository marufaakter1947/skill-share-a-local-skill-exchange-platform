import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { NavLink } from "react-router";
import HeroBg1 from "../assets/Images/Herobg1.jpeg";
import HeroBg2 from "../assets/Images/Hero-bg2.jpg";
import HeroBg3 from "../assets/Images/Hero-bg3.jpg";

const Hero = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-[70vh] rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div
            className="hero min-h-[70vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${HeroBg1})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>

            <div className="relative z-10 text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                Learn New Skills, Anytime
              </h1>

              <p className="mb-6 text-lg text-gray-100 drop-shadow">
                Join thousands of learners improving their future.
              </p>
              <button className="btn border-0 bg-[linear-gradient(125.07deg,#89F336,#458018)]">
                <NavLink to="/signup">Get Started</NavLink>
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-[70vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${HeroBg2})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>
            <div className="relative z-10 text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                Share Your Expertise
              </h1>
              <p className="mb-6 text-lg text-gray-100 drop-shadow">
                Teach what you know and inspire others to grow.
              </p>
              <button className="btn border-0 bg-[linear-gradient(125.07deg,#89F336,#458018)]">
                <NavLink to="/offer-skill">Become a mentor</NavLink>
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[80vh] bg-cover bg-center"
            style={{
              backgroundImage: `url(${HeroBg3})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/40 to-black/60"></div>

            <div className="relative z-10 text-center max-w-3xl px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                Swap Skills, Build Connections
              </h1>

              <p className="mb-6 text-lg text-gray-100 drop-shadow">
                Learn what you love and teach what you are great at — all in one
                place.
              </p>
              <button className="btn border-0 bg-[linear-gradient(125.07deg,#89F336,#458018)]">
                <NavLink to="/skills">Explore Skills</NavLink>
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Hero;

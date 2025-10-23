import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-[80vh] rounded-2xl overflow-hidden"
      >
        <SwiperSlide>
          <div
            className="hero min-h-[80vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.postimg.cc/example1.jpg')",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-40"></div>
            <div className="text-center text-white">
              <h1 className="text-2xl md:text-5xl font-bold mb-4">
                Learn New Skills, Anytime
              </h1>
              <p className="mb-6">
                Join thousands of learners improving their future.
              </p>
              <button className="btn bg-[linear-gradient(125.07deg,#89F336,#458018)]">
                Get Started
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="hero min-h-[80vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.postimg.cc/example2.jpg')",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-40"></div>
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Share Your Expertise
              </h1>
              <p className="mb-6">
                Teach what you know and inspire others to grow.
              </p>
              <button className="btn bg-[linear-gradient(125.07deg,#89F336,#458018)]">
                Become a Mentor
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-[80vh] bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.postimg.cc/example3.jpg')",
            }}
          >
            <div className="hero-overlay bg-black bg-opacity-40"></div>
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Swap Skills, Build Connections
              </h1>
              <p className="mb-6">
                Learn what you love and teach what you are great at — all in one
                place.
              </p>
              <button className="btn bg-[linear-gradient(125.07deg,#89F336,#458018)]">
                Explore Skills
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Hero;

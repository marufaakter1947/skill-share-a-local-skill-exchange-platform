import React from "react";
import logoImg from "../assets/Images/logo1.png";

const Footer = () => {
  return (
    <div className="max-w-7xl  mx-auto w-full px-4 md:px-8 lg:px-12  flex-1 ">
<footer className="footer footer-horizontal footer-center bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white p-10 rounded-lg">
      <aside className=" space-y-4">
        <img className="h-15 w-15" src={logoImg} alt="" />
        <p className="font-bold">
          Skill Share
          <br />A Local Skill Exchange Platform
        </p>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://x.com/" target="_blank" rel="noreferrer">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className=" transition"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2H21l-6.52 7.455L22.5 22h-6.27l-4.91-6.15L5.99 22H3.23l7-8.02L1.5 2h6.42l4.44 5.55L18.244 2ZM16.75 20h1.73L7.4 4H5.56l11.19 16Z" />
              </svg>
            </a>

            <a href="https://www.youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/um.me.ahameda.didata"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>

        <div className="space-y-1.5">
          <h2>Contact</h2>
          <p>Email: marufaakter1947@gmail.com</p>
          <p>Phone: 01609656133</p>
          <p>Address: Laltek,CRP,Savar,Dhaka</p>
        </div>
      </aside>

      <p>
        Copyright © {new Date().getFullYear()} SkillShare - All right reserved
      </p>
    </footer>
    </div>
    
  );
};

export default Footer;

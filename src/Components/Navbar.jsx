
import logoImg from "../assets/Images/logo.jpg";
import { NavLink } from "react-router";


const Navbar = () => {
  const activeNavLink = ({ isActive }) => {
    return isActive
      ? "text-transparent bg-clip-text bg-[linear-gradient(125.07deg,#89F336,#458018)]  underline underline-offset-4 decoration-[#458018] font-semibold"
      : "text-[#000000e6]";
  };
  return (
    <div className="navbar bg-base-100 shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#000000e6] font-semibold text-[16px]"
          >
           <li>
            <NavLink to="/" className={activeNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile" className={activeNavLink}>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={activeNavLink}>
              Skills
            </NavLink>
          </li>
          </ul>
        </div>
        <NavLink to="/" className="w-12 h-12 cursor-pointer flex items-center rounded-full">
          <img src={logoImg} alt="Navbar logo image" />
          
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-[#000000e6] font-semibold text-[16px] [&_li>a:hover]:bg-transparent!">
          <li>
            <NavLink to="/" className={activeNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-profile" className={activeNavLink}>
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={activeNavLink}>
              Skills
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <NavLink
          to="/signup"
          className="btn bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white text-[16px] font-semibold"
        >
          Signup
        </NavLink>
        <NavLink
          to="/login"
          className="btn  bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white text-[16px] font-semibold ml-2"
        >
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;

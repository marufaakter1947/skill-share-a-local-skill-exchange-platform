import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="hero-content flex-col  ">
        <div className="card bg-base-100 w-full max-w-md md:max-w-lg shrink-0 shadow-2xl p-6">
          <h1 className="text-5xl font-bold text-center mb-4">Login now!</h1>
          <div className="card-body flex justify-center">
            <fieldset className="space-y-4 w-full">
                <label className="block text-sm font-medium mb-1">Email</label>

              <div className="flex justify-center">
                <input
                  type="email"
                  className="input input-bordered w-96 max-w-full"
                  placeholder="Enter your Email"
                />
              </div>
                <label className="block text-sm font-medium mb-1">Password</label>

              <div className="flex justify-center relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-96 max-w-full"
                  placeholder="Enter your Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-[14px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="text-blue-400">
                <a className="link link-hover">Forgot password?</a>
              </div>
              <div className="flex justify-center">
                <button className="btn btn-neutral w-96 max-w-full mt-4">
                  Login
                </button>
              </div>
              <p className="font-semibold text-center pt-5">
                Don't Have an account?{" "}
                <Link className="text-secondary hover:underline" to="/signup">
                  Register
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const googleProvider = new GoogleAuthProvider();
const Login = () => {
    const [user,setUser] =useState(null);
  const [show, setShow] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
  const password = e.target.password.value;
     console.log("Sign in function entered",{email,password});


    signInWithEmailAndPassword(auth,email,password)
     .then((res)=>{
        setUser(res.user);
            toast.success("Login Successful")
        })
        .catch((e)=>{
            toast.error(e.message);
        })
  };

  const handleGoogleSignin = ()=>{
    signInWithPopup(auth,googleProvider)
    .then(()=>{
            toast.success("Signin Successful");
        })
        .catch((e)=>{
            toast.error(e.message);
        })
  }

  const handleSignout = ()=>{
    signOut(auth)
   .then(()=>{
            toast.success("Signout Successful");
            setUser(null);
        })
        .catch((e)=>{
            toast.error(e.message);
        })
  }

  return (
    <div className="hero bg-base-200 min-h-screen  ">
      <div className="hero-content flex-col  ">
       {
        user ? (
            <div className="text-center space-y-3">
                <img src={user?.photoURL || "https://via.placeholder.com/88"} className="h-20 w-20 rounded-full mx-auto" alt="" />
             <h2 className="text-xl font-semibold">{user?.displayName}</h2>
             <button onClick={handleSignout} className="btn btn-primary">SignOut</button>
            </div>
        ) : (
             <form onSubmit={handleSignin}>
          <div className="card bg-base-100 w-full max-w-md md:max-w-lg shrink-0 shadow-2xl p-6">
            <h1 className="text-5xl font-bold text-center mb-4">Login now!</h1>

           
             <div className="card-body flex justify-center">
              <fieldset className="space-y-4 w-full">
                <label className="block text-sm font-medium mb-1">Email</label>

                <div className="flex justify-center">
                  <input
                    type="email"
                    name="email"
                    className="input input-bordered w-96 max-w-full"
                    placeholder="Enter your Email"
                  />
                </div>
                <label className="block text-sm font-medium mb-1">
                  Password
                </label>

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
                <div className="flex justify-center">
                  <button onClick={handleGoogleSignin} className="btn btn-neutral w-96 max-w-full mt-4">
                    <FcGoogle /> Continue with Google
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
        </form>
        )
       }
      </div>
    </div>
  );
};

export default Login;

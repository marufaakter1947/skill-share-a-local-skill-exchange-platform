import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { Link } from 'react-router';
import { auth } from '../Firebase/Firebase.config';
import toast from 'react-hot-toast';

const Signup = () => {
    const [show, setShow] = useState(false);


   

    const handleSignup =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log("Sign up function entered",{email,password});

         if(password.length<6){
        toast.error("Length must be at least 6 character");
        return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
  toast.error("Password must include at least one uppercase letter");
  return;
}
    if (!/(?=.*[a-z])/.test(password)) {
  toast.error("Must have a Lowercase letter in the password");
  return;
}

        createUserWithEmailAndPassword(auth,email,password)
        .then(()=>{
            toast.success("Signup Successful")
        })
        .catch((e)=>{
            toast.error(e.message);
        })
    }


    return (
        <div className="hero bg-base-200 min-h-screen  ">
      <div className="hero-content flex-col  ">
        <div className="card bg-base-100 w-full max-w-md md:max-w-lg shrink-0 shadow-2xl p-6">
          <h1 className="text-5xl font-bold text-center mb-4">Join Us Today!</h1>
          <form onSubmit={handleSignup}>
            <div className="card-body flex justify-center">
            <fieldset className="space-y-4 w-full">
                <label className="block text-sm font-medium mb-1">Name</label>
                
              <div className="flex justify-center">
                
                <input
                  type="text"
                  name='name'
                  className="input input-bordered w-96 max-w-full "
                  placeholder="Enter your Name" required
                />
              </div>
                <label className="block text-sm font-medium mb-1">Email</label>

              <div className="flex justify-center">
                <input
                  type="email"
                  name='email'
                  className="input input-bordered w-96 max-w-full "
                  placeholder="Enter your Email" required
                />
              </div>
                <label className="block text-sm font-medium mb-1">Photo-URL</label>

              <div className="flex justify-center">
                <input
                  type="text"
                   name='photo'
                  className="input input-bordered w-96 max-w-full "
                  placeholder="Enter your Photo-URL" required
                />
              </div>
                <label className="block text-sm font-medium mb-1">Password</label>

              <div className="flex justify-center relative">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input input-bordered w-96 max-w-full "
                  placeholder="Enter your Password" required
                />
                 <span
                  onClick={() => setShow(!show)}
                  className="absolute right-2 top-[14px] cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              
              <div className="flex justify-center">
                <button className="btn btn-neutral w-96 max-w-full mt-4">
                  Register
                </button>
              </div>
               <p className='font-semibold text-center pt-5'>Already Have an account? <Link className='text-secondary hover:underline' to="/login">Login</Link></p>
            </fieldset>
          </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Signup;
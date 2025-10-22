import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

import toast from "react-hot-toast";
import { useLocation } from "react-router";

const ForgetPassword = () => {
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent!");
        window.location.href = "https://mail.google.com/";
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-md shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Reset Your Password
        </h1>
        <form onSubmit={handleReset}>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered w-full mb-4"
            placeholder="Enter your email"
          />
          <button className="btn bg-lime-400 w-full">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;

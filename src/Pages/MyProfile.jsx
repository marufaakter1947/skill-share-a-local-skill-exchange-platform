
import React, { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user,setUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photo,
      });
      setUser({ ...user, displayName: name, photoURL: photo });
      toast.success("Profile updated successfully!");
      setEditing(false);
    } catch (e) {
    //   console.error(e);
     toast.error(e.message)
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">My Profile</h2>

      <div className="flex flex-col items-center mb-4">
        <img
          src={user?.photoURL || "/default-avatar.png"}
          alt="User"
          className="w-30 h-30 rounded-full object-contain object-center border mb-3"
        />
        <h3 className="text-lg font-semibold">{user?.displayName || "No Name"}</h3>
        <p className="text-gray-500">{user?.email}</p>
      </div>

      {!editing ? (
        <button
          onClick={() => setEditing(true)}
          className="btn bg-[linear-gradient(125.07deg,#89F336,#458018)] text-white w-full"
        >
          Update Profile
        </button>
      ) : (
        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="block font-semibold">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex justify-between">
            <button type="submit" className="btn bg-lime-400">
              Save Changes
            </button>
            <button
              type="button"
              className="btn bg-red-400"
              onClick={() => setEditing(false)}

            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default MyProfile;

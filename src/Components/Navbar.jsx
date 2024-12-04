import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const handleluser = () => {
    if (localStorage.getItem("token")) {
      console.log("token");
    }
  };

  return (
    <div className="mb-10 shadow-lg">
      <nav className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 text-white">
        {/* Left Navigation */}
        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-indigo-300 transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/User"
              className="hover:text-indigo-300 transition duration-300 ease-in-out"
            >
              User
            </Link>
          </li>
        </ul>

        {/* Right Navigation */}
        {!localStorage.getItem("token") ? (
          <div className="flex gap-4">
            <Link
              type="button"
              className="btn bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300"
              to="/Login"
            >
              Login
            </Link>
            <Link
              type="button"
              className="btn bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300"
              to="/Signup"
            >
              Signup
            </Link>
          </div>
        ) : (
          <div className="flex gap-6 items-center">
            <div className="flex gap-6">
              <Link
                to="/Admin"
                className="hover:text-indigo-300 transition duration-300 ease-in-out"
              >
                Admin
              </Link>
              <Link
                to="/Editor"
                className="hover:text-indigo-300 transition duration-300 ease-in-out"
              >
                Editor
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <Link
                type="button"
                className="btn bg-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-500 transition duration-300"
                onClick={handleluser}
                to="/allusers"
              >
                Users Info
              </Link>
              <button
              
                type="button"
                className="btn bg-red-600 px-4 py-2 rounded-md hover:bg-red-500 transition duration-300"
                onClick={handlelogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log("this is fetch");
    const { name, email, password} = credentials;

    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password}),
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      console.log("Token saved successfully.");

      localStorage.setItem("token", json.authtoken);
      // console.log("this is authtoken",token);
      // props.showalert("logged in successfully", "success");
      navigate("/");
    } else {
      // props.showalert("invalid credentials","danger");
      console.log("invalid credentials");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action=""
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
        onSubmit={handleClick}
      >
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
          Sign Up
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            name="name"
            className="block text-gray-600 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            name="Email"
            className="block text-gray-600 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            name="Password"
            className="block text-gray-600 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label
            htmlFor="confirm-password"
            className="block text-gray-600 mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="Confirm Password"
            placeholder="Enter confirm password here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={onChange}
          />
        </div>

        {/* Role
        <div className="mb-6">
          <label htmlFor="role" className="block text-gray-600 mb-2">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="Role"
            placeholder="Role"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={onChange}
          />
        </div> */}
        <div className="login">
          <p>already have account..</p>
          
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

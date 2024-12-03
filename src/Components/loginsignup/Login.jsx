import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import './css/loginsignup.css'
export default function Login() {
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
    role: "",
  });
  // const [selectedRole, setSelectedRole] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
        role: credentials.role,
      }),
    });

    const json = await response.json();
    console.log(json);
    if (json.success) {
      // redirect
      localStorage.setItem("token", json.authtoken);
      console.log("Token saved successfully.");
      // props.showalert("logged in successfully", "success");
      navigate("/");

      // if(localStorage.getItem('token')){
      //   <> user information </>
      // }else{

      // }
    } else {
      // props.showalert("invalid credetials", "danger")c;
      // console.log("enter valid credentials");
    }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
    // setSelectedRole(event.target.value);
    // console.log("this is value",event.target.value)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-11">
      <form
        onSubmit={handleSubmit}
        action=""
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
          Login{" "}
        </h2>
        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
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
          <label htmlFor="password" className="block text-gray-600 mb-2">
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
            name="confirm password"
            id="confirm-password"
            placeholder="Enter confirm password here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            // onChange={onChange}
          />
        </div>
        {/* Role */}
        <div>
          {/* <label htmlFor="Choose-a-Role" className="block text-gray-600 mb-2">
            Choose a Role
          </label>
          <select
            id="Choose-a-Role"
            name="role"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleRoleChange} // Trigger focus on input field
            value={credentials.role} // Bind dropdown to credentials.role

          >
            <option value="Admin">Admin</option>
            <option value="Editor">Editor</option>
            <option value="User">User</option>
          </select> */}
          <label htmlFor="role" className="block text-gray-600 mb-2"> your role</label>
          <input
            type="text"
            id="role-input"
            name="role"
            placeholder="Enter details for the selected role"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            // value={credentials.role} // Bind input to credentials.role
            onChange={onChange}
            // readOnly
          />
        </div>
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

import React from "react";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        action=""
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full"
      >
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
          Sign Up
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter email here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            placeholder="Enter password here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
            placeholder="Enter confirm password here"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Role */}
        <div className="mb-6">
          <label htmlFor="role" className="block text-gray-600 mb-2">
            Role
          </label>
          <input
            type="text"
            id="role"
            placeholder="Role"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
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

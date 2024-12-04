import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gray-100 py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Explore amazing features and enjoy seamless navigation.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-400 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <div className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">Feature 1</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">Feature 2</h3>
            <p className="text-gray-600">
              Accusantium molestias consequatur sapiente eveniet laudantium.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-bold mb-2">Feature 3</h3>
            <p className="text-gray-600">
              Necessitatibus praesentium tempore dolores similique architecto.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-lg mb-6">
          Sign up now and explore the features tailored just for you.
        </p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300">
          Sign Up
        </button>
      </div>
    </div>
  );
}

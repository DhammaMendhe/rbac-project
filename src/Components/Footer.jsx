
   import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 my-9">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-bold mb-2">About Us</h3>
          <p className="text-sm text-gray-400">
            We provide quality content and seamless user experiences. Our mission is to deliver excellence.
          </p>
        </div>

        {/* Section 2: Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="text-sm text-gray-400">
            <li className="hover:text-white">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white">
              <a href="/User">Users</a>
            </li>
            <li className="hover:text-white">
              <a href="/Admin">Admin</a>
            </li>
            <li className="hover:text-white">
              <a href="/Editor">Editor</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-400">
            Email: support@example.com <br />
            Phone: +123 456 7890
          </p>
        </div>

        {/* Section 4: Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i> {/* Replace with SVG if needed */}
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
}



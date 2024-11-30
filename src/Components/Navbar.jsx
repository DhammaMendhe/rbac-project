import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="mb-10">
      <nav className="">
        <ul className="border flex align-middle">
          {" "}
          <li className=" text-red-500 ">
            <Link
              //   className={`${
              //     location.pathname === "/about" ? "active" : ""
              //   }`}
              //   aria-disabled="true"
              to="/"
            >
              Home
            </Link>
          </li>{" "}
          <li className="border text-red-500 ">
            <Link
              //   className={`${
              //     location.pathname === "/about" ? "active" : ""
              //   }`}
              //   aria-disabled="true"
              to="/Register"
            >
              Register
            </Link>
          </li>
          <li className="border text-red-500 ">
            <Link
              //   className={`${
              //     location.pathname === "/about" ? "active" : ""
              //   }`}
              //   aria-disabled="true"
              to="/User"
            >
              user
            </Link>
          </li>{" "}
          <li className="border text-red-500 ">
            <Link
              //   className={`${
              //     location.pathname === "/about" ? "active" : ""
              //   }`}
              //   aria-disabled="true"
              to="/Admin"
            >
              Admin
            </Link>
          </li>{" "}
          <li className="border text-red-500 ">
            <Link
              //   className={`${
              //     location.pathname === "/about" ? "active" : ""
              //   }`}
              //   aria-disabled="true"
              to="/Manager"
            >
               Manager
            </Link>
          </li>
          
          {/* <li className="nav-item text-red-500">
            <Link
              //   className={`${
              //     location.pathname === "/about" ? "active" : ""
              //   }`}
              //   aria-disabled="true"
              to="/Admin"
            >
              admin
            </Link>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

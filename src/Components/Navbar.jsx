import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="mb-10">
      <nav className=" flex justify-between">
        <ul className="border flex gap-9">
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
              to="/Editor"
            >
              Editor
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

        <div className="loginsignup flex gap-4">
          <div className="signup">
            <Link to="/Signup">
              {" "}
              <button>signup</button>
            </Link>
          </div>
          <div className="login">
          <Link to="/Login">
              {" "}
              <button>Login</button>
            </Link>          </div>
        </div>
      </nav>
    </div>
  );
}

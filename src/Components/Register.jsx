import React from "react";

export default function Register() {
  return (
    <div>
      <form action="" className="flex justify-start ">
        <div></div> <label htmlFor="role">Role</label>
        <input type="text" placeholder="role" />
        <div>
          {" "}
          <label htmlFor="name">name</label>
          <input type="text" placeholder="enter name here" />{" "}
        </div>
        <div>
          {" "}
          <label htmlFor="name"> email</label>
          <input type="text" placeholder="enter email here" />{" "}
        </div>
        <div>
          {" "}
          <label htmlFor="name">name</label>
          <input type="text" placeholder="enter password here" />{" "}
        </div>
        <div>
          {" "}
          <label htmlFor="name">name</label>
          <input
            type="password"
            placeholder="enter confirm password here"
          />{" "}
        </div>
      </form>
    </div>
  );
}

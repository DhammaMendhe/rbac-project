import React from "react";

export default function Editor() {
  return (
    <div>
      Editor
      <p className="border"> this is User</p>
      <form action="">
        <label htmlFor="name">name</label>
        <input type="text" placeholder="enter name here" />

        <label htmlFor="name"> email</label>
        <input type="text" placeholder="enter email here" />

        <label htmlFor="name">name</label>
        <input type="text" placeholder="enter password here" />

        <div>
          <button>
            <input type="submit" />
          </button>
        </div>
      </form>
    </div>
  );
}

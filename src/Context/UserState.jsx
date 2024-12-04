import { createContext } from "react";
//  import ShopContext from './context'
import React, { useState } from "react";
import usercontext from "./context";

const userStates = (props) => {
  const host = "http://localhost:5000";
  const initialUsers = [];

  const [users, setUsers] = useState(initialUsers);

  //add notes

  const fetchusers = async () => {
    //API call
    const response = await fetch(`${host}/api/permission/fetchAll`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = await response.json();
    // console.log(json);
    setUsers(json);
  };

  // delete user
  const deleteUser = async (id) => {
    //API call
    console.log(id);
    const response = await fetch(`${host}/api/permission/deleteuser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const json = response.json();
    // console.log(json);
    // console.log("note deleting with id :" + id);
    const newusers = users.filter((user) => {
      return user._id !== id;
    });
    setUsers(newusers);
  };

  const contextValue = { fetchusers, users ,deleteUser};

  return (
    <usercontext.Provider value={contextValue}>
      {props.children}
    </usercontext.Provider>
  );
};

export default userStates;

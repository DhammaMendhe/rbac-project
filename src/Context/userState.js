import { createContext, useState } from "react";
export const ShopContext = createContext(null);
import React, { useState } from 'react';
import usercontext from './context';


const ShopContextProvider = (props) => {

  const host = 'http://localhost:5000';
  const initialUsers = [];

  const [notes, setUsers] = useState(initialUsers);

  //add notes

  const fetchusers = async () => {
    //API call 
    const response = await fetch(`${host}/api/permission/fetchAll`,
      {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc0ZDNmNDI5MTg2OGQzZjBkMjhlOWVkIn0sImlhdCI6MTczMzExNTcxNH0.1zKTO1QJ4IZuGLOeLNhzNF5qanHjhmqPDCsPoNpTKrU"
          // localStorage.getItem('token')
        }
      });
    const json = await response.json();
    console.log(json);
    setUsers(json)

  }

  //add notes
  const addNotes = async (title, description, tag) => {

    console.log("adding ntes")
    //API call 
    const response = await fetch(`${host}/api/notes/addnotes`,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')

          // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZiNjVlZjgyYWFiYzJiNTkwZTVhZjk4In0sImlhdCI6MTcyNTgxNTYwMH0.yoNJmH-Ogu9W3J0bkkG9gl_C5p1paE5ur49l9clHY8w'
          // localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })

      });
    const note = await response.json();
    // console.log(json)
    setNotes(notes.concat(note))

  }

  // delete notes
  const deleteNotes = async (id) => {

    //API call 
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        }
      });
    const json = response.json();
    console.log(json);
    console.log("note deleting with id :" + id)
    const samplenNote = notes.filter((note) => { return note._id !== id });
    console.log(samplenNote)
    setNotes(samplenNote)

  }


  //edit notes
  const editNotes = async (id, title, description, tag) => {
    //API call 
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
          'auth-token': localStorage.getItem('token')
        },
        body: JSON.stringify({ title, description, tag })

      });
    const json = response.json();
    console.log(json)

    const newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;

      }

    }
    setNotes(newNotes);

  }




  const contextValue = value={ users, initialuser, addusers, deleteuser, editusers, fetchusers }

  return (
    <usercontext.Provider
      value={contextValue}
    >
      {props.children}
    </usercontext.Provider>
  );
};

export default ShopContextProvider;
import React, { useContext, useEffect } from "react";
import usercontext from "../Context/context";

export default function user() {
  const context = useContext(usercontext);
  const { users,fetchusers } = context;

  
  useEffect(() => {
    fetchusers();
  }, []);

  // Filter out admins
  const editor = users.filter((user) => user.role === "editor");

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          editors Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {editor.map((user) => (
            <div
              key={user.id || user._id}
              className="bg-gray-100 shadow-lg rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {user.name}
              </h3>
              <p className="text-gray-600">
                <span className="font-bold">Email: </span>
                {user.email}
              </p>
              <p className="text-gray-600">
                <span className="font-bold">Role: </span>
                {user.role}
              </p>
              <div className="mt-4">
                <h4 className="font-bold text-gray-600">Permissions:</h4>
                <ul className="list-disc ml-5">
                  {Object.entries(user.permissions || {}).map(
                    ([key, value]) => (
                      <li
                        key={key}
                        className={`${
                          value ? "text-green-600" : "text-red-600"
                        } font-semibold`}
                      >
                        {key}: {value ? "Yes" : "No"}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


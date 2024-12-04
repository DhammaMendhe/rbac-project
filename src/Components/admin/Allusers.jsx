import React, { useEffect } from "react";
import { useContext } from "react";
import usercontext from "../../Context/context";
import userlogo from '../../assets/user-regular.svg'

export default function Allusers(props) {
  const context = useContext(usercontext);
  const { users, fetchusers, deleteUser } = context;
  //   const { users } = props;
  useEffect(() => {

    fetchusers();

  }, []);

  const handleUpdate = () => {};

  const handleDelete = (id) => {
    deleteUser(id);
  };
  return (
    <div className="container mx-auto p-4">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">Logo</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Role</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Permissions
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">
                <img
                  src={user.logo || userlogo}
                  alt="User Logo"
                  className="w-10 h-10 rounded-full mx-auto"
                />
              </td>
              <td key={user.id} className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td key={user.id} className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td key={user.id} className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td key={user.id} className="border border-gray-300 px-4 py-2">
                {Object.entries(user.permissions).map(([key, value]) => (
                  <span
                    key={key}
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      value
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    } mr-1`}
                  >
                    {key}: {value ? "Yes" : "No"}
                  </span>
                ))}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-400 transition"
                  onClick={() => handleUpdate(user.id)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 transition ml-2"
                  onClick={() => handleDelete(user.id || user._id)}
                  disabled={user.role !== "admin"}
                  title={
                    user.role !== "admin" ? "Only admins can delete users" : ""
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

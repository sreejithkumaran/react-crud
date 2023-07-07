import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";

const UserList = () => {

  const { users, removeUser } = useContext(GlobalContext);
  const [search, setSearch] = useState('')
  const [records, setRecords] = useState('')
  console.log(search)

  return (
    <div>
      <h5>Display User Details</h5>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>
              <input type="text" placeholder="search" onChange={(e) => setSearch(e.target.value)}></input>
            </th>
            <th> </th>
            <th>
              <Link to="/addUser"> Add User</Link>
            </th>
          </tr>
          <tr>
            <th>
              <label>First Name</label>
            </th>
            <th>
              <label>Last Name</label>
            </th>
            <th>
              <label>Email Id</label>
            </th>
            <th>
              <label>Phone No</label>
            </th>
            <th>
              <label>Actions</label>
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            <>
              {users
              .filter((user) => {
                return search.toLowerCase() === ''
                ? user
                : user.firstName.toLowerCase().includes(search);
              })
              .map((user) => (
                <tr key={user.id}>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.emailId}</td>
                  <td>{user.phoneNo}</td>
                  <td>
                    <Link
                      class="btn btn-warning btn-sm"
                      to={`/editUser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      class="btn btn-danger btn-sm"
                      onClick={() => removeUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              <p>No of Records : {users.length}</p>
            </>
          ) : (
           <h7>No records displayed</h7>
          )}
        </tbody>
      </table>
    
    </div>
  );
};

export default UserList;

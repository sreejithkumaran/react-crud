import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar-expand-sm bg-light justify-content-center">
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/addUser"> Add New User </NavLink>
      </nav>

      {/* <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link active" href="/">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/addUser">
            Add User
          </a>
        </li>
      </ul> */}
    </div>
  );
};

import React from "react";
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return(
        <nav>
           <NavLink to='/'>Home | </NavLink>
           <NavLink to='/addUser'>Add New User | </NavLink>
           <NavLink to='/editUser/:id'>Edit User </NavLink> 

        </nav>
    )
}
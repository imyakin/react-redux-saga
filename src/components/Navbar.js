import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/counter'>Counter</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/counter_update'>Counter with Update</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/counter_numbers'>Counter with Numbers</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
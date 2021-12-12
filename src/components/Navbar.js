import React from "react";
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link active" to={'/'}>Home</NavLink>
                </li>
                {/*<li className="nav-item dropdown">*/}
                {/*    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"*/}
                {/*       data-bs-toggle="dropdown" aria-expanded="false">*/}
                {/*        Dropdown*/}
                {/*    </a>*/}
                {/*    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">*/}
                {/*        <li><a className="dropdown-item">Action</a></li>*/}
                {/*        <li><a className="dropdown-item">Another action</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}

export default Navbar;
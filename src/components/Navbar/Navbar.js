import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import {RiMore2Fill, RiCloseFill} from 'react-icons/ri'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const toggleHandler = (boolean) => {
        setToggleMenu(boolean);
        setTimeout(()=>{
            setToggleMenu(false)
        }, 3000)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to='/'>Home</NavLink>
                </li>
                {toggleMenu ? 
                    <li className="d-inline-flex align-items-center nav-item" onClick={()=>toggleHandler(false)}>
                        <a className="nav-link">Counters</a><RiCloseFill color='#fff' size={25}/>
                    </li>
                    : <li className="d-inline-flex align-items-center nav-item" onClick={()=>toggleHandler(true)}>
                        <a className="nav-link">Counters</a><RiMore2Fill color='#fff' size={25}/>
                    </li>
                }
                {toggleMenu && 
                    <ul>
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
                    }
            </ul>
        </nav>
    )
}

export default Navbar;
import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
    
    const userToken = window.localStorage.getItem("token")===null

return(
    <div className="NavBar">
        {userToken ? (
        <ul>
            <NavLink to="/">
                <li className="Nav__item">
                    HOME
                </li>
            </NavLink>
            <NavLink to="/login">
                <li className="Nav__item">
                    LOGIN
                </li>
            </NavLink>
            <NavLink to="/register">
                <li className="Nav__item">
                    REGISTER
                </li>
            </NavLink>
        </ul> ) : (<ul>
            <NavLink to="/">
                <li className="Nav__item">
                    HOME
                </li>
            </NavLink>
            <NavLink to="/quests">
                <li className="Nav__item">
                    QUESTS
                </li>
            </NavLink>
            <NavLink to="/profile">
                <li className="Nav__item">
                    PROFILE
                </li>
            </NavLink>
        </ul> 
        )}
    </div>
)
}

export default NavBar
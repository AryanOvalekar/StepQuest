import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    const userToken = window.localStorage.getItem("token")===null

return(
    <div>
        {userToken ? (
        <ul>
            <NavLink to="/">
                <li className="Nav__item">
                    Home
                </li>
            </NavLink>
            <NavLink to="/login">
                <li className="Nav__item">
                    Login
                </li>
            </NavLink>
            <NavLink to="/register">
                <li className="Nav__item">
                    Register
                </li>
            </NavLink>
        </ul> ) : (<ul>
            <NavLink to="/">
                <li className="Nav__item">
                    Home
                </li>
            </NavLink>
            <NavLink to="/quests">
                <li className="Nav__item">
                    Quests
                </li>
            </NavLink>
            <NavLink to="/map">
                <li className="Nav__item">
                    Profile
                </li>
            </NavLink>
        </ul> 
        )}
    </div>
)
}

export default NavBar
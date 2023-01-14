import React from 'react'
import { NavLink } from "react-router-dom";

const NavBar = () => {
    
    const userToken = window.localStorage.getItem("token")

if (userToken === null){ return (
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
        </ul>
    )}
else{ return (
        <ul>
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
}

export default NavBar
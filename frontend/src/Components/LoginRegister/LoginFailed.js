import React from 'react'
import Login from './Login'
import "./LoginRegister.css"
import { NavLink } from "react-router-dom";

export const LoginFailed = () => {
  return (
    <div>
        <h1 className="login-header">Login Failed</h1>
        <NavLink to="/login">
                <li className="Nav__item">
                    Retry Login
                </li>
            </NavLink>
    </div>
  )
}

export default LoginFailed
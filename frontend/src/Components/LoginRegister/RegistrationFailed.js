import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./LoginRegister.css"
import { NavLink } from "react-router-dom";

const RegistrationFailed = () => {
  return (
    <div>
        <h1 className="login-header">Registration Failed</h1>
        <NavLink to="/register">
                <li className="Nav__item">
                    Retry Registration
                </li>
            </NavLink>
    </div>
  )
}

export default RegistrationFailed
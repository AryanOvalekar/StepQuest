import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./LoginRegister.css"
import { NavLink } from "react-router-dom";

const RegistrationFailed = () => {
  return (
    <div>
        <div>
          <body className="login-body">
            <div class="login-form">
                  <h1 className="login-header">SIGN UP <br />FAILED<br /><br/></h1>
                  <h1 className='exclamation-login'>!</h1>
                  <div className="failed-button">
                    <NavLink to="/register">
                        <button className="login-button">
                            TRY AGAIN
                        </button>
                    </NavLink>
                  </div>
            </div>
          </body>
        </div>
        
    </div>
  )
}

export default RegistrationFailed
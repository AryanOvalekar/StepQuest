import React from 'react'
import Login from './Login'
import "./LoginRegister.css"
import { NavLink } from "react-router-dom";

export const LoginFailed = () => {
  return (
    <div>
        <div>
          <body className="login-body">
            <div class="login-form">
                  <h1 className="login-header">LOGIN <br />FAILED<br /><br /></h1>
                  <h1 className='exclamation-login'>!</h1>
                  <div className="failed-button">
                    <NavLink to="/login">
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

export default LoginFailed
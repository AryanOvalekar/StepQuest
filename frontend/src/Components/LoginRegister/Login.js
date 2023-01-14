import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = ( ) => {  
    let nav = useNavigate();
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (event) => {
        event.preventDefault();
        
        axios.post(SERVER_URL+"/login", {
            password:password,
            email:email,
        })
        .then(response => { 
            if(response.data.length!=0){

                const id = response.data.shift();
                window.localStorage.setItem('token', id._id);
                nav("/")
                window.location.reload(false);
            }
            else{
                nav("/login-failed")
            }});
    }

    return (
        <body className="login-body">
        <div class="login-form" onSubmit={submitLogin}>
            <form>
                    <h1 className="login-header">LOGIN</h1>
                    <div class="input-field">
                        <input className = "login-element" type='email' placeholder = 'Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div class="input-field">
                    <input className = "login-element" type='password' placeholder = 'Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>                 
                    <input className = "login-button" type = 'submit' value =  'LOGIN'></input>
            </form>
        </div>
        </body>
    )
}

export default Login
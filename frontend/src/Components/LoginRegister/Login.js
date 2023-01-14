import React from 'react'
import axios from "axios"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {  
    let nav = useNavigate();
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost:3001/login", {
            password:password,
            email:email,
        })
        .then(response => { 
            if(response.data.length!=0){
                const id = response.data.shift();
                window.localStorage.setItem('token', id._id);
                nav("/")   
            }
            else{
                nav("/login-failed")
            }});
    }

    return (
        <div class="login-form" onSubmit={submitLogin}>
            <form>
                <h1>LOGIN</h1>
                    <input className = "login-element" type='email' placeholder = 'Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className = "login-element" type='password' placeholder = 'Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                    <input className = "login-misc-3" type = 'submit' value =  'LOGIN'></input>
            </form>
        </div>
    )
}

export default Login
import React from 'react'
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Register = () => {  
    let nav = useNavigate();
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const [username, setUsername] = useState("");  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitRegister = (event) => {
        event.preventDefault();
        
        axios.post("http://localhost:3001/register", {
            username:username,
            password:password,
            email:email,
        })
        .then(response => { 
            if(response.data.length!=0){
                nav("/login")
            }
            else{
                nav("/registration-failed")
            }});
    }

    return (
        <div class="login-form" onSubmit={submitRegister}>
            <form>
                <h1>SIGN UP</h1>
                    <input className = "login-element" type='username' placeholder = 'Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <input className = "login-element" type='email' placeholder = 'Email Address' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input className = "login-element" type='password' placeholder = 'Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                    <input className = "login-misc-3" type = 'submit' value =  'SIGN UP'></input>
            </form>
        </div>
    )
}

export default Register
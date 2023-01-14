import React from 'react'
import { useState } from 'react';

const Login = () => {  

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitLogin = (event) => {
        console.log("Logged in!")

        //ADD AXIOS METHOD
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
import React from 'react'
import { useState } from 'react';

const Login = () => {  

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div class="login-form">
            <form>
                <h1>Login</h1>
                <div class="content">
                <div class="input-field">
                    <input type="email" placeholder="Email" autocomplete="nope"></input>
                </div>
                <div class="input-field">
                    <input type="password" placeholder="Password" autocomplete="new-password"></input>
                </div>
                </div>
                <div class="action">
                <button>Register</button>
                <button>Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Login
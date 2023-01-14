import "./LoginRegister.css"

const Login = () => {  

    return (
        <body className="login-body">
            <div class="login-form">
                <form>
                    <h1>LOGIN</h1>
                        <div class="content">
                        <div class="input-field">
                            <input type="email" placeholder="Email" autocomplete="nope"></input>
                        </div>
                        <div class="input-field">
                            <input type="password" placeholder="Password" autocomplete="new-password"></input>
                        </div>
                        </div>
                        <div class="action">
                            <button className="login-button">Sign in</button>
                        </div>
                </form>
            </div>
        </body>
    )
}

export default Login
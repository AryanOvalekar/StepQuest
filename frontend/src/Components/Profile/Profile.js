import React, { useState, useEffect } from 'react'
import Image from 'react'
import "./Profile.css"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Profile = () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    let nav = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const getProfile = () => {
        axios.post(SERVER_URL+"/getqueststatus", {
          userID: window.localStorage.getItem("token")
        }).then(response => {
          const info = response.data
          setName(info.username)
          setEmail(info.email)
        });
    }

    const signOut = () => {
      window.localStorage.removeItem('token')
      nav("/")
      window.location.reload(false);
    }

    useEffect(() => getProfile(), []);

  return (
    <body className="profile-body">
        <div class="login-form">
            <form>
                    <h1 className="name-text">{name}</h1>
                    <u><p className="email-text">{email}</p></u>
                    <div className="button-div">
                    <NavLink to="/trophies">
                    <button className='google-button'>Trophies</button>
                    </NavLink>
                        
                        <button className='google-button' onClick={signOut}>Sign Out</button>
                    </div>
                    <div className='flavor-text'>
                        <b>
                        More connections<br/> coming soon...</b>
                    </div>

            </form>
        </div>
    </body>
  )
}

export default Profile
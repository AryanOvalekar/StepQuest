import React from 'react'
import Image from 'react'
import "./Profile.css"

const Profile = () => {
    const name = () => {
        return("Aryan")
    }

    const email = () => {
        return("aryanovalekar@gmail.com")
    }

  return (
    <body className="profile-body">
        <div class="login-form">
            <form>
                    <h1 className="name-text">{(name())}</h1>
                    <u><p className="email-text">{email()}</p></u>
                    <div className="button-div">
                        <button className='google-button'>Link to Google</button>
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
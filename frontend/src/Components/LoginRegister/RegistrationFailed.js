import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./LoginRegister.css"

const RegistrationFailed = () => {
  return (
    <div>
        <h1>Registration Failed</h1>
        <p> Retry Registration </p>
    </div>
  )
}

export default RegistrationFailed
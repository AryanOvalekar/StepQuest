import "./Plaque.css"
import React, { useState, useEffect } from 'react'
import axios from "axios"

const Plaque = (props) => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const getQuestDetails = () => {
    axios.post(SERVER_URL+"/getquestdetails", {
      questID: props.questID
    }).then(response => {
      const info = response.data
      setName(info.title)
      setImage(info.previewimg)
    });
  }
  
  useEffect(() => getQuestDetails(), []);

  return (
    <div>
        <div className='plaque' style={props.style}>
            <img className='wow' src={image}></img>
            <h1 className='wow2'>{name}</h1>
        </div>
    </div>
  )
}

export default Plaque
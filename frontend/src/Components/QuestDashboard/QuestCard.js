import React, { useState } from 'react'
import "./QuestCard.css"
import Star from './Star';
import axios from "axios"

const QuestCard = ( props ) => {
    const [expand, setExpand] = useState(false);
    const [height, setHeight] = useState("200px");

    const id = props.id;
    const title = props.title;
    const length = props.length;
    const difficulty = props.difficulty;
    const description = props.description;
    const imageURL = props.imageURL;
    const color = props.color
    const onestar = props.onestar
    const twostar = props.twostar
    const threestar = props.threestar

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const token = window.localStorage.getItem("token")

    const onClick = () => {
        setExpand(!expand)
        if (height === "200px"){
            setHeight("400px");
        }
        else{
            setHeight("200px");
        }
    }

    const selectQuest = () => {
        console.log(window.localStorage.getItem("token"))

        axios.post(SERVER_URL+"/addquest", {
            userID: token,
            questID: id,
        })
    }

    return (
        <div onClick={onClick} className='cardbody' style={{backgroundColor: color, height: height}}>
            <img className='cardimg'src={imageURL}/>
            <div className='cardcontent'>
                <h2 className='cardtitle'>{title}</h2>
                <h3 className='cardsubtitle'>Difficulty: {difficulty}</h3>
                <h3 className='cardsubtitle'>Length: {length}</h3>
                <p className='carddescription'>{description}</p>
                {expand ? (
                    <div>
                    ⭐⭐⭐<Star time = {threestar}></Star>
                    ⭐⭐<Star time = {twostar}></Star>
                    ⭐<Star time = {onestar}></Star>
                    <div className="button-div">
                    <button className="quest-button" style={{color: color}} onClick={selectQuest}>Select Quest</button>
                    </div>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export default QuestCard
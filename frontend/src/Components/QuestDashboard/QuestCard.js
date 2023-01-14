import React, { useState } from 'react'
import "./QuestCard.css"
import Star from './Star';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const QuestCard = ( props ) => {
    let nav = useNavigate();
    const [expand, setExpand] = useState(false);
    const [height, setHeight] = useState("140px");

    const id = props.id;
    const title = props.title;
    const length = props.length;
    const difficulty = props.difficulty;
    const description = props.description;
    const imageURL = props.imageURL;
    const color = props.color
    const color2 = props.color2
    const color3 = props.color3
    const onestar = props.onestar
    const twostar = props.twostar
    const threestar = props.threestar

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const token = window.localStorage.getItem("token")

    const onClick = () => {
        setExpand(!expand)
        if (height === "140px"){
            setHeight("280px");
        }
        else{
            setHeight("140px");
        }
    }

    const selectQuest = () => {
        console.log(window.localStorage.getItem("token"))

        axios.post(SERVER_URL+"/addquest", {
            userID: token,
            questID: id,
        })

        nav("/tutorial")
    }

    return (
        <div onClick={onClick} className='cardbody' style={{color: color3, backgroundColor: color, height: height}}>
            <img className='cardimg'src={imageURL}/>
            <div className='cardcontent'>
                <div className="main-info">
                    <h2 className='cardtitle'>{title}</h2>
                    <h3 className='cardsubtitle'>Difficulty: {difficulty}</h3>
                    <h3 className='cardsubtitle'>Length: {length}</h3>
                </div>
                    <p className='carddescription'>{description}</p>
                {expand ? (
                    <div>
                    <Star threestar={threestar} twostar={twostar} onestar={onestar}></Star>
                    <div className="button-div">
                    <button className="quest-button" style={{backgroundColor: color2}} onClick={selectQuest}>Select Quest</button>
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
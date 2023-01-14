import React, { useEffect, useState } from 'react'
import QuestCard from './QuestCard'
import axios from "axios"

const QuestCardLoader = () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [quests, setQuests] = useState([]);

    const fetchquests = () => {
        axios.post(SERVER_URL+"/fetchquests").then(response => { 
            if(response.data.length!=0){
                setQuests(response.data)
            }
            else{
                console.log("Couldn't fetch quests!")
            }});
    }

    useEffect(() => fetchquests(), []);

    return (
        <div className='cardholder'>
                {quests.map((quest, index) =>
                    <QuestCard id = {quest._id} title = {quest.title} color = {quest.color} color2 = {quest.color2} color3 = {quest.color3} imageURL = {quest.previewimg} difficulty = {quest.difficulty} length = {quest.length} description = {quest.description} onestar = {quest.onestar} twostar = {quest.twostar} threestar = {quest.threestar}/>
                )}

        </div>
    )
}

export default QuestCardLoader
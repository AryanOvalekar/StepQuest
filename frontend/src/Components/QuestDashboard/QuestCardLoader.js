import React, { useEffect, useState } from 'react'
import QuestCard from './QuestCard'
import axios from "axios"

const QuestCardLoader = () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const [quests, setQuests] = useState([]);


    const fetchquests = () => {
        console.log("click")
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
            <div>
                {quests.map((quest, index) =>
                    <QuestCard title = {quest.title} color = {quest.color} imageURL = {quest.previewimg} difficulty = {quest.difficulty} length = {quest.length} description = {quest.description} />
                )}
            </div>
        </div>
    )
}

export default QuestCardLoader
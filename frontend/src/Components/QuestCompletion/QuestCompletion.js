import React, { useState, useEffect } from 'react'
import QuestDisplay from './QuestDisplay'
import axios from "axios"


const QuestCompletion = ( props ) => {
  const questID = props.questData.currentQuestID
  const questObjective = props.questData.currentQuestObjective
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  
  const [questData, setQuestData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getQuestDetails = () => {
    axios.post(SERVER_URL+"/getquestdetails", {
      questID: questID
    }).then(response => {
      const info = response.data.objectives
      setQuestData(info)
      setLoading(false)
    });
  }
  useEffect(() => getQuestDetails(), []);

  if(isLoading){
    return (<></>)
  }
  
  return (
    <div>
      <QuestDisplay description = {questData[questObjective].description} imageURL = {questData[questObjective].img}/>
    </div>
  )
}

export default QuestCompletion
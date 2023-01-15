import React, { useState, useEffect } from 'react'
import QuestDisplay from './QuestDisplay'
import axios from "axios"
import QuestProgress from './QuestProgress'


const QuestCompletion = ( props ) => {
  const questID = props.questData.currentQuestID
  const questObjective = props.questData.currentQuestObjective
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  
  const [questData, setQuestData] = useState();
  const [isLoading, setLoading] = useState(true);

  const [progress, setProgress] = useState(props.questData.currentQuestObjectiveProgress);
  const [next, setNext] = useState()

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

  useEffect(() => setDBProgress(), [progress]);

  const setDBProgress = () => {
    console.log(progress)
  }

  const plus = () =>{
    if (progress < questData[questObjective].criteria)
    setProgress(progress+1)
    if(progress+1 == questData[questObjective].criteria)
      setNext(true)
  }

  const minus = () =>{
    if (progress > 0)
    setProgress(progress-1)
    if (!(progress+1 == questData[questObjective].criteria))
    setNext(false)
  }

  if(isLoading){
    return (<></>)
  }
  
  return (
    <div>
      <QuestDisplay description = {questData[questObjective].description} imageURL = {questData[questObjective].img}/>
      <QuestProgress left = {minus} right = {plus} progress = {progress} criteriaType = {questData[questObjective].criteriaType} criteria = {questData[questObjective].criteria}/>
      <div>{next ? (
        <button>Next</button>
      ) : (
        <></>
      )}</div>
      
    </div>
  )
}

export default QuestCompletion
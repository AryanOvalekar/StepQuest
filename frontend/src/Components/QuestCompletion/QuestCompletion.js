import React, { useState, useEffect } from 'react'
import QuestDisplay from './QuestDisplay'
import axios from "axios"
import QuestProgress from './QuestProgress'


const QuestCompletion = ( props ) => {
  const questID = props.questData.currentQuestID
  const startDate = props.questData.questTimeStarted
  const [questObjective, setQuestObjective] = useState(props.questData.currentQuestObjective);

  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const token = window.localStorage.getItem("token")
  
  const [RquestData, setQuestData] = useState();
  const [isLoading, setLoading] = useState(true);

  const [progress, setProgress] = useState(props.questData.currentQuestObjectiveProgress);
  const [next, setNext] = useState()
  const [max, setMax] = useState(1)
  
  const getQuestDetails = () => {
    axios.post(SERVER_URL+"/getquestdetails", {
      questID: questID
    }).then(response => {
      const info = response.data.objectives
      setQuestData(info)
      setLoading(false)
      setMax(info.length)
    });
  }
  useEffect(() => getQuestDetails(), []);

  useEffect(() => setDBObjective(), [questObjective]);

  const setDBObjective = () => {
    axios.post(SERVER_URL+"/setobjective", {
      userID: token,
      objective: questObjective,
  })
  }

  const plus = () =>{
    if (progress < RquestData[questObjective].criteria)
    setProgress(progress+1)
    if(progress+1 == RquestData[questObjective].criteria)
      setNext(true)
  }

  const minus = () =>{
    if (progress > 0)
    setProgress(progress-1)
    if (!(progress+1 == RquestData[questObjective].criteria))
    setNext(false)
  }

  const nextObjective = () =>{
    if(questObjective!=(max-1)){
      setQuestObjective(questObjective+1)
      setProgress(0)
      setNext(false)
    }
    else
      finishQuest()
  }

  const finishQuest = () => {
    console.log("Quest Finished")
    axios.post(SERVER_URL+"/resetQuest", {
      userID: token,
    })
    
    window.location.reload(false);
  }

  if(isLoading){
    return (<></>)
  }
  
  return (
    <div>
      <QuestDisplay description = {RquestData[questObjective].description} imageURL = {RquestData[questObjective].img}/>
      <QuestProgress left = {minus} right = {plus} progress = {progress} criteriaType = {RquestData[questObjective].criteriaType} criteria = {RquestData[questObjective].criteria}/>
      <div>{next ? (
        <button onClick={nextObjective}>Next</button>
      ) : (
        <></>
      )}</div>
      
    </div>
  )
}

export default QuestCompletion
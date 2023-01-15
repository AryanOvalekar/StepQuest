import React, { useState, useEffect } from 'react'
import QuestDisplay from './QuestDisplay'
import axios from "axios"
import QuestProgress from './QuestProgress'


const QuestCompletion = ( props ) => {
  const questID = props.questData.currentQuestID
  const [questObjective, setQuestObjective] = useState(props.questData.currentQuestObjective);

  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const token = window.localStorage.getItem("token")
  
  const [RquestData, setQuestData] = useState();
  const [RquestData2, setQuestData2] = useState();
  const [isLoading, setLoading] = useState(true);

  const [progress, setProgress] = useState(props.questData.currentQuestObjectiveProgress);
  const [next, setNext] = useState()
  const [max, setMax] = useState(1)
  
  const getQuestDetails = () => {
    axios.post(SERVER_URL+"/getquestdetails", {
      questID: questID
    }).then(response => {
      const info = response.data.objectives
      const info2 = response.data
      setQuestData(info)
      setQuestData2(info2)
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
    axios.post(SERVER_URL+"/resetQuest", {
      userID: token,
    })

    axios.post(SERVER_URL+"/getuserstatus", {
      userID: token
    }).then(response => {
      
      const questList = response.data.completedQuests
      const bronzeList = response.data.bronzeQuests
      const silverList = response.data.silverQuests
      const goldList = response.data.goldQuests
      const startDate = response.data.questTimeStarted
      const time = (((new Date).getTime() - startDate)/(1000*60*60))
      
      var newQuestList = questList
      if (questList.indexOf(questID) <= -1)
        newQuestList = [...questList,questID]

      var newBronzeList = bronzeList
      if (time < RquestData2.onestar && bronzeList.indexOf(questID) <= -1)
        newBronzeList = [...bronzeList,questID]

      var newSilverList = silverList      
      if (time < RquestData2.twostar && silverList.indexOf(questID) <= -1)
        newSilverList = [...silverList,questID]
      
      var newGoldList = goldList
      if (time < RquestData2.threestar && goldList.indexOf(questID) <= -1)
        newGoldList = [...goldList,questID]
      axios.post(SERVER_URL+"/setCompletedQuests", {
        userID: token,
        newList: newQuestList,
        newBronzeList: newBronzeList,
        newSilverList: newSilverList,
        newGoldList: newGoldList,
      })

    });

    window.location.reload(false);
  }

  if(isLoading){
    return (<></>)
  }
  
  return (
    <body className="quest-body"><div>
      <QuestDisplay description = {RquestData[questObjective].description} imageURL = {RquestData[questObjective].img}/>
      <QuestProgress left = {minus} right = {plus} progress = {progress} criteriaType = {RquestData[questObjective].criteriaType} criteria = {RquestData[questObjective].criteria}/>
      <div>{next ? (
        <button onClick={nextObjective}>Next</button>
      ) : (
        <></>
      )}</div>
      
    </div></body>
  )
}

export default QuestCompletion
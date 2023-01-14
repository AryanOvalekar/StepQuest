import React, { useEffect, useState } from 'react'
import QuestCompletion from '../QuestCompletion/QuestCompletion';
import QuestCardLoader from './QuestCardLoader'
import axios from "axios"

const QuestDashboard = () => {
  const [questSelected, setQuestSelected] = useState(false);
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const getQuestStatus = () => {
    axios.post(SERVER_URL+"/getqueststatus", {
      userID: window.localStorage.getItem("token")
    }).then(response => {
      const state = (response.data.currentQuestID!=null&&response.data.currentQuestID!=undefined)
      setQuestSelected(state)
    });
  }

  useEffect(() => getQuestStatus(), []);

  return (
    <div>
      {!questSelected ? (
        <QuestCardLoader/>
      ) : (
        <QuestCompletion/>
      )}
    </div>
  )
}

export default QuestDashboard
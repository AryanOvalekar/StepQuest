import React from 'react'
import { useState, useEffect } from 'react';
import Plaque from './Plaque'
import axios from "axios"

const TrophyRoom = () => {
  const SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const token = window.localStorage.getItem("token")

  const gold = {background:"linear-gradient(135deg, rgba(246,217,94,1) 0%, rgba(237,144,88,1) 100%)"}
  const silver = {background:"linear-gradient(135deg, rgba(213,213,213,1) 0%, rgba(122,122,122,1) 100%)"}
  const bronze = {background:"linear-gradient(135deg, rgba(221,136,55,1) 0%, rgba(103,64,25,1) 100%)"}
  const normal = {background:"rgb(231,231,231)"}

  const [idList, setIdList] = useState([]);
  const [bronzeList, setBronzeList] = useState([]);
  const [silverList, setSilverList] = useState([]);
  const [goldList, setGoldList] = useState([]);

  const getIdList = () => {
    axios.post(SERVER_URL+"/getuserstatus", {
      userID: token
    }).then(response => {
      const info = response.data
      setIdList(info.completedQuests)
      setBronzeList(info.bronzeQuests)
      setSilverList(info.silverQuests)
      setGoldList(info.goldQuests)
    })
  }

  useEffect(() => getIdList(), [])


  return (
    <body className='trophy-body'>
    <div className='plaquecontainer'>
        {goldList.map((id, index) =>
          <Plaque style = {gold} questID = {id}/>
        )}
        {silverList.map((id, index) =>
          <Plaque style = {silver} questID = {id}/>
        )}
        {bronzeList.map((id, index) =>
          <Plaque style = {bronze} questID = {id}/>
        )}
        {idList.map((id, index) =>
          <Plaque style = {normal} questID = {id}/>
        )}
    </div>
    </body>
  )
}

export default TrophyRoom
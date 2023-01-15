import React from 'react'
import "./QuestDisplay.css"
import { NavLink } from "react-router-dom";

const QuestTutorial = () => {
  return (
    <div>
      <img className="tutorial-img" src={require('../../Assets/quest-tutorial.jpg')} style={{ width: 700 }}/>
      <h3><br/>This is the format of the page that you get for each objective in a quest.<br/><br/>
      Finish the quest by doing the exercise given on each page!</h3>
    
      <NavLink to="/quests">
          <button className="continue-button">
              ONWARDS
          </button>
      </NavLink>
    </div>
  )
}

export default QuestTutorial
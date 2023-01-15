import React from 'react'
import "./QuestDisplay.css"

const QuestProgress = ( props ) => {
  return (
    <div>
        <p className='QuestDescription'>{props.criteriaType}</p>
        <div className='QuestDescription'>{props.progress}/{props.criteria}</div>
    </div>
  )
}

export default QuestProgress
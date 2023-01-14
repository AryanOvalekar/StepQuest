import React from 'react'

const QuestProgress = ( props ) => {
  return (
    <div>
        <p>{props.criteriaType}</p>
        <div>{props.progress}/{props.criteria}</div>
    </div>
  )
}

export default QuestProgress
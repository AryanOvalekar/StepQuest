import React from 'react'

const QuestProgress = ( props ) => {
  return (
    <div>
        <p>{props.criteriaType}</p>
        <div>{props.progress}/{props.criteria}</div>
        <button onClick={props.left}>-</button>
        <button onClick={props.right}>+</button>
    </div>
  )
}

export default QuestProgress
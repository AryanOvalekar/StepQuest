import React from 'react'
import "./QuestDisplay.css"

const QuestDisplay = ( props ) => {
    const imageURL = props.imageURL
    const description = props.description
  
    return (
    <div>
        <img className='QuestImage' src={imageURL}/>
        <p className='QuestDescription'>{description}</p>
    </div>
  )
}

export default QuestDisplay
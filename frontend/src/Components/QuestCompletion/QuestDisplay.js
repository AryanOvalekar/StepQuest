import React from 'react'
import "./QuestDisplay.css"

const QuestDisplay = ( props ) => {
    const description = props.description
  
    return (
        <div className='img-plus-desc'>
            <p className='QuestDescription'>{description}</p>
        </div>
  )
}

export default QuestDisplay
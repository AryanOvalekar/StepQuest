import React from 'react'
import "./QuestDisplay.css"

const QuestDisplay = ( props ) => {
    const description = props.description
  
    return (
        <div className='img-plus-desc'>
            <p className='QuestDescription' style={{ width: "100%", textAlign: "center" }}>{description}</p>
        </div>
  )
}

export default QuestDisplay
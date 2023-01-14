import React from 'react'
import "./QuestCard.css"

const QuestCard = ( props ) => {
    const title = props.title;
    const length = props.length;
    const difficulty = props.difficulty;
    const description = props.description;
    const imageURL = props.imageURL;
    const color = props.color

    return (
        <div className='cardbody' style={{backgroundColor: color,}}>
            <img className='cardimg'src={imageURL}/>
            <div className='cardcontent'>
                <h1 className='cardtitle'>{title}</h1>
                <h3 className='cardsubtitle'>Difficulty: {difficulty}</h3>
                <h3 className='cardsubtitle'>Length: {length}</h3>
                <p className='carddescription'>{description}</p>
            </div>
        </div>
    )
}

export default QuestCard
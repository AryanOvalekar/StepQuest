import React from 'react'
import "./QuestDisplay.css"

const QuestProgress = ( props ) => {

  const bar = (props.progress*100/props.criteria);

  const containerStyles = {
    height: 20,
    width: '80%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10
  }

  const fillerStyles = {
    height: '100%',
    width: `${bar}%`,
    backgroundColor: "#ee953b",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'black',
    fontWeight: 'normal',
  }

  return (
    <div>
      <p className="QuestDescription">{props.progress} / {props.criteria}</p>
      <p className="QuestDescription">{props.criteriaType}</p>
      <div className="buttonContainer">
        <button className="login-button" onClick={props.left}>-</button>
        <button className="login-button" onClick={props.right}>+</button>
      </div>
      <div className="bar-container" style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${bar}%`}</span>
        </div>
      </div>
    </div>
  );
}

export default QuestProgress
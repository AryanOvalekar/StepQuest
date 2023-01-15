import React from 'react'

const QuestProgress = ( props ) => {

  const bar = (props.progress*100/props.criteria);

  const containerStyles = {
    height: 20,
    width: '50%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${bar}%`,
    backgroundColor: "#00695c",
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  return (
    <div>
      <p>{props.progress} / {props.criteria}</p>
      <p>{props.criteriaType}</p>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${bar}%`}</span>
        </div>
      </div>
        <button onClick={props.left}>-</button>
        <button onClick={props.right}>+</button>
    </div>
  );
}

export default QuestProgress
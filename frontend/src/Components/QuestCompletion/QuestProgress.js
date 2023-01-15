import React from 'react'

const QuestProgress = ( props ) => {

  const progress = props.progress;

  const containerStyles = {
    height: 20,
    width: '50%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress}%`,
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
          <span style={labelStyles}>{`${progress}%`}</span>
        </div>
      </div>
    </div>
  );
}

export default QuestProgress
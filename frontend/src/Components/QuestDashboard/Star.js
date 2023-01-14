import React from 'react'

const Star = (props) => {
    const time = props.time;

  return (
    <div className="star-div">
        {(time===1) ? (
            <h3>1 Hour</h3>
        ) : (
            <h3>{time} Hours</h3>
        )}
    </div>
  )
}

export default Star
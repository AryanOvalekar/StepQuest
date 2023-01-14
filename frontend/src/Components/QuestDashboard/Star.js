import React from 'react'

const Star = (props) => {
    const time = props.time;
    const threestar = props.threestar;
    const twostar = props.twostar;
    const onestar = props.onestar;

  return (
    <div>
        {(threestar===1) ? (
            <h3>⭐⭐⭐1 Hour</h3>
        ) : (
            <h3>⭐⭐⭐{threestar} Hours</h3>
        )}
        {(twostar===1) ? (
            <h3>⭐⭐1 Hour</h3>
        ) : (
            <h3>⭐⭐{twostar} Hours</h3>
        )}
        {(onestar===1) ? (
            <h3>⭐1 Hour</h3>
        ) : (
            <h3>⭐{onestar} Hours</h3>
        )}
    </div>
  )
}

export default Star
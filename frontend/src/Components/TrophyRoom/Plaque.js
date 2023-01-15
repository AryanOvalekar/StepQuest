import React from 'react'
import "./Plaque.css"

const Plaque = (props) => {
  const gold = {background:"linear-gradient(135deg, rgba(246,217,94,1) 0%, rgba(237,144,88,1) 100%)"}
  const silver = {background:"linear-gradient(135deg, rgba(213,213,213,1) 0%, rgba(122,122,122,1) 100%)"}
  const bronze = {background:"linear-gradient(135deg, rgba(221,136,55,1) 0%, rgba(103,64,25,1) 100%)"}
  const normal = {background:"rgb(231,231,231)"}

  return (
    <div>
        <div className='plaque' style={gold}>
            <img></img>
        </div>
    </div>
  )
}

export default Plaque
import React from 'react'

function ReadMorebtn(props) {
  console.log("the value in the btn is :" + props.destination)
  return (
    <a className="brutalist-card__button brutalist-card__button--read" href={"/services/"+props.destination}> 
    Read More 
    </a>
  )
}

export default ReadMorebtn

import React from 'react'
import ReadMorebtn from './readMorebtn'
import { useState } from 'react'
import { MdOutlineDesignServices } from "react-icons/md";


function Card({children, title, bodyText}) {

    const [showFullDescription, setshowFullDescription] = useState(false);

    let description = bodyText;

    if(!showFullDescription){
        description = description.substring(0, 90) + '...';
    }

  return (

        <div className="brutalist-card">
        <div className="brutalist-card__header">
            <div className="brutalist-card__icon">
            <MdOutlineDesignServices />
            </div>
            <div className="brutalist-card__alert">{title}</div>
        </div>
        <div className="brutalist-card__message">
            {description}
            <br/>
            <button onClick={()=> setshowFullDescription((prevState)=>!prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{ showFullDescription? '  less' : '  More'}</button>
        </div>
        
        <div className="brutalist-card__actions">
            <ReadMorebtn/>
        </div>
        </div>
    
  )
}

export default Card

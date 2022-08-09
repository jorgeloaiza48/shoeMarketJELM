import React from 'react'
import "./card.css"
import { Link } from "react-router-dom"

const Card = ({ title, img, quantity, link }) => {
  

  return (
      <Link className='card-link card' to={`/${link}`} >
    
        <h2 className="card-title">{title}</h2>
        <img className='card-photo' src={img} alt="img" />
        <p className='card-quantity'>{quantity}</p>
   
      </Link>
  )
}

export default Card
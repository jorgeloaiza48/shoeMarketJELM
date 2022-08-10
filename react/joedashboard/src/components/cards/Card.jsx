import React from 'react'
import "./card.css"
import { Link } from "react-router-dom"

const Card = ({ title, img, quantity, link, loading }) => {
  const loadingc = loading


  return (
    <>
      <Link className='cardHome-link cardHome' to={`/${link}`} >
        <h2 className="cardHome-title">{title}</h2>
        {
          loadingc === false ?
            (
              <>

                <img className='cardHome-img' src={img} alt="img" />
                <p className='cardHome-quantity'>{quantity}</p>

              </>

            ) :
            (
              <div class="spinner-border text-danger loading" role="status">
                <span class="visually-hidden ">Loading...</span>
              </div>
            )


        }
      </Link>

    </>
  )
}

export default Card
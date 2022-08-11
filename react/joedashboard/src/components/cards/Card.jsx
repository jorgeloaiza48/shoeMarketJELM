import React from 'react'
import "./card.css"
import { Link } from "react-router-dom"

const Card = ({ title, img, quantity, link, loading,color }) => {
  const loadingc = loading
  const styleCard = {
    "border-bottom":`${color} 3px double`,
    "border-left":`${color} 3px double`
  }

  return (
    <>
      <Link className='cardHome-link cardHome' style={styleCard}  to={`/${link}`} >
        <h2 className="cardHome-title" style={{"color":`${color}`}}>{title}</h2>
        {
          loadingc === false ?
            (
              <>

                
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
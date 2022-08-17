import React from 'react'
import "./card.css"
import { Link } from "react-router-dom"

const Card = ({ title, img, quantity, link, loading,color }) => {
  const loadingc = loading
  const styleCard = {
    "borderBottom":`${color} 3px double`,
    "borderLeft":`${color} 3px double`
  }

  return (
    <>
      <Link className='cardHome-link cardHome' style={styleCard}  to={`/${link}`} >
        <h2 className="cardHome-title" >{title}</h2>
        {
          loadingc === false ?
            (
              <>

                <div className='d-flex div-card-btn'>

                <p className='cardHome-quantity'>{quantity}</p>

                {/* <button className="cardHome-btn">

                <Link className='cardHome-btn-link' to="/">Ver detalle</Link>

                </button> */}

                </div>

              </>

            ) :
            (
              <div className="spinner-border text-danger loading" role="status">
                <span className="visually-hidden ">Loading...</span>
              </div>
            )


        }
      </Link>

    </>
  )
}

export default Card
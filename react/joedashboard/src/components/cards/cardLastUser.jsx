import React from 'react'
import "./card.css"
import { Link } from "react-router-dom"


const CardLastUser = ({ title, img, name, link, loading, lastName, email, birth, address, color,rol }) => {
  const loadingc = loading
  const styleCard = {
    "borderBottom": `rgb(90 34 130) 5px double`,
    "borderLeft": `rgb(90 34 130) 5px double`
  }


  return (
    <>
      <div className='cardUser-container' style={styleCard} >
        <h2 className="cardUser-title" >{title}</h2>
        {
          loadingc === false ?
            (
              <>
              <div className='container-info'>


                <img className='cardUser-img' src={img} alt="img" />
                <p className='cardUser-info'>{name}</p>
                <p className='cardUser-info'>{email}</p>
                <p className='cardUser-info'>{birth}</p>
                <p className='cardUser-info'>{address}</p>
                <p className='cardUser-info'>{rol}</p>
                
              </div>
                {link ? (
                  <Link className='cardUser-link cardUser' to={`/${link}`}>
                    <button className='cardUser-btn'>Ver detalle</button>
                  </Link>
                ) : (
                <Link className='cardUser-link cardUser' to={`/users`}>
                <button className='cardUser-btn'>Listado</button>
              </Link>
              )}



              </>

            ) :
            (
              <div className="spinner-border text-danger loading" role="status">
                <span className="visually-hidden ">Loading...</span>
              </div>
            )


        }

      </div>

    </>
  )
}

export default CardLastUser
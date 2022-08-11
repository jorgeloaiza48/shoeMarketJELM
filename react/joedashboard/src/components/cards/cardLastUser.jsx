import React from 'react'
import "./card.css"
import { Link } from "react-router-dom"
import { borderBottom } from '@mui/system'

const CardLastUser = ({ title, img, name, link, loading,lastName,email,birth,address,color }) => {
  const loadingc = loading
  const styleCard = {
    "border-bottom":`${color} 5px double`,
    "border-left":`${color} 5px double`
  }


  return (
    <>
    <div className='cardUser-container' style={styleCard} >
        <h2 className="cardUser-title" style={{"color":`${color}`}}>{title}</h2>
        {
            loadingc === false ?
            (
                <>

                <img className='cardUser-img' src={img} alt="img" />
                <p className='cardUser-info'>{name}</p>
                <p className='cardUser-info'>{email}</p>
                <p className='cardUser-info'>{birth}</p>
                <p className='cardUser-info'>{address}</p>
                <Link className='cardUser-link cardUser' to={`/${link}`}>

                    <button className='cardUser-btn'>Ver detalle</button>
                </Link>
                
                 

              </>

            ) :
            (
                <div class="spinner-border text-danger loading" role="status">
                <span class="visually-hidden ">Loading...</span>
              </div>
            )

            
        }
      
        </div>

    </>
  )
}

export default CardLastUser
import React from 'react'
import "./card.css"
const CardCategory = ({ name, quantity, loading }) => {
  const loadingc = loading

  const styleCard = {
    "borderBottom":`rgb(90 34 130) 5px double`,
    "borderLeft":`rgb(90 34 130) 5px double`
  }


  return (

    <>

      {
        loadingc === false ?
          (
            <>
              <div className='cardCategory' style={styleCard}>

                <div className='div-card-btn'>
                  <h2 className="cardHome-title" >{name}</h2>
                  <p className='cardHome-quantity'>cantidad de articulos : {quantity} </p>
                </div>
              </div>

            </>

          ) :
          (
            <div className="spinner-border text-danger loading" role="status">
              <span className="visually-hidden ">Loading...</span>
            </div>
          )


      }




    </>
  )
}

export default CardCategory
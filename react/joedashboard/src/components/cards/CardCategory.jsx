import React from 'react'
import "./card.css"
const CardCategory = ({ name, quantity, loading }) => {
  const loadingc = loading
  let colors
  if (name === "Borcegos") {
    colors = "#a40f36"
  }
  if (name === "Bucaneras") {
    colors = "#9533b5"
  }
  if (name === "Guillerminas") {
    colors = "#dd7f47"
  }
  if (name === "Botas") {
    colors = "#476397"
  }
  if (name === "Gift-Card") {
    colors = "#936d19"
  }
  if (name === "Texanas") {
    colors = "#c19c9c"
  }
  const styleCard = {
    "borderBottom":`${colors} 5px double`,
    "borderLeft":`${colors} 5px double`
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
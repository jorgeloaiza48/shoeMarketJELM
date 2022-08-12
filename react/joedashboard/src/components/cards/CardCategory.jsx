 import React from 'react'
 
 const CardCategory = (name,quantity,loading) => {

   return (
     
      <>
      
        <h2 className="cardHome-title" >{name}</h2>
        {
          loading === false ?
            (
              <>

                <div className='d-flex div-card-btn'>

                <p className='cardHome-quantity'>{name}</p>
                <p className='cardHome-quantity'>{quantity}</p>

               

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
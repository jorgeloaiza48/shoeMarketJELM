import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import CardCategory from '../../components/cards/CardCategory'
import "./productCategory.css"
import useAllProducts from "../../Hooks/useAllProducts"


const ProductCategory = () => {
  const { dataProducts } = useAllProducts("http://localhost:4000/api/products")
  const { countByCategory } = !!dataProducts && dataProducts;
  const [categoryProd, setCategoryProd] = useState("")

<<<<<<< HEAD
 
=======

  useEffect(() => {

    if (countByCategory) {
      setCategoryProd(countByCategory)
    }
  }, [countByCategory])

  
  




  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        {
          Object.entries(categoryProd).map(([key, value]) => {
            return (
              <div key={key} className="cards-container">
                <CardCategory
                  name={key}
                  quantity={value}
                  loading={true}
                />
              </div>

            )
          })


        }
>>>>>>> 1921f049ae7bfd89c176c9d53e8e44df95377aa9

      </div>
    </div>
  )
}

export default ProductCategory
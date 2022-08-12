import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import CardCategory from '../../components/cards/CardCategory'
import "./productCategory.css"
import useAllProducts from "../../Hooks/useAllProducts"


const ProductCategory = () => {
  const { dataProducts, isLoadingProducts } = useAllProducts("http://localhost:4000/api/products")
  const { countByCategory } = !!dataProducts && dataProducts;
  const [categoryProd, setCategoryProd] = useState("")
  const [qcategoryProd, setqcategoryProd] = useState("")

 
 








return (
  <div className='home'>
    <SideBar />
    <div className="homeContainer">
      <NavBar />
      {
        countByCategory.map((categoria, i) => {
          return (
            <div key={i} className="cards-container">
              <CardCategory 
              name={categoria}
              
              />
            </div>

          )
        })


      }

    </div>
  </div>
)
}

export default ProductCategory
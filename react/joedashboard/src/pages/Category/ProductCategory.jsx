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

//dasdasdsadasdas
  useEffect(() => {

    if (countByCategory) {
      setCategoryProd(countByCategory)
    }
  }, [dataProducts])



  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className='containerAllCards'>

          {
            Object.entries(categoryProd).map(([key, value,color]) => {
              return (
                <div key={key} className="card-category-container">
                  <CardCategory
                    name={key}
                    quantity={value}
                    loading={isLoadingProducts}
                    color={color}                                        
                    

                  />
                </div>

              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default ProductCategory
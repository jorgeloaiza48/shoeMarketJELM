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


  useEffect(() => {

    if (countByCategory) {
      setCategoryProd(countByCategory)
    }


  }, [countByCategory])
  console.log(Object.entries(categoryProd))












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

      </div>
    </div>
  )
}

export default ProductCategory
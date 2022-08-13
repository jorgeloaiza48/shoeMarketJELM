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

<<<<<<< HEAD
 
=======

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

<<<<<<< HEAD
        }
>>>>>>> 1921f049ae7bfd89c176c9d53e8e44df95377aa9

=======
              )
            })
          }
        </div>
>>>>>>> 6207672446f6507d2eba657653970e48fd23b3da
      </div>
    </div>
  )
}

export default ProductCategory
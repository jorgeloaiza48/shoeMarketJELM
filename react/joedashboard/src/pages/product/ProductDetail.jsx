import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import "./lastProduct.css"
import useOneProduct from "../../Hooks/useOneProduct"
import { useParams,Navigate } from 'react-router-dom'
import CardLastProduct from '../../components/cards/CardLastProduct'


const ProductDetail = () => {
  const { productid } = useParams()


  const { dataProduct, isLoadingProduct } = useOneProduct(`https://shoemarket.herokuapp.com/api/products/detail/${productid}`)
  const { product } = !!dataProduct && dataProduct;
  const [producto, setProducto] = useState("")
 
  // useEffect(() => {
  //   if (!dataProduct) {
  //     return (
  //       <Navigate to="/" />
  //     )
  //   }
  // }, [dataProduct])
  
  useEffect(() => {
    
    if (dataProduct) {
      setProducto(product)
      
    }
    
    
  }, [product, dataProduct])
  
 
    
  const { id, name, description, img, category } = producto

  

  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className='lastProduct'>
          <CardLastProduct
            title={name}
            loading={isLoadingProduct}
            img={img}
            name={`Nombre : ${name}`}
            color="#476397"
            description={`Descripcion : ${description}`}
            categoria={`Categoria : ${category}`}


          />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
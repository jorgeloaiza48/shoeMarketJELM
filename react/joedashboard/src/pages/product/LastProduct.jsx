import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import "./lastProduct.css"
import useAllProducts from "../../Hooks/useAllProducts"
import CardLastProduct from '../../components/cards/CardLastProduct'

const LastProduct = () => {
  const { dataProducts, isLoadingProducts } = useAllProducts("http://localhost:4000/api/products")
  const { products, countByCategory } = !!dataProducts && dataProducts;
  const [lastProduct, setlastProduct] = useState("")
  const [ImglastProduct, setImglastProduct] = useState("")
  const urlImgProducto = "http://localhost:4000/img/products/"
  const { description, name } = lastProduct
  const [categoryProd, setCategoryProd] = useState("")
 



  useEffect(() => {

    if (dataProducts) {
      setlastProduct(products[products.length - 1])
      setImglastProduct(urlImgProducto + lastProduct.img)

    }


  }, [products, dataProducts, lastProduct.img, lastProduct])
  useEffect(() => {

    if (lastProduct) {
      setCategoryProd(lastProduct.categorias.name)

    }


  }, [lastProduct])



  return (

    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className='lastProduct'>
          <CardLastProduct
            title="Ultimo producto creado"
            loading={isLoadingProducts}
            img={ImglastProduct}
            name={`Nombre : ${name}`}
            color="#476397"
            description={`Descripcion : ${description}`}
            categoria={`Categoria : ${categoryProd}`}


          />
        </div>
      </div>
    </div>
  )
}

export default LastProduct
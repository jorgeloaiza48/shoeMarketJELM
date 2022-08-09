import React, { useEffect,useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Card from '../../components/cards/Card'
import "./home.css"
import useAllProducts from "../../helpers/useAllProducts"


const Home = () => {
  const { dataProducts, isLoadingProducts } = useAllProducts("http://localhost:4000/api/products")
  const { count, countByCategory, products } = !!dataProducts && dataProducts;
  
  const [lastProduct, setlastProduct] = useState("")

  const [ImglastProduct, setImglastProduct] = useState("")
 


useEffect(() => {

  if (dataProducts) {
    setlastProduct(products[products.length - 1])
    setImglastProduct(lastProduct.img)
  }
  
  console.log(lastProduct)
  console.log(ImglastProduct)
}, [])





  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="cards-container">
          <Card title="Productos" quantity={`Cantidad de productos ${count}`}link="products" />
          <Card title="Categorias de productos" quantity={count} link="products/category" />
          <Card title="Ultimo producto creado" img={ImglastProduct} link="products/lastProduct" />
          <Card title="Usuarios" quantity={count} link="users" />
          <Card title="Categorias de usuarios" quantity={`Cantidad de Usuarios ${countUsers}`} link="users/category" />
          <Card title="Ultimo usuario creado" quantity={count} link="users/lastUser" />

        </div>
      </div>

    </div>
  )
}

export default Home
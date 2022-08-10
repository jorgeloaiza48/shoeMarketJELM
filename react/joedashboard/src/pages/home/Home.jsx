import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Card from '../../components/cards/Card'
import "./home.css"
import useAllProducts from "../../Hooks/useAllProducts"
import useAllUsers from '../../Hooks/useAllUsers'
import imgProducts from "./imgProducts.jpg"
import imgUsers from "./imgUsers.jpg"
import imgCategory from "./imgCategory.jpg"
import crearProducto from "./crearProducto.jpg"

const Home = () => {
  const { dataProducts, isLoadingProducts } = useAllProducts("http://localhost:4000/api/products")
  const { countProduts, products, countByCategory } = !!dataProducts && dataProducts;
  const [lastProduct, setlastProduct] = useState("")
  const [ImglastProduct, setImglastProduct] = useState("")
  const urlImgProducto = "http://localhost:4000/img/products/"
  
  
  const { dataUsers, isLoadingUsers } = useAllUsers("http://localhost:4000/api/users")
  const { count, users } = !!dataUsers && dataUsers;
  const [lastUser, setlastUser] = useState("")
  const [ImglasUser, setImglasUser] = useState("")
  const urlUserImage = "http://localhost:4000/img/user/"
  const { first_name, last_name, image } = lastUser

  const [qcategoryProd, setqcategoryProd] = useState("")
  





  useEffect(() => {

    if (dataUsers) {
      setlastUser(users[users.length - 1])
      setImglasUser(urlUserImage + image)

    }


  }, [dataUsers,users,lastUser.img,image])




  useEffect(() => {

    if (dataProducts) {
      setlastProduct(products[products.length - 1])
      setImglastProduct(urlImgProducto + lastProduct.img)
    }


  }, [products,dataProducts,lastProduct.img])

  useEffect(() => {

    if (dataProducts) {
     const obj = Object.keys(countByCategory)
      setqcategoryProd(obj.length)
    }


  }, [dataProducts,countByCategory])





  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="cards-container">
          <Card
            title="Productos"
            loading={isLoadingProducts}
            quantity={`Cantidad de productos ${countProduts}`}
            link="products"
            img={imgProducts}
          />
          <Card
            title="Categorias de productos"
            loading={isLoadingProducts}
            link="products/category"
            quantity={`Cantidad de categorias ${qcategoryProd}`}
            img={imgCategory}  
          />
            <Card
              title="Crear producto"
              link="users/category"
              loading={isLoadingProducts}
              img={crearProducto}
              quantity={"Formulario de creacion"}

            />
          <Card
            title="Ultimo producto creado"
            loading={isLoadingProducts}
            img={ImglastProduct}
            link="products/lastProduct"
            quantity={lastProduct.name}

          />
          <Card title="Usuarios"
            loading={isLoadingUsers}
            quantity={`Cantidad de Usuarios ${count}`}
            link="users"
            img={imgUsers}
            
          />
          <Card title="Ultimo usuario creado"
            loading={isLoadingUsers}
            quantity={`${first_name} ${last_name} `}
            link="users/lastUser"
            img={ImglasUser}
             
          />

        </div>
      </div>

    </div>
  )
}

export default Home
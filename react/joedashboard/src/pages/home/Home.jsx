import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Card from '../../components/cards/Card'
import "./home.css"
import useAllProducts from "../../Hooks/useAllProducts"
import useAllUsers from '../../Hooks/useAllUsers'
import CardLastUser from '../../components/cards/cardLastUser'


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
  const { first_name, last_name, image,email,adress,date_of_birth } = lastUser

  const [qcategoryProd, setqcategoryProd] = useState("")






  useEffect(() => {

    if (dataUsers) {
      setlastUser(users[users.length - 1])
      setImglasUser(urlUserImage + image)

    }


  }, [dataUsers, users, lastUser.img, image])




  useEffect(() => {

    if (dataProducts) {
      setlastProduct(products[products.length - 1])
      setImglastProduct(urlImgProducto + lastProduct.img)
    }


  }, [products, dataProducts, lastProduct.img])

  useEffect(() => {

    if (dataProducts) {
      const obj = Object.keys(countByCategory)
      setqcategoryProd(obj.length)
    }


  }, [dataProducts, countByCategory])





  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="cards-container">
          <Card
            title="Productos activos"
            loading={isLoadingProducts}
            quantity={countProduts}
            link="products"
            color="#a40f36"

          />
          <Card
            title="Categorias"
            loading={isLoadingProducts}
            link="products/category"
            quantity={qcategoryProd}
            color="#9533b5"

          />

          <Card title="Usuarios activos"
            loading={isLoadingUsers}
            quantity={count}
            link="users"
            color="#dd7f47"


          />
        </div>
        <div className='last-container'>

          <CardLastUser title="Ultimo usuario creado"
            loading={isLoadingUsers}
            link="users/lastUser"
            img={ImglasUser}
            name={`${first_name} ${last_name} `}
            email={email}
            birth={date_of_birth}
            address={adress}
            color= "#936d19"
            

          />
          <CardLastUser
              title="Ultimo producto creado"
              loading={isLoadingProducts}
              img={ImglastProduct}
              link="products/lastProduct"
              quantity={lastProduct.name}
              color="#476397"
              
            />

        </div>
      </div>

    </div>
  )
}

export default Home
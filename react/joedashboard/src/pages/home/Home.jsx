import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import Card from '../../components/cards/Card'
import "./home.css"
import useAllProducts from "../../Hooks/useAllProducts"
import useAllUsers from '../../Hooks/useAllUsers'
import CardLastUser from '../../components/cards/cardLastUser'
import CardLastProduct from '../../components/cards/CardLastProduct'



const Home = () => {
  const { dataProducts, isLoadingProducts } = useAllProducts("https://shoemarket.herokuapp.com/api/products")
  const { countProduts, products, countByCategory } = !!dataProducts && dataProducts;
  const [lastProduct, setlastProduct] = useState("")
  const [ImglastProduct, setImglastProduct] = useState("")
  const urlImgProducto = "https://shoemarket.herokuapp.com/img/products/"
  const { description, name } = lastProduct
  const [categoryProd, setCategoryProd] = useState("")
  const [qcategoryProd, setqcategoryProd] = useState("")


  const { dataUsers, isLoadingUsers } = useAllUsers("https://shoemarket.herokuapp.com/api/users")
  const { count, users } = !!dataUsers && dataUsers;
  const [lastUser, setlastUser] = useState("")
  const [ImglasUser, setImglasUser] = useState("")
  const urlUserImage = "https://shoemarket.herokuapp.com/img/user/"
  const { first_name, last_name, image, email, adress, date_of_birth } = lastUser
  const [rolUser, setRolUser] = useState("")


  useEffect(() => {

    if (dataUsers) {
      setlastUser(users[users.length - 1])
      setImglasUser(urlUserImage + image)

    }


  }, [dataUsers, users, lastUser.img, image])

  useEffect(() => {

    if (lastUser) {
      setRolUser(lastUser.roles.name)

    }

  },[lastUser])




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
            img={image}
            name={`Nombre : ${first_name} ${last_name} `}
            email={`Correo : ${email}`}
            birth={`Fecha de Nacimiento : ${date_of_birth}`}
            address={`Direccion : ${adress}`}
            color="#936d19"
            rol={`Rol : ${rolUser}`}


          />
          <CardLastProduct
            title="Ultimo producto creado"
            loading={isLoadingProducts}
            img={ImglastProduct}
            link="products/lastProduct"
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

export default Home
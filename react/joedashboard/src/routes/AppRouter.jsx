import React from 'react'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Home from '../pages/home/Home'
import ListProducts from '../pages/list/ListProducts'
import ProductCategory from '../pages/Category/ProductCategory'
import LastProduct from '../pages/product/LastProduct'

import ListUsers from '../pages/list/ListUsers'

import LastUser from '../pages/user/LastUser'



import Create from '../pages/new/Create'
import Login from '../pages/login/Login'



const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />


           <Route path="/products" element={<ListProducts />} />
           <Route path="/products/category" element={<ProductCategory />} />
           <Route path="/products/lastProduct" element={<LastProduct />} />



           <Route path="/users" element={<ListUsers />} />
          
           <Route path="/users/lastUser" element={<LastUser />} />



           <Route path="/login" element={<Login />} />
           <Route path="/new" element={<Create />} />




        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default AppRouter
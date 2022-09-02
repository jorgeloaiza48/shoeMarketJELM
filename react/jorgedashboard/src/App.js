import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./app.css"
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <BrowserRouter >
     <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={ <Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
          <Route path="/user/:userId" element={<User/>}></Route>
          <Route path="/newUser" element={<NewUser/>}></Route>
          <Route path="/products" element={<ProductList/>}></Route>
          <Route path="/product/:productId" element={<ProductList/>}></Route>
          <Route path="/newproduct" element={<ProductList/>}></Route>
          
        </Routes>
        
      </div>

    </BrowserRouter>
  );
}

export default App;

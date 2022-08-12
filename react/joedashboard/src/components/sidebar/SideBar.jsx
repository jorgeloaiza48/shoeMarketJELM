import React from 'react'
import "./sideBar.css"
import logo from "./LOGO.png"
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
import { GiConverseShoe } from "react-icons/gi";
import { BiUserCheck } from "react-icons/bi";
import { Link } from 'react-router-dom';





const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="top"><img className='logo' src={logo} alt="" /></div>
      
      <div className="center">
        <ul>
            <p className="title">Main</p>
          <li>
            <MdDashboard className='sideBar-icon' />
            <Link className='sideBar-link' to="/">
            <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">Usuarios</p>
          <li>
            <FaUsers className='sideBar-icon' />
          <Link className='sideBar-link' to="/users">
            <span>Usuarios registrados</span>
          </Link>
            
          </li>
          
          <li>
            <BiUserCheck className='sideBar-icon' />
            <Link className='sideBar-link' to="/users/lastUser">

            <span>Ultimo Usuario Creado</span>
            </Link>
          </li>
          <p className="title">Productos</p>
          <li>
            
            <FaProductHunt className='sideBar-icon' />
            <Link className='sideBar-link' to="/products">

            <span>Productos Activos</span>
            </Link>
          </li>
          <li>
            <DiCssdeck className='sideBar-icon' />
            <Link className='sideBar-link' to="/products/category">
            <span>Categorias</span>
            </Link>
          </li>
          <li>
            <GiConverseShoe className='sideBar-icon' />
            <Link className='sideBar-link' to="/products/lastProduct">
            <span>Ultimo Producto Creado</span>
            </Link>
          </li>
          
          
          

        </ul>
      </div>
      
    </div>
  )
}

export default SideBar
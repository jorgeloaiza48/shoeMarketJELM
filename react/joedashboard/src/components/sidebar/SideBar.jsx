import React from 'react'
import "./sideBar.css"
import logo from "./LOGO2.jpg"
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
            <Link to="/">
            <span>Dashboard</span>
            </Link>
          </li>
          <p className="title">Usuarios</p>
          <li>
            <FaUsers className='sideBar-icon' />
            <span>Usuarios registrados</span>
          </li>
          <li>
            <DiCssdeck className='sideBar-icon' />
            <span>Categorias</span>
          </li>
          <li>
            <BiUserCheck className='sideBar-icon' />
            <span>Ultimo Usuario Creado</span>
          </li>
          <p className="title">Productos</p>
          <li>
            
            <FaProductHunt className='sideBar-icon' />
            <span>Productos Activos</span>
          </li>
          <li>
            <DiCssdeck className='sideBar-icon' />
            <span>Categorias</span>
          </li>
          <li>
            <GiConverseShoe className='sideBar-icon' />
            <span>Ultimo Producto Creado</span>
          </li>
          
          
          

        </ul>
      </div>
      <div className="sideBar-bottom">
        <div className="colorOption dark"></div>
        <div className="colorOption light"></div>
      </div>



    </div>
  )
}

export default SideBar
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
      <Link to="/">
        <div className="top">
          <img className='logo' src={logo} alt="" />
        </div>
      </Link>

      <div className="center">
        <ul>
          <p className="title">Main</p>
          <Link className='sideBar-link' to="/">
            <li>
              <MdDashboard className='sideBar-icon' />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Usuarios</p>
          <Link className='sideBar-link' to="/users">
            <li>
              <FaUsers className='sideBar-icon' />
              <span>Usuarios registrados</span>

            </li>
          </Link>

          <Link className='sideBar-link' to="/users/lastUser">
            <li>
              <BiUserCheck className='sideBar-icon' />

              <span>Ultimo Usuario Creado</span>
            </li>
          </Link>
          <p className="title">Productos</p>
          <Link className='sideBar-link' to="/products">
            <li>

              <FaProductHunt className='sideBar-icon' />

              <span>Productos Activos</span>
            </li>
          </Link>
          <Link className='sideBar-link' to="/products/category">
            <li>
              <DiCssdeck className='sideBar-icon' />
              <span>Categorias</span>
            </li>
          </Link>
          <Link className='sideBar-link' to="/products/lastProduct">
            <li>
              <GiConverseShoe className='sideBar-icon' />
              <span>Ultimo Producto Creado</span>
            </li>
          </Link>




        </ul>
      </div>

    </div>
  )
}

export default SideBar
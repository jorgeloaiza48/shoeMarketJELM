import React from 'react'
import "./navBar.css"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


const NavBar = () => {
 
 
  return (
    
      <div className="navbar">
        <div className="wrapper">
          <div className='navBar-title'>DashBoard Shoe Market</div>
          <div className="items">

          <div className='item'>
            <MdOutlineDarkMode className='navbar-icon' />
          </div>
          <div className='item'>
            <MdDarkMode className='navbar-icon' />

          </div>
          </div>

        </div>
      </div>
    
  )
}

export default NavBar
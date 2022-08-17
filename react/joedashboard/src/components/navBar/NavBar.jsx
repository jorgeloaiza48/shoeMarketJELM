import React from 'react'
import "./navBar.css"
import "../sidebar/sideBar.css"
// import { MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";




const NavBar = () => {

 const side = document.querySelector(".sideBar")

  function showSideBar(event) {
   side.classList.add("show")
   side.classList.remove("none")
    
  }
 
 
  return (
    
      <div className="navbar">
        <div className="wrapper">
          <AiOutlineMenu
          className='burguer-menu'
          onClick={showSideBar}
           />
          <div className='navBar-title'>DashBoard Shoe Market</div>
          <div className="items">

          
          </div>

        </div>
      </div>
    
  )
}

export default NavBar
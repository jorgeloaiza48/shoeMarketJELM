import React, { useState } from 'react'
import "./navBar.css"
import "../sidebar/sideBar.css"
// import { MdOutlineDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';


adasdasdasdasd



const NavBar = () => {



  const [btn, setBtn] = useState(false)
  const sideBar = document.querySelector(".sideBar")


  if(sideBar != null){

    if (btn === true) {
      sideBar.classList.add("show")
      sideBar.classList.remove("none")
  
    } else {
      sideBar.classList.add("none")
      sideBar.classList.remove("show")
    }
  }






  function showSideBar(event) {
    if (btn === true) {
      setBtn(false)
    } else {
      setBtn(true)
    }



  }


  return (

    <div className="navbar">
      <div className="wrapper">
        <AiOutlineMenu
          className='burguer-menu'
          onClick={showSideBar}
        />

        <Link
          to="/"
          className='navBar-link'
        >

          <div className='navBar-title'>DashBoard Shoe Market</div>
        </Link>


      </div>
    </div>

  )
}

export default NavBar
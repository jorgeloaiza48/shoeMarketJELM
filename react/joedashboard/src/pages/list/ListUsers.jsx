import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'


const ListUsers = () => {
  return (
    <div>
      <div className='home'>
      <SideBar />
      <div className='homeContainer'>
        <NavBar />
    </div>
    </div>
    </div>
  )
}

export default ListUsers
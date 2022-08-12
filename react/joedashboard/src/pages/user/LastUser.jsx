import React, { useEffect, useState } from 'react'
import NavBar from '../../components/navBar/NavBar'
import SideBar from '../../components/sidebar/SideBar'
import useAllUsers from '../../Hooks/useAllUsers'
import CardLastUser from '../../components/cards/cardLastUser'
import "./lastUser.css"


const LastUser = () => {
  const { dataUsers, isLoadingUsers } = useAllUsers("http://localhost:4000/api/users")
  const {  users } = !!dataUsers && dataUsers;
  const [lastUser, setlastUser] = useState("")
  const [ImglasUser, setImglasUser] = useState("")
  const urlUserImage = "http://localhost:4000/img/user/"
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

  return (
    <div className='home'>
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className='lastUser'>
        <CardLastUser title="Ultimo usuario creado"
            loading={isLoadingUsers}
            img={ImglasUser}
            name={`Nombre : ${first_name} ${last_name} `}
            email={`Correo : ${email}`}
            birth={`Fecha de Nacimiento : ${date_of_birth}`}
            address={`Direccion : ${adress}`}
            color= "#936d19"
            rol={`Rol : ${rolUser}`}
            

          />

        </div>




      </div>
    </div>
  )
}

export default LastUser
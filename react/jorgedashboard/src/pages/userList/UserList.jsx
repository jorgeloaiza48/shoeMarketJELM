import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
//import { response } from "express";
//import { render } from "@testing-library/react";
import useAllUsers from "../../Hooks/useAllUsers";

import { useState } from "react";
import { useEffect } from "react";



export default function UserList() {

  


  const { dataUsers} = useAllUsers("http://localhost:4000/api/users")
  const { users } = !!dataUsers && dataUsers;
  const [arrayUsers, setArrayUsers] = useState("")
 
 

 

  useEffect(() => {

    if (dataUsers) {
      setArrayUsers(users)
    }

  }, [dataUsers, users])

  




  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user', headerName: 'First Name', width: 200, renderCell: (params) => {
        return (
          <div className="userListuser">
            <img className="userListImg" src={params.row.image} alt="" />
            {params.row.first_name}
          </div>
        )
      }
    },
    { field: 'last_name', headerName: 'Last Name', width: 180 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'status', headerName: 'Status', width: 120 },
    {
      field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutline className="userListDelete" />
          </>
        )
      }
    },
  ];


//  const { dataUsers, isLoadingUsers } = useAllUsers("http://localhost:4000/api/users")
//  const { users } = !!dataUsers && dataUsers;
//  console.log(users)
  

  
return (
<div className="userList"  ><DataGrid  rows={users} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection
 /></div>  
)//return
  


  //   let users = [
  //     {
  //         "id": 3,
  //         "first_name": "Joel nicolas",
  //         "last_name": "Casa Marquez",
  //         "email": "joeecasa@gmail.com",
  //         "image": "photo-1659221808835.jpeg",
  //         "status": "Activo",
  //         "createdAt": "2022-07-12T13:39:50.000Z",
  //         "updatedAt": "2022-07-31T12:57:52.000Z",
  //         "detail": "/api/users/3"
  //     },
  //     {
  //         "id": 4,
  //         "first_name": "Jorge Loaiza",
  //         "last_name": "Archivaldo",
  //         "email": "jelm48@misena.edu.co",
  //         "image": "photo-1659220501642.jpg",
  //         "status": "Activo",
  //         "createdAt": "2022-07-12T15:08:52.000Z",
  //         "updatedAt": "2022-07-30T22:49:16.000Z",
  //         "detail": "/api/users/4"
  //     },
  //     {
  //         "id": 23,
  //         "first_name": "Maximiliano",
  //         "last_name": "Villa",
  //         "email": "maxi@gmail.com",
  //         "image": "photo-1659221789590.jpg",
  //         "status": "Activo",
  //         "createdAt": "2022-07-18T21:59:57.000Z",
  //         "updatedAt": "2022-07-31T00:26:03.000Z",
  //         "detail": "/api/users/23"
  //     },
  //     {
  //         "id": 24,
  //         "first_name": "joel",
  //         "last_name": "casa",
  //         "email": "asda@gmail.com",
  //         "image": "photo-1659221846189.jpg",
  //         "status": "Inactivo",
  //         "createdAt": "2022-07-18T22:03:21.000Z",
  //         "updatedAt": "2022-07-30T22:57:26.000Z",
  //         "detail": "/api/users/24"
  //     },
  //     {
  //         "id": 25,
  //         "first_name": "Sindi Entes",
  //         "last_name": "Toro",
  //         "email": "sindi@misena.edu.co",
  //         "image": "photo-1659221861032.jpg",
  //         "status": "Inactivo",
  //         "createdAt": "2022-07-18T22:10:45.000Z",
  //         "updatedAt": "2022-07-30T22:57:41.000Z",
  //         "detail": "/api/users/25"
  //     },
  //     {
  //         "id": 26,
  //         "first_name": "Armando Casas",
  //         "last_name": "casas de bareque",
  //         "email": "armando@misena.edu.co",
  //         "image": "photo-1659221826724.jpg",
  //         "status": "Activo",
  //         "createdAt": "2022-07-19T13:26:43.000Z",
  //         "updatedAt": "2022-07-30T22:57:06.000Z",
  //         "detail": "/api/users/26"
  //     },
  //     {
  //         "id": 53,
  //         "first_name": "Ernesto ",
  //         "last_name": "Pérez",
  //         "email": "frailejon@gmail.com",
  //         "image": "photo-1659454625923.jpg",
  //         "status": "Inactivo",
  //         "createdAt": "2022-07-30T23:51:09.000Z",
  //         "updatedAt": "2022-08-02T15:37:05.000Z",
  //         "detail": "/api/users/53"
  //     }
  // ]



  //let  usersapi = useAllUsers("http://localhost:4000/api/users") 

  // let users = fetch('http://localhost:4000/api/users')


  //let users = Object.entries(datausers)
  //let users = JSON.parse(usersapi)

  //let  users = !!datausers && datausers;

  //users.map(usuario => {
  //console.log(usuario)
  //.then(users => {




  return (
    
    <div className="userList"  >
      <DataGrid
        rows={{}} disableSelectionOnClick
        columns={columns} pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
  //return
  //}) //map
  //})

}

import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { arrayUsers } from "../../dummyData";
import { Link } from "react-router-dom";
//import { response } from "express";
//import { render } from "@testing-library/react";
import useAllUsers from "../../Hooks/useAllUsers";
import { useState } from "react";
import { useEffect } from "react";


export default function UserList() {

  const [data,setData] = useState(arrayUsers)
  const handleDelete = (id)=>{
    setData(data.filter(item => item.id !== id))
  }

  // const { dataUsers } = useAllUsers("http://localhost:4000/api/users")
  // const { users } = !!dataUsers && dataUsers;
  // const [arrayUsers, setArrayUsers] = useState("")

  // useEffect(() => {
  //   if (dataUsers) {
  //     setArrayUsers(users)
  //   }

  // }, [users,dataUsers])

  ///////////Columnas de la tabla///////////////////

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
          <Link to={"/user/"+ params.row.id}> 
            <button className="userListEdit">Edit</button>
          </Link> 
            <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    },
  ];


//****renderización de la tabla*** */
  return (    
    <div className="userList"  >
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection
      />
    </div>
  )//return


}

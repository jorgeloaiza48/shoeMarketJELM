import { useState } from "react";
import { useEffect } from "react";
import "./list.css"
import useAllUsers from "../../Hooks/useAllUsers";
import SideBar from '../../components/sidebar/SideBar';
import NavBar from '../../components/navBar/NavBar';
import { DataGrid } from '@mui/x-data-grid';



export default function UserList() {
  const { dataUsers } = useAllUsers("http://localhost:4000/api/users")
  const { users } = !!dataUsers && dataUsers;
  const [arrayUsers, setArrayUsers] = useState("")

  useEffect(() => {
    if (dataUsers) {
      setArrayUsers(users)
    }

  }, [users,dataUsers])

 




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
      field: 'action', headerName: 'Action', width: 150, renderCell: () => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <button className="userListDelete">Borrar</button>
          </>
        )
      }
    },
  ];







  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="list-container"  >
          <DataGrid
           rows={arrayUsers} disableSelectionOnClick
           columns={columns} pageSize={10}
           rowsPerPageOptions={[1]}
          />
        </div>
      </div>
    </div>


  )
}









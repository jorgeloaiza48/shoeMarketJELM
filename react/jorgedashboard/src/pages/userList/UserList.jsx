import "./userList.css"
import { DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell:(params)=>{
            return(
            <div className="userListuser">
                <img className="userListImg" src={params.row.avatar} alt=""/>
                {params.row.username}
                </div>
                )
            }},
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status',headerName: 'Status',  width: 120 },
        { field: 'transaction',headerName: 'Transaction', width: 260},
        { field: 'action',headerName: 'Action', width: 150, renderCell:(params)=>{
            return (
                <>
                <button className="userListEdit">Edit</button>
                <DeleteOutline className="userListDelete"/>
                </>
            )
        }},
      ];
      
      const rows = [
        { id: 1, 
          username: 'Jon', 
          avatar: "photo-1659221789590.jpg",         
          email: "hola@gmail.com",
          status: "active",
          transaction: "$120.000"
        },
        { id: 2, 
            username: 'Jon', 
            avatar: 'photo-1659221789590.jpg',           
            email: "hola@gmail.com",
            status: "active",
            transaction: "$120.000"
          },
          { id: 3, 
            username: 'Jon', 
            avatar: 'photo-1659221789590.jpg',            
            email: "hola@gmail.com",
            status: "active",
            transaction: "$120.000"
          },
          { id: 4, 
            username: 'Jon', 
            avatar: 'photo-1659221789590.jpg',            
            email: "hola@gmail.com",
            status: "active",
            transaction: "$120.000"
          },
          { id: 5, 
            username: 'Jon', 
            avatar: 'photo-1659221789590.jpg',            
            email: "hola@gmail.com",
            status: "active",
            transaction: "$120.000"
          },
          { id: 6, 
            username: 'Jon', 
            avatar: 'photo-1659221789590.jpg',            
            email: "hola@gmail.com",
            status: "active",
            transaction: "$120.000"
          },
      ];

  return (
    <div className="userList"><DataGrid rows={rows} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection
  /></div>
  )
}

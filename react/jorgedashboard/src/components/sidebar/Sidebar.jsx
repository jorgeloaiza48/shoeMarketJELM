import React from 'react'
import "./sidebar.css"
import { LineStyle,Timeline,TrendingUp,Person,Inventory,Paid,BarChart,Email,Feedback,Chat,ManageAccounts,TableChart} from '@mui/icons-material';

function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className='sidebarTitle'>Dasboard</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem active">
                    <LineStyle className="sidebarIcon"/>
                    home
                </li>
                <li className="sidebarListItem">
                    <Timeline className="sidebarIcon"/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp className="sidebarIcon"/>
                    Sales
                </li>
            </ul>
            <h3 className='sidebarTitle'>Quick Menu</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem active">
                    <Person />
                    Users
                </li>
                <li className="sidebarListItem">
                    <Inventory />
                    Products
                </li>
                <li className="sidebarListItem">
                    <Paid />
                    Transactions
                </li>
                <li className="sidebarListItem">
                    <BarChart />
                    Reports
                </li>
            </ul>
            <h3 className='sidebarTitle'>Notifications</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem active">
                    <Email />
                   Mail
                </li>
                <li className="sidebarListItem">
                    <Feedback />
                    Feedback
                </li>
                <li className="sidebarListItem">
                    <Chat />
                    Messages
                </li>
            </ul>
            <h3 className='sidebarTitle'>Staff</h3>
            <ul className='sidebarList'>
                <li className="sidebarListItem active">
                    <ManageAccounts />
                    Manage
                </li>
                <li className="sidebarListItem">
                    <TableChart />
                    Reports
                </li>               
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Sidebar
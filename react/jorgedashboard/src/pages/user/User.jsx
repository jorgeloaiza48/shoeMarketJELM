import { Publish,CalendarToday, PermIdentity, PhoneAndroid, MailOutline, LocationSearching } from '@mui/icons-material'
import React from 'react'
import "./user.css"

export default function User() {
  return (
    <div className="user">
       <div className="userTitleContainer">
            <h1 className="userTtitle">Edit user</h1>
            <button className="userAddButton">Create</button>
       </div>
       <div className="userContainer">
        <div className="userShow">
            <div className="userShowTop">
                <img src="https://www.images.pexels.com/es-es/foto/foto-en-primer-plano-de-mujer-con-abrigo-marron-y-top-gris-733872/" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
                <span className="userShowUsername">Anna Becker</span>
                <span className="userShowUserTitle">Software Engineer</span>
            </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">annabeck99</span>
              </div>
              <div className="userShowInfo">
              <CalendarToday className='userShowIcon'/>
              <span className="userShowInfoTitle">10.12.1999</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
              <PhoneAndroid className='userShowIcon'/>
              <span className="userShowInfoTitle">+1 123 456 67</span>
              </div>
              <div className="userShowInfo">
              <MailOutline className='userShowIcon'/>
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
              </div>
              <div className="userShowInfo">
              <LocationSearching className='userShowIcon'/>
              <span className="userShowInfoTitle">New York | USA</span>
              </div>
            </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">

            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>UserName</label>
                <input type="text" placeholder="annabeck99" className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>FullName</label>
                <input type="text" placeholder="Anna Beck" className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder="annabeck99@gmail.com" className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder="+1 123 456" className='userUpdateInput'/>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="New York/USA" className='userUpdateInput'/>
              </div>
            </div>

            <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img className='userUpdateImg' src="" alt="" />
                  <label htmlFor='file'><Publish/></label>
                  <input type="file" id="file" style={{display:"none"}}/>
                </div>
            </div>
          </form>
        </div>
       </div>
    </div>
  )
}

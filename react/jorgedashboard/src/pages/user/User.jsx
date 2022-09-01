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
            <div className="userShowBottom"></div>
        </div>
        <div className="userUpdate"></div>
       </div>
    </div>
  )
}

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./app.css"
import UserList from "./pages/userList/UserList";


function App() {
  return (
    <BrowserRouter >
     <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route exact path="/" element={ <Home />}></Route>
          <Route path="/users" element={<UserList />}></Route>
        </Routes>
        
      </div>

    </BrowserRouter>
  );
}

export default App;

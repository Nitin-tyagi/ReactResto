import React from "react";
import "./App.css";
import {NavLink} from "react-router-dom";



const Navbar =()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-12 max-auto">

           
        <nav className="navbar navbar-expand-xl navbar-light bg-light mr-sm-2">
  <NavLink className="navbar-brand" to="/">SARPANCH The Dhaba</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink exact className="menu_active" className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
      </li>
     
      <li className="nav-item">
        <NavLink className="menu_active" className="nav-link" to="/menu">Menu</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="menu_active" className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="menu_active" className="nav-link" to="/about">About</NavLink>
      </li>
    </ul>
    
  </div>
</nav>
 </div>
          </div>
        </div>
        </>
    )
}


export default Navbar;
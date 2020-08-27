import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Chinese =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
          

          <ol>
          <li>MANCHURIAN..................................@25/-</li>
           <li>CHILI PATATO..................................@50/-</li>
           <li>CHOWMIEN.....................................@50/-</li>
           <li>MUSHROOM....................................@50/-</li>
           <li>FRIED RICE.....................................@50/-</li>
           <li>PUMPKIN CANDY............................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
          <Footer/>
      </>
  )
}

export default Chinese;


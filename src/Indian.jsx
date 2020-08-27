import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Indian =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
          

          <ol>
          <li>NAAN................................................@25/-</li>
           <li>BHATURA.........................................@50/-</li>
           <li>CHOLE..............................................@50/-</li>
           <li>DAM AALU........................................@50/-</li>
           <li>DAL MAKHANI..................................@50/-</li>
           <li>PALAK PANER..................................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
          <Footer/>
      </>
  )
}

export default Indian;


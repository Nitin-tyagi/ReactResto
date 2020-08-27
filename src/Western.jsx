import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Western =(props)=>{
  

  
  return(
      <>
      
<div className="hero_div">
          <div className="main_div">
          <div className="center_div">
          
          <br/>
          <h1>Menu & Rate List</h1>
          
          <br/>
          

          <ol>
          <li>BATATA VADA.....................................@25/-</li>
           <li>PAV BHAJI..........................................@50/-</li>
           <li>SABUDANA VADA..............................@50/-</li>
           <li>DHOKLA............................................@50/-</li>
           <li>KHAKRA............................................@50/-</li>
           <li>THEPLA............................................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
</div>          
          <Footer/>
      </>
  )
}

export default Western;


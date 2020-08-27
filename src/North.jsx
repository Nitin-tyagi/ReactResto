import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const North =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
          

          <ol>
          <li>PAPRI CHAAT..................................@25/-</li>
           <li>BIRYANI...........................................@50/-</li>
           <li>PURI BHAJI.....................................@50/-</li>
           <li>GOLDEN CAFE...............................@50/-</li>
           <li>GARDEN CAFE..............................@50/-</li>
           <li>CAFE CREMA.................................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
          <Footer/>
      </>
  )
}

export default North;


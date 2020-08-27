import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Easten =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
          

          <ol>
          <li>MISHTI DOI.....................................@25/-</li>
           <li>MOMS..............................................@50/-</li>
           <li>MALPUA..........................................@50/-</li>
           <li>SHONDESH.....................................@50/-</li>
           <li>PITA BREAD....................................@50/-</li>
           <li>CHEENAPODA................................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
          <Footer/>
      </>
  )
}

export default Easten;


import React from "react";

import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const South =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
         

          <ol>
           <li>DOSA.........................................@25/-</li>
           <li>IDLI............................................@50/-</li>
           <li>VADA PAV...................................@50/-</li>
           <li>VADAI.........................................@50/-</li>
           <li>APPAM.......................................@50/-</li>
           <li>UPMA.........................................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>
          
          </div>
         
          <Footer/>
      </>
  )
}

export default South;


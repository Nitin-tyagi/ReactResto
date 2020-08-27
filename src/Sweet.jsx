import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Sweet =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
          

          <ol>
          <li>GULAB JAMUN..................................@25/-</li>
           <li>JALEBI...............................................@50/-</li>
           <li>GAJAR KA HALWA............................@50/-</li>
           <li>RASMALAI........................................@50/-</li>
           <li>KAJU KI BARFI.................................@50/-</li>
           <li>KHEER SPECIAL..............................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
          <Footer/>
      </>
  )
}

export default Sweet;


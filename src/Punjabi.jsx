import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Punjabi =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
          

          <ol>
          <li>AALOO PARATHA...............................@25/-</li>
           <li>PANEER PARATHA.............................@50/-</li>
           <li>LACCHA PARATHA.............................@50/-</li>
           <li>SARSON DA SAAG.............................@50/-</li>
           <li>KADHI PAKODA..................................@50/-</li>
           <li>MAKKE DI ROTI...................................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
          <Footer/>
      </>
  )
}

export default Punjabi;


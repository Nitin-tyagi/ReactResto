import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Fast =(props)=>{
  

  
  return(
      <>
          <div className="main_div">
          <div className="center_div">
          <br/>
          <h1>Menu & Rate List</h1>
          <br/>
          

          <ol>
          <li>TIKKI..............................................@25/-</li>
           <li>SAMOSA........................................@50/-</li>
           <li>BURGER........................................@50/-</li>
           <li>COLD DRINK.................................@50/-</li>
           <li>FRENCH FRIES.............................@50/-</li>
           <li>SPRING ROLL................................@50/-</li>
          </ol>
          <NavLink to="/menu" className="btn btn-primary">Back</NavLink>
          </div>

          </div>
          <Footer/>
      </>
  )
}

export default Fast;


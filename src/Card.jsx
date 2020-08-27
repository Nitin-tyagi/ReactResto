import React from "react";

import { NavLink } from "react-router-dom";


const Card =(props)=>{
    return (
        <>

 
                <div className="col-md-4 col-10 mx-auto">
                <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold"></h5>
    <p className="card-text">“Ask not what you can do for your country. Ask what’s for lunch.”</p>
    <NavLink to={props.list} className="btn btn-primary">{props.title}</NavLink>
    
                   
  </div>
</div>
</div>
  
        </>
    )
}

export default Card;
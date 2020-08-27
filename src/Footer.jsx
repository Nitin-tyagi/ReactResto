import React from "react";
import { NavLink } from "react-router-dom";

const Footer =()=>{
    return (
        <>
            <footer className="w-100 h-20 bg-light text-center ">
            <NavLink className="footer-brand" to="/">2020 Sarpanch The Dhaba. All Rights Reserved |</NavLink>
              
            </footer>
        </>
    )
} 


export default Footer;
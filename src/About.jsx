import React from "react";
import web from "../src/images/CHAPPAN BHOG.jfif";
import Common from "./Common";
import Footer from "./Footer";
const About =(props)=>{
  return(
    <>
     <Common name= "ABOUT US" imgsrc={web} visit="/contact" btname="Contact Now"/>
     <Footer/>
    </>
  )
}

export default About;
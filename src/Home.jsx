import React,{useState} from "react";
import Common from "./Common";
import web from "../src/images/Awesome restaurant design - Imgur.jpg";
import Footer from "./Footer";

const Home =(props)=>{
  let newDate= new Date().toLocaleTimeString();
  const [ctime, setTime]= useState(newDate);

  const Updating =()=>{
      newDate= new Date().toLocaleTimeString();
      setTime(newDate);
      
  };
  setInterval(Updating, 1000);
  return(
    <>
     <h1 className="heading">{ctime}</h1>
      <Common name= "WELCOME TO SARPANCH THE DHABA" imgsrc={web} visit="/menu" btname="Menu"/>
      <Footer/>
    </>
  )
}

export default Home;
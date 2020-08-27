import React, {useState} from "react";
import Footer from "./Footer";



  const Contact =()=>{
    const [data, setData]= useState({
        fullname:"",
        phone:"",
        email:"",
        pass:"",
    })

    const InputEvent =(event)=>{
        const {name, value}= event.target;

        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My Mobile Number is ${data.phone}. email ${data.email}. password ${data.pass}.`);

    }
  return(
    <>
      <div className="my-5">
            <h1 className="text-center">Get In Touch</h1>
        </div>
        <div className="container contact_div">
            <div className="input">
                <div className="col-md-6 col-10 max-auto">
                    <form onSubmit={formSubmit}>
                   
  <div class="navbar-brand">
    <label for="exampleInputEmail1">Enter Your Full Name</label>
    <input type="text" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    </div>
    <div class="navbar-brand">
    <label for="exampleInputEmail1">Phone number</label>
    <input type="phone number" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your Phone number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
 
  <div class="navbar-brand">
    <label for="exampleInputEmail1">Enter Your email</label>
    <input type="email" name="email" value={data.email} onChange={InputEvent} placeholder="Enter your email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
 
  
 
 
  <button type="submit" class="btn btn-outline-primary">Submit</button>
</form>

                </div>
                
            </div>
            
        </div>
        <Footer/>
        
    </>
  )
}

export default Contact;
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";
import {Switch,Route,Redirect} from "react-router-dom";
import "./App.css";
import South from "./South";
import North from "./North";
import Sweet from "./Sweet";
import Footer from "./Footer";
import Chinese from "./Chinese";
import Punjabi from "./Punjabi";
import Western from "./Western";
import Indian from "./Indian";
import Easten from "./Easten";
import Fast from "./Fast";

const App =()=>{
  return(
    <>
      <>
        <Navbar/>
       <Switch> 
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/menu" component={Menu}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/south" component={South}/>
       <Route exact path="/north" component={North}/>
       <Route exact path="/sweet" component={Sweet}/>
       <Route exact path="/footer" component={Footer}/>
       <Route exact path="/chinese" component={Chinese}/>
       <Route exact path="/punjabi" component={Punjabi}/>
       <Route exact path="/western" component={Western}/>
       <Route exact path="/indian" component={Indian}/>
       <Route exact path="/easten" component={Easten}/>
       <Route exact path="/fast" component={Fast}/>

        <Redirect to="/" />
</Switch>


        </>
    </>
  )
}

export default App;
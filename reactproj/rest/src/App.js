import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/src/jquery";
import "bootstrap/dist/js/bootstrap";
import Home from "./Home";
import Product from "./Product";
import Promo from "./Promo";
import About from "./About";
import Contact from "./Contact";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";


function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Product" element={<Product/>}/>
      <Route path="Promo" element={<Promo/>}/>
      
      <Route path="/About" element={<About/>}/>
      <Route path= "Contact" element={<Contact/>}/>
    </Routes>
    </Router></>
  );
}

export default App;

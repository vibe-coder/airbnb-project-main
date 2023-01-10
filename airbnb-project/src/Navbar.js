import React from "react";
import Airbnblogo from "./airbnb.svg"
import './App.css';

export default function Navbar(){
  return(
    <nav className="navbar-wrapper">
      <img src= {Airbnblogo} alt="airbnb-logo"/>
    </nav>
  )
}
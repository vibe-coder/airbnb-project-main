import React from "react";
import './App.css';




export default function Hero(){
  return(
    <div className="main-wrapper">
      <div className="hero-wrapper">
      <div className="div-1">
        <img className="pic-1" src="../images/pic 1.jpg" alt="Picture1" />
      </div>
      <div className="div-2">
        <div className="div-2i">
        <img className="pic-2" src="../images/pic 2.jpg" alt="Picture3" />
        </div>
        <div className="div-2ii">
        <img className="pic-3" src="../images/pic 3.jpg" alt="Picture3" />
        </div>
      </div>
      <div className="div-3">
        <div className="div-3i">
        <img className="pic-4" src="../images/pic 4.jpg" alt="Picture4" />
        </div>
        <div className="div-3ii">
        <img className="pic-5" src="../images/pic 5.jpg" alt="Picture5" />
        </div>
      </div>
      <div className="div-4">
        <div className="div-4i">
        <img className="pic-6" src="../images/pic 6.jpg" alt="Picture6" />
        </div>
        <div className="div-4ii">
        <img className="pic-7" src="../images/pic 7.jpg" alt="Picture7" />
        </div>
      </div>
      <div className="div-5">
        <div className="div-5i">
        <img className="pic-8" src="../images/pic 8.jpg" alt="Picture8" />
        </div>
        <div className="div-5ii">
        <img className="pic-9" src="../images/pic 9.jpg" alt="Picture9" />
        </div>
      </div>
    </div>

    <h1 className="h1">Online Experiences</h1>
    <p>Join unique interactive activities led by <br/>
    one-of-a-kind hosts-all without leaving <br/>
    home
    </p>
    </div>

  )
}

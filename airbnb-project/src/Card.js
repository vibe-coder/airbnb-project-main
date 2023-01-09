import React from "react";
import './App.css';



export default function Card(props){
  return(
    <section className="section-wrapper">
      <div className="card">
        <img className="card-picture" src={`../images/${props.coverImg}`}   alt ="Picture1" />
        <div className="card-stats">
          <span className="card-star">&#10029;</span>
          <span>{props.rating}</span>
          <span className="gray">{props.reviewCount} • </span>
          <span className="gray">{props.location}</span>
          <p className="gray1">{props.title}</p>
          <p> <span className="bold">From ${props.price} </span> / person</p>
        </div>
      </div>
    </section>
  )
}
import React from "react";
import './App.css';



export default function Card(props){
  let badgeText
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.location === "Online"){
    badgeText = "ONLINE"
  }
  return(
    <div className="card">
      {badgeText &&  <div className="card-badge">{badgeText}</div>}
      <img className="card-picture" src={`../images/${props.coverImg}`}   alt ="Picture1" />
      <div className="card-stats">
        <span className="card-star">&#10029;</span>
        <span>{props.stats.rating}</span>
        <span className="gray">{props.stats.reviewCount} • </span>
        <span className="gray">{props.location}</span>
        <p className="gray1">{props.title}</p>
        <p> <span className="bold">From ${props.price} </span> / person</p>
      </div>
    </div>
  )
}
import React from "react";
import "./GameCards.css";

const GameCards = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  
    <span onClick={() => props.removeFriend(props.id)} className="remove">
    
    </span>
  </div>
);

export default GameCards;

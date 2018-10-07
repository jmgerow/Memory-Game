import React from "react";
import "./GameCards.css";

const GameCards = props => (
  <div className="card"
    value={props.id}
    onClick={() => props.selectCard(props.id)}
  >

    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>

  </div>
);

export default GameCards;

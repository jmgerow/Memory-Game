import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
 
    <div class="navbar sticky-top scoreboard">
      <div class="col-12 col-md-6 col-lg-8 game-name">React Memory Game</div>  
      <div class="col-12 col-md-3 col-lg-2 current-score">Current Score: {props.currentScore}</div>
      <div class="col-12 col-md-3 col-lg-2 top-score">Top Score: {props.topScore}</div>
    </div>
  
);

export default Scoreboard;

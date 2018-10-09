import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
 
    <div class="navbar sticky-top scoreboard">
      <div class="col-sm-8 game-name">React Memory Game</div>  
      <div class="col-sm-2 current-score">Current Score: {props.currentScore}</div>
      <div class="col-sm-2">Top Score: {props.topScore}</div>
    </div>
  
);

export default Scoreboard;

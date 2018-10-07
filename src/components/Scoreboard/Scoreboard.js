import React from "react";
import "./Scoreboard.css";

const Scoreboard = props => (
  <div>
     <div id="current-score">Current Score: { props.currentScore }</div>     
     <div id="top-score">Top Score: { props.topScore }</div> 
    
  </div>
);

export default Scoreboard;

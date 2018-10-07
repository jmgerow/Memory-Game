import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import GameCards from "./components/GameCards";
import Scoreboard from "./components/Scoreboard";
import friends from "./characters.json";

//function for randomizing how cards are displayed
function randomizeCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  // setting default state values
  state = {
    friends,
    currentScore: 0,
    topScore: 0,
    selected: []
    
  };

  // function for when user clicks card
  selectCard = id => {
    const selectedFriend = this.state.selected.indexOf(id)
    console.log('selectedFriend', selectedFriend)
    console.log("id", friends.id)
    //  this.setState({ friends });
    this.setState({ selected: this.state.selected.concat(id) })
    console.log('selected', this.state.selected)
    this.runRandomize()
  }

  // randomizes cards when one is clicked
  runRandomize = () => {
    let shuffledCards = randomizeCards(friends);
    this.setState({ friends: shuffledCards });
  };

  // rendering to dom
  render() {
    return (
      <Container>
        <Scoreboard
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
         />
        <Header>React Memory Game</Header>
        
        {this.state.friends.map(friend => (
          <GameCards
            selectCard={this.selectCard}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;

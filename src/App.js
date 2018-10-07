import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import GameCards from "./components/GameCards";
import friends from "./characters.json";

class App extends Component {

  state = {
    friends
  };
  
  render() {
    return (
      <Container>
        <Header>Clicky Memory Game</Header>

        {this.state.friends.map(friend => (
        <GameCards
          image={friend.image}
        />
        ))}
      </Container>
    );
  }
}

export default App;

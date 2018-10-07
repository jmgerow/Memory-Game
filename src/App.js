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

  selectCard = id => {
    const selectedFriend = this.state.friends.indexOf(id)
    console.log('selectedFriend', selectedFriend)
    //  this.setState({ friends });

  }

  // rendering to dom
  render() {
    return (
      <Container>
        <Header>Click Memory Game</Header>

        {this.state.friends.map(friend => (
          <GameCards
            selectCard={this.selectCard}
            image={friend.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;

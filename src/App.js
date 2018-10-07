import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header";
import Container from "./components/Container";
import GameCards from "./components/GameCards";
import friends from "./characters.json";

function randomizeCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


class App extends Component {

  state = {
    friends
  };

  selectCard = id => {
    const selectedFriend = this.state.friends.indexOf(id)
    console.log('selectedFriend', selectedFriend)
    //  this.setState({ friends });
    this.runRandomize()
  }

  runRandomize = () => {
    let shuffledCards = randomizeCards(friends);
    this.setState({ friends: shuffledCards });
  };

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

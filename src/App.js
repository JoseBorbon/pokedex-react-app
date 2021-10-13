import React, { Component } from 'react';
// import Pokecard from './Pokecard';
import Pokedex from './Pokedex';

class App extends Component {
  render() {
    return (
      <>
        {/* <Pokecard id={4} name="Charmander" type="fire" exp={62} /> */}
        <Pokedex />
      </>
    );
  }
}

export default App;

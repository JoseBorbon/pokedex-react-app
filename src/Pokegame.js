import React, { Component } from 'react';
import shuffle from './utilities/shuffle';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
    ],
  };
  render() {
    const shuffledPokecards = shuffle(this.props.pokemon);
    const getHalfOfShuffle = shuffledPokecards.length / 2;
    const PokecardDeck1 = shuffledPokecards.slice(0, getHalfOfShuffle);
    const PokecardDeck2 = shuffledPokecards.slice(-getHalfOfShuffle);
    const PokecardTotalExpDeck1 = PokecardDeck1.reduce(
      (totalExp, currCard) => totalExp + currCard.base_experience,
      0
    );
    const PokecardTotalExpDeck2 = PokecardDeck2.reduce(
      (totalExp, currCard) => totalExp + currCard.base_experience,
      0
    );
    return (
      <div>
        <Pokedex
          pokemon={PokecardDeck1}
          total={PokecardTotalExpDeck1}
          isWinner={PokecardTotalExpDeck1 > PokecardTotalExpDeck2}
        />
        <Pokedex
          pokemon={PokecardDeck2}
          total={PokecardTotalExpDeck2}
          isWinner={PokecardTotalExpDeck2 > PokecardTotalExpDeck1}
        />
      </div>
    );
  }
}

export default Pokegame;

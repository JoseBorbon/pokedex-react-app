import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';
import abbreviateMonTypes from './utilities/abbreviateMonTypes';

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h3 className="Pokedex-winner">WINNING HAND</h3>;
    } else {
      title = <h3 className="Pokedex-loser">LOSING HAND</h3>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>EXP TOTAL: {this.props.total}</h4>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.name}
              type={abbreviateMonTypes(p.type)}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;

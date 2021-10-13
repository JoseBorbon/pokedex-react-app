import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let imgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <div className="Pokecard">
        <h1>{name}</h1>
        <img src={imgSrc} alt={name} />
        <div>Type: {type}</div>
        <div>EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;

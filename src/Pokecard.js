import React, { Component } from 'react';
import './Pokecard.css';
import fancifyImage from './utilities/fancifyImage';

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let imgSrc = fancifyImage(id);
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;

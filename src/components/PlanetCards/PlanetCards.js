import React, { Component } from 'react';
import './PlanetCards.css'

class PlanetCard extends Component {
  constructor() {
    super()
    this.state = {
      residents: [],
    }
  }

  componentDidMount() {
    console.log(this.props.resident);
    this.props.residents.forEach(resident => {
      this.fetchResidents(resident)
    });
  }

  fetchResidents(resident) {
    fetch(resident)
      .then(response => {
        return response.json()
      })
      .then(data => {
        this.state.residents.push(data.name);
        this.setState({
          residents: this.state.residents
        })
      })
    }

  render() {
    return (
      <article className="PlanetCard">
        <h3>Name: {this.props.name}</h3>
        <p>Terrain: {this.props.terrain}</p>
        <p>Population: {this.props.population}</p>
        <p>Climate: {this.props.climate}</p>
        <p>Residents: {this.state.residents.length ? this.state.residents.join(', ') : 'none'}</p>
        <button className="favorite">Favorite</button>
      </article>
    )
  }
}

export default PlanetCard;

import React, { Component } from 'react';
import './PlanetCards.css'

class PlanetCard extends Component {
  constructor() {
    super()
    this.state = {
      planetData: [],
    }
  }

  componentDidMount() {
    this.props.selectedCategory.forEach(obj => {
      obj.residents.map(resident => {
        this.fetchResidents(resident);
      })
    })
  }

  fetchResidents(resident) {
    fetch(resident)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data.name)
        this.props.selectedCategory.map(obj => {
          if (!obj.residents.length) {
            obj.residents = 'none'
          }
        })
        this.setState({ planetData: this.props.selectedCategory })
      })
    }

  helpResidents() {

  }

  render() {
    return (
      <div>
      {this.state.planetData.map((obj, i) => {
        return (
          <article key={i} className="PlanetCard">
            <h3>Name: {obj.name}</h3>
            <p>Terrain: {obj.terrain}</p>
            <p>Population: {obj.population}</p>
            <p>Climate: {obj.climate}</p>
            <p>Residents: {obj.residents}</p>
            <button className="favorite">Favorite</button>
          </article>
        )
      })}
      </div>
    )
  }
}

export default PlanetCard;

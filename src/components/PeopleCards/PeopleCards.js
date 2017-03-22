import React, { Component } from 'react';
import './PeopleCards.css'

class PeopleCard extends Component {
  constructor() {
    super()
    this.state = {
      homeworld: '',
      species: '',
      population: '',
      language: ''
    }
  }

  componentDidMount() {
    this.fetchHomeWorld(this.props.homeworld);
    this.fetchSpecies(this.props.species[0])

  }

  fetchHomeWorld(url) {
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        homeworld: data.name,
        population: data.population
      })
    })
  }

  fetchSpecies(url){
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        species: data.name,
        language: data.language
      })
    })
  }

  render() {
    return (
      <article className="PeopleCard">
        <h3>{this.props.name}</h3>
        <p>Homeworld: {this.state.homeworld}</p>
        <p>Species: {this.state.species}</p>
        <p>Language: {this.state.language}</p>
        <p>Population: {this.state.population}</p>
        <button className="favorite">Favorite</button>
      </article>
    )
  }
}

export default PeopleCard;

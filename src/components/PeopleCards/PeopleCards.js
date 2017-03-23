import React, { Component } from 'react';
import './PeopleCards.css'

class PeopleCard extends Component {
  constructor() {
    super()
    this.state = {
      homeworld: '',
      species: '',
      population: '',
      language: '',
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
        <p><span className="title">Homeworld:</span> {this.state.homeworld}</p>
        <p><span className="title">Species:</span> {this.state.species}</p>
        <p><span className="title">Language:</span> {this.state.language}</p>
        <p><span className="title">Population:</span> {this.state.population}</p>
        <button
        className="favorite"
        onClick={(name) => this.props.toggleFavorite(this.props.name)}>
        Favorite
        </button>
      </article>
    )
  }
}

export default PeopleCard;

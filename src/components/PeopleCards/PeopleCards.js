import React, { Component } from 'react';
import './PeopleCard.css'

class PeopleCard extends Component {
  constructor() {
    super()
    this.state = {
      peopleData: []
    }

  }

  componentDidMount() {
    this.props.selectedCategory.forEach(obj => {
      this.fetchHomeWorld(obj.homeworld);
      this.fetchSpecies(obj.species[0]);
    })
  }

  fetchHomeWorld(url) {
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.selectedCategory.map(obj => {
        if (obj.homeworld) {
          obj.homeworld = data.name;
          obj.population_of_homeworld = data.population;
          obj.favorite = false;
        }
      })
      this.setState({ peopleData: this.props.selectedCategory })
    })
  }

  fetchSpecies(url){
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.selectedCategory.map(obj => {
        if (obj.name) {
          obj.species = data.name;
          obj.language = data.language;
        }
      })
      this.setState({ peopleData: this.props.selectedCategory })
    })
  }


  render() {
    return (
      <div>
      {this.state.peopleData.map((obj, i) => {
        return (
          <article key={i} className="PeopleCard">
            <h3>Name: {obj.name}</h3>
            <p>Homeworld: {obj.homeworld}</p>
            <p>Species: {obj.species}</p>
            <p>Language: {obj.language}</p>
            <p>Population: {obj.population_of_homeworld}</p>
            <button className="favorite">Favorite</button>
          </article>
        )
      })}
      </div>
    )
  }
}

export default PeopleCard;

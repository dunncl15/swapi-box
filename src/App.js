import React, { Component } from 'react';
import './App.css';

import Buttons from './components/Buttons/Buttons.js';
import CardContainer from './components/CardContainer/CardContainer.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      openingFilm: {},
      selectedCategory: []
    }
  }

  fetchData(value) {
    fetch(`http://swapi.co/api/${value}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.fetchHelper(data, value);
    })
  }

  fetchHelper(data, value) {
    switch (value) {
      case 'people':
        this.setState({selectedCategory: []})
        this.getPeople(data);
        break;
      case 'planets':
        this.setState({selectedCategory: []})
        this.getPlanets(data);
        break;
      case 'vehicles':
        this.setState({selectedCategory: []})
        this.getVehicles(data)
        break;
      }
  }


  getPeople(data) {
    return data.results.map(person => {
      const { name, homeworld, species, population_of_homeworld } = person;
      this.setState({ selectedCategory: this.state.selectedCategory.concat([{
        name, homeworld, species, population_of_homeworld }]) });
    });
  }

  getPlanets(data) {
    console.log(data);
    return data.results.map(planet => {
      const { name, terrain, population, climate, residents } = planet
      this.setState({ selectedCategory: this.state.selectedCategory.concat([{
        name, terrain, population, climate, residents }]) });
    });
  }

  getVehicles(data) {
    return data.results.map(vehicle => {
      const { name, model, vehicle_class, number_of_passengers} = vehicle;
      this.setState({ selectedCategory: this.state.selectedCategory.concat([{
        name, model, vehicle_class, number_of_passengers }]) });
    });
  }

  componentDidMount() {
    fetch('http://swapi.co/api/films')
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const index = Math.floor(Math.random() * data.count);
      const { opening_crawl, release_date, title } = data.results[index];
      this.setState({
        openingFilm: { opening_crawl, release_date, title }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Swapi-box</h2>
        </div>
        <Buttons fetchData={(type) => this.fetchData(type)} film={this.state.openingFilm} />
        { this.state.selectedCategory.length === 10 &&
        <CardContainer
        selectedCategory={this.state.selectedCategory}
        /> }
      </div>
    );
  }
}

export default App;

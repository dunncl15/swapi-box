import React, { Component } from 'react';
import './App.css';

import Buttons from './components/Buttons/Buttons.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      openingFilm: {},
      people: [],
      planets: [],
      vehicles: []
    }
  }

  fetchData(value, e) {
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
        if (!this.state.people.length)
        this.getPeople(data);
        break;
      case 'planets':
        if (!this.state.planets.length)
        this.getPlanets(data);
        break;
      case 'vehicles':
        if (!this.state.vehicles.length)
        this.getVehicles(data)
        break;
      }
  }

  getPeople(data) {
    return data.results.map(person => {
      const { name, homeworld, species, population_of_homeworld } = person;
      this.setState({ people: this.state.people.concat([{
        name, homeworld, species, population_of_homeworld }]) });
    });
  }

  getPlanets(data) {
    return data.results.map(planet => {
      const { name, terrain, population, climate, residents } = planet
      this.setState({ planets: this.state.planets.concat([{
        name, terrain, population, climate, residents }]) });
    });
  }

  getVehicles(data) {
    return data.results.map(vehicle => {
      const { name, model, vehicle_class, number_of_passengers} = vehicle;
      this.setState({ vehicles: this.state.vehicles.concat([{
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
          <h2>Sw-api-box</h2>
        </div>
        <Buttons fetchData={(type, e) => this.fetchData(type, e)} film={this.state.openingFilm} />
      </div>
    );
  }
}

export default App;

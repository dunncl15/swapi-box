import React, { Component } from 'react';
import './App.css';

import Buttons from './components/Buttons/Buttons.js';
import CardContainer from './components/CardContainer/CardContainer.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      openingFilm: {},
      selectedCategory: [],
      selected: ''
    }
  }

  fetchData(value) {
    fetch(`http://swapi.co/api/${value}`)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      this.setState({
        selected: value,
        selectedCategory: data.results })
    })
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
        <Buttons
        fetchData={(type) => this.fetchData(type)} film={this.state.openingFilm} />
        { this.state.selectedCategory.length &&
        <CardContainer
        selected={this.state.selected}
        selectedCategory={this.state.selectedCategory}
        /> }
      </div>
    );
  }
}

export default App;

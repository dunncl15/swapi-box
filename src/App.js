import React, { Component } from 'react';
import './App.css';

import Buttons from './components/Buttons/Buttons.js';
import Film from './components/Film/Film.js'
import CardContainer from './components/CardContainer/CardContainer.js';


class App extends Component {
  constructor() {
    super()
    this.state = {
      openingFilm: {},
      selectedCategory: [],
      selected: '',
      favorites: []
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

  addFavorite(name) {
    const favorites = this.state.selectedCategory.filter(card => card.name === name);
    this.setState({ favorites: this.state.favorites.concat(favorites) });
  }

  toggleFavorite(name) {
    if (!this.state.favorites.length){
      this.addFavorite(name)
    }
    this.state.favorites.map(card => {
      return card.name !== name ? this.addFavorite(name) : this.removeFavorite(name);
    })
  }

  removeFavorite(name) {
    const index = this.state.favorites.findIndex(card => card.name === name);
    console.log(index);
    this.state.favorites.splice(index, 1)
    this.setState({ favorites: this.state.favorites })
  }

  renderFavorites(value) {
    this.setState({ selected: value })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Swapi-box</h2>
          <Buttons
          fetchData={(type) => this.fetchData(type)}
          renderFavorites={(value) => this.renderFavorites(value)}
          />
        </div>
        <Film film={this.state.openingFilm}/>
        { this.state.selectedCategory.length &&
        <CardContainer
        selected={this.state.selected}
        selectedCategory={this.state.selectedCategory}
        toggleFavorite={(name) => this.toggleFavorite(name)}
        favorites={this.state.favorites}
        /> }
      </div>
    );
  }
}

export default App;

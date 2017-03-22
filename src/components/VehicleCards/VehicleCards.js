import React, { Component } from 'react';
import './VehicleCards.css'

class VehicleCard extends Component {
  constructor() {
    super()
    this.state = {
      vehicleData: []
    }
  }

  componentWillMount() {
    this.setState({
      vehicleData: this.props.selectedCategory
    })
  }

  render() {
    return (
      <div>
      {this.props.selectedCategory.map((vehicle, i) => {
        return (
          <article key={i} className="VehicleCard">
            <h3>{vehicle.name}</h3>
            <p>Model: {vehicle.model}</p>
            <p>Passenger Limit: {vehicle.passengers}</p>
            <p>Vehicle Class: {vehicle.vehicle_class}</p>
          </article>
        )
      })}
      </div>
    )
  }

}

export default VehicleCard;

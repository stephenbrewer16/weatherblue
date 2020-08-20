import React, { Component } from 'react'
import WeatherCard from './WeatherCard'

export default class Weatherdata extends Component {
state = {
    testings: [],
    weathercards: []
}



renderWeather = () => {
   
  return this.props.filters.map((filter, index) => {
      console.log(this.props.data.[0].city.name)
  
      return <WeatherCard data={this.props.data} resetState={this.props.resetState} zipcode={this.props.zipcode} changeHeat={this.props.changeHeat} key={index} heat={this.props.heat} cold={this.props.cold} filters={filter}></WeatherCard>
  
  })
}

    render() {
        return (
            <div>
                {this.props.fetched ? this.renderWeather() : null}
                {/* {this.props.fetched ? this.findWeather() : null} */}
            </div>
        )
    }
}

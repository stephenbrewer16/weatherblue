import React, { Component } from 'react'


export default class WeatherCard extends Component {

state = {
        hot: 0,
        cool: 500,
        tempHot: '',
        tempCool: [],
        cityName: ""
    }


//  getHot = () => {
//         return this.props.filters.map(filter => {
//             if(parseInt(filter.main.temp_max.value) > this.state.hot){
//             this.setState({
//                 hot: parseInt(filter.main.temp_max)
//             })
//             } else {
//                 return null
//             }
//         })
//     }


    getCool = () => {
        return this.props.filters.map(filter => {
            if(parseInt(filter.main.temp_min) < this.state.cool){
                this.setState({
                    cool: parseInt(filter.main.temp_min),
                    tempCool: filter.dt_txt

                })
                return console.log(filter.city)
            } else {
                return null
            }
        })
    }
    getHot = () => {
        return this.props.filters.map(filter => {
            if(parseInt(filter.main.temp_max) > this.state.hot){
                this.setState({
                    hot: parseInt(filter.main.temp_max),
                    tempHot: filter.dt_txt
                })
                return console.log(filter.main.temp_max)
            } else {
                return null
            }
        })
    }
getCity = () => {
    this.setState({
        cityName: this.props.data.[0].city.name
    })
}
render() {
    console.log(this.props.data.[0].city.name)
    console.log(this.state.cityName)
        return (
            <div> 
               
                {this.getHot()}
                {this.getCool()}
                    <ul>
                        {this.props.data.[0].city.name}
                        <br></br>
                        The hottest day will be {this.state.tempHot} and the high will be {this.state.hot} degrees
                        <br></br>
                        The coldest day will be {this.state.tempCool} and the low will be {this.state.cool} degrees
                    </ul>
            </div>
        )
    }
}
//     `{this.props.stations.hot_temp}` hot temperature
//         `{this.props.stations.cold_temp}` cold temperature
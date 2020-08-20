import React, { Component } from 'react'
import fire from './fire'
import Weatherdata from './Weatherdata'


class App extends Component {
  
state = {
      data: [],
      messages: [],
      stations: [],
      filters: [],
      zipcode: '',
      fetched: false,

    };// <- set up react state

  componentDidMount() {
    /* Create reference to messages in Firebase Database */
     let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(1);
     messagesRef.on('child_added', snapshot => {
       /* Update React state when message is added at Firebase Database */
       let message = { text: snapshot.val(), id: snapshot.key };
       this.setState({ messages: [message].concat(this.state.messages)})
     })


  }
 
  addMessage(e){
    e.preventDefault()
    if (this.inputEl.value.length === 5){
    fire.database().ref('messages').push(this.inputEl.value)
      .then(fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${this.inputEl.value},us&units=imperial&appid=4ed675f3a6cc34ad9f7285521452d976`)
      .then(resp => resp.json())
      .then(station => {
        const wcards = station.list.filter(reading => reading.dt_txt.includes("18:00:00"))
          this.setState({
            data: [station],
          stations: [station.list],
          filters: [wcards],
        })})
      .then(fire.database().ref('stations').push(this.state.stations)))
      .then(fire.database().ref('data').push(this.state.data))
      .then(fire.database().ref('filters').push(this.state.filters))
      .then(this.setState({
        zipcode: this.inputEl.value,
        fetched: true,
        heat: 0,
        cold: 400
      }))
    this.inputEl.value = '' // <- clear the input
    console.log(this.state.stations.[0])
    console.log(this.state.zipcode)

    } else {
      alert("You have incorrectly submitted your zipcode please try again")
    }
  }


handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value,
    fetched: false
  })
}
  resetState = () => {
    this.setState({
      fetched: false
    })
  }


  render() {
    console.log(this.state.stations)
    return (
    <div>
     {<form>

      </form>}

        <form onSubmit={this.addMessage.bind(this)} onChange={this.handleChange}>
          <input type="number" placeholder='ENTER ZIPCODE' ref={el => this.inputEl = el} />
        <input type="submit" />
        <ul>

        </ul>
      </form>
      
          {this.state.fetched ? <Weatherdata resetState={this.resetState} zipcode={this.state.zipcode} data={this.state.data} state={this.state} filters={this.state.filters} fetched={this.state.fetched} stations={this.state.stations}></Weatherdata> : null}
    </div>
    );

  }
}

export default App;

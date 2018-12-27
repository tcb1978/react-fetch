import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })
    fetch('https://swapi.co/api/people/1')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        loading: false,
        character: data
      })
    })
  }

  render() {
    const text = this.state.loading ? 'loading...' : this.state.character.name

    return (
      <div className="App">
        <h1>{text}</h1>
      </div>
    );
  }
}

export default App;

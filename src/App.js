import React, { Component } from 'react';

import './App.css'
import Header from './components/Header';
import Description from './components/Description'
import Details from './components/Details'
import data from './data/en_US.json'

class App extends Component {
  render() {
    return (
      <div>
          <Header>{data}</Header>
          <Description>{data}</Description>
          <Details>{data}</Details>
      </div>
    );
  }
}

export default App;


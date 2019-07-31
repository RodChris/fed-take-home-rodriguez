import React, { Component } from 'react';

import './App.css'
import Header from './components/Header';
import Description from './components/Description'
import Details from './components/Details'
import Gallery from './components/Gallery'
import Episodes from './components/Episodes'

import data from './data/en_US.json'

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Header>{data}</Header>
          <Description>{data}</Description>
          <Details>{data}</Details>
          <Gallery>{data}</Gallery>
          <Episodes>{data}</Episodes>
      </React.Fragment>
    );
  }
}

export default App;


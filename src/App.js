import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'

import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header';
import Description from './components/Description'
import Details from './components/Details'
import Gallery from './components/Gallery'
import Episodes from './components/Episodes'

import dataEN from './data/en_US.json'
import dataPG from './data/la_PG.json'

class App extends Component {
  render() {
    return (
      <StyleRoot>
          <Navbar />
          <Header data={dataEN}></Header>
          <Description data={dataEN}></Description>
          <Details data={dataEN}></Details>
          <Gallery data={dataEN}></Gallery>
          <Episodes data={dataEN}></Episodes>
      </StyleRoot>
    );
  }
}

export default App;


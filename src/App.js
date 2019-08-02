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
  state = {
    data: dataEN
  }

  onNav(newData) {
    if(newData === 'dataEN') {
      this.setState({ data: dataEN }) 
    }

    if(newData === 'dataPG') {
      this.setState({ data: dataPG }) 
    }
  }

  render() {
    return (
      <StyleRoot>
          <Navbar onChange={this.onNav.bind(this)}/>
          <Header data={this.state.data}></Header>
          <Description data={this.state.data}></Description>
          <Details data={this.state.data}></Details>
          <Gallery data={this.state.data}></Gallery>
          <Episodes data={this.state.data}></Episodes>
      </StyleRoot>
    );
  }
}

export default App;


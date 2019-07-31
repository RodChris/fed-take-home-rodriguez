import React from 'react'

import './Details.css';

const episodeHeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 10px'
}

const sectionEpisodes = {
    background: '#333',
    color: '#fff',
    alignItems: 'center',
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: '2fr 2fr',
    gridGap: '1em',
    gridAutoRows: 'minmax( auto)'
}

const listSeasonOneEp = {
    border: "5px solid #fff",
    color: '#fff',
    padding: '15px',
    margin: '1em'
  }
  
const listSeasonTwoEp = {
    border: "5px solid #fff",
    color: '#fff',
    padding: '15px',
    margin: '1em'
}

function episodes(props) {

    const seasonOneEpisodes = Object.keys(props.children["episode-list"])
    .map(igKey => {
        if(props.children["episode-list"][igKey].season === 1) {
            return (
                <div key={igKey}>
                    <p>{props.children["episode-list"][igKey].name}</p> 
                </div> 
            )      
        } else return
                  
    });

    const seasonTwoEpisodes = Object.keys(props.children["episode-list"])
    .map(igKey => {
        if(props.children["episode-list"][igKey].season === 2) {
            return (
                <div key={igKey}>
                    <p>{props.children["episode-list"][igKey].name}</p> 
                </div> 
            )      
        } else return
                  
    });

  return (
    <React.Fragment>
      <header style={episodeHeaderStyle}>
            <h1>Episodes</h1>
      </header>
      <section style={sectionEpisodes}>
        <div style={listSeasonOneEp}>
            <h2>Season One:</h2>
            {seasonOneEpisodes}
        </div>
        <div style={listSeasonTwoEp}>
            <h2>Season Two:</h2>
            {seasonTwoEpisodes}
        </div>
        
      </section>
  </React.Fragment>
  )
}

export default episodes;
import React from 'react'
import Radium from 'radium'

import './Details.css';

const episodeHeaderStyle = {
    background: '#696969',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0px 5px'
}

const sectionEpisodes = {
    background: '#696969',
    color: '#fff',
    alignItems: 'center',
    padding: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '1em',
    gridAutoRows: 'minmax( auto)',
    '@media (min-width: 1024px)' : {
        gridTemplateColumns: '2fr 2fr',
      }
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

const episodeLink = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: "white",
    ':hover': {
        color: 'darkBlue',
      }
}


function episodes(props) {

    if ((props.data["episode-list"])) {
        var seasonOneEpisodes = Object.keys(props.data["episode-list"])
        .map(igKey => {
            if(props.data["episode-list"][igKey].season === 1) {
                return (
                    <div key={igKey} style={{marginBottom: '2.5em'}}>
                        <a href="#" style={episodeLink} key={igKey}>{props.data["episode-list"][igKey].name}</a>
                        <p>Rating: {props.data["episode-list"][igKey].rating} / 10</p> 
                    </div> 
                )      
            } 
            if (window.UndefinedVariable) {
                
                Object.assign(window.UndefinedVariable, {})
            }
                    
        });

        var seasonTwoEpisodes = Object.keys(props.data["episode-list"])
        .map(igKey => {
            if(props.data["episode-list"][igKey].season === 2) {
                return (
                    <div key={igKey} style={{marginBottom: '2.5em'}}>
                        <a href="#" style={episodeLink} key={igKey}>{props.data["episode-list"][igKey].name}</a>
                        <p>Rating: {props.data["episode-list"][igKey].rating} / 10</p> 
                    </div> 
                )      
            } 
            if (window.UndefinedVariable) {
                
                Object.assign(window.UndefinedVariable, {})
            }
                    
        });
    }
    

  return (
    <React.Fragment>
      <header style={episodeHeaderStyle} id='episodes'>
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

export default Radium(episodes);
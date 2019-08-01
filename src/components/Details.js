import React from 'react'
import Radium from 'radium'

import './Details.css';

const sectionDetails = {
  background: '#696969',
  color: '#fff',
  alignItems: 'center',
  padding: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr',
  '@media (min-width: 1280px)' : {
    gridTemplateColumns: '5fr 3fr',
  }
}

const detailsLists = {
  border: "5px solid #fff",
  color: '#fff',
  padding: '10px',
  display: 'flex',
  width: '85%',
  margin: 'auto',
  '@media (min-width: 1280px)' : {
    width: 'auto'
  }
}

const listSnippets = {
  color: '#fff',
  padding: '10px',
  marginRight: '1em',
  flex: 1
}

const listLocations = {
  color: '#fff',
  padding: '10px',
  flex: 1,
  '@media (min-width: 1280px)' : {
    marginLeft: '3em'
  }
}

const detailsVideo = {
  padding: '10px 100px',
  margin: 'auto',
  '@media (min-width: 1280px)' : {
     margin: 'none',
  }
} 

const quoteText = {
  font: 'italic',
  color: '#fff',
  alignItems: 'center',
  padding: '1px',
} 

const quoteAuthor = {
  font: 'bold',
  color: '#fff',
  alignItems: 'center',
  padding: '5px 0px 10px 0px',
} 

function details(props) {

  const snippets = (props.data.snippets)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.data.snippets[igKey]}
                </li> 
            )                
        });

  const locations = (props.data.locations)
        .map(igKey => {
            return (
                <li key={igKey} style={{marginBottom: '10px'}}>
                    <span style={{textTransform: 'capitalize', marginBottom: '100px'}}>{igKey}</span>: {props.data.locations[igKey]}
                </li> 
            )                
        });

  return (
    <React.Fragment>
      <section style={sectionDetails}>
        <div style={detailsLists}>
          <div style={listSnippets}>
            <h4>Fun Facts:</h4>
            <ul>
                {snippets}
            </ul>
          </div>
          <div style={listLocations}>
            <h4>Locations:</h4>
            <ul>
                {locations}
            </ul>
          </div>
            
        </div>
        <div style={detailsVideo}>
          <p style={quoteText}>"{props.data.quote.text}"</p>
          <p style={quoteAuthor}>- {props.data.quote.author}</p>
          <iframe title="myFrame" width="500" height="300" src={props.data["video-embed"]}></iframe>
        </div>
    </section>
  </React.Fragment>
  )
}

export default Radium(details);
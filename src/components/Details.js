import React from 'react'

import './Details.css';

const sectionDetails = {
  background: '#333',
  color: '#fff',
  alignItems: 'center',
  padding: '20px',
  display: 'grid',
  gridTemplateColumns: '5fr 3fr',
}

const detailsLists = {
  border: "5px solid #fff",
  color: '#fff',
  padding: '10px',
  display: 'flex'
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
  flex: 1
}

const detailsVideo = {
  padding: '10px 100px',
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

  const snippets = (props.children.snippets)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.children.snippets[igKey]}
                </li> 
            )                
        });

  const locations = (props.children.locations)
        .map(igKey => {
            return (
                <li key={igKey} style={{marginBottom: '10px'}}>
                    <span style={{textTransform: 'capitalize', marginBottom: '100px'}}>{igKey}</span>: {props.children.locations[igKey]}
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
          <p style={quoteText}>"{props.children.quote.text}"</p>
          <p style={quoteAuthor}>- {props.children.quote.author}</p>
          <iframe title="myFrame" width="500" height="300" src={props.children["video-embed"]}></iframe>
        </div>
    </section>
  </React.Fragment>
  )
}

export default details;
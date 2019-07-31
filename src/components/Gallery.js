import React from 'react'

import './Description.css';

const galleryHeaderStyle = {
    background: '#DCDCDC',
    color: '#696969',
    textAlign: 'center',
    padding: '20px 10px'
  }

const sectionGallery = {
  background: '#DCDCDC',
  color: '#fff',
  alignItems: 'center',
  padding: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
}

const galleryImage = {
    alignItems: 'center',
    padding: '15px',
    margin: 'auto'
}

const galleryText = {
    color: '#000',
    textAlign: 'center',
    fontSize: '1.25em',
    font: 'bold'
}


function gallery(props) {

    const images = Object.keys(props.children.gallery)
        .map(igKey => {
            return (
                <div key={igKey} style={galleryImage}>
                    <img src={props.children.gallery[igKey].src} height="400" width="600" alt='logo' />
                    <p style={galleryText}>{props.children.gallery[igKey].text}</p> 
                </div> 
            )                
        });

  return (
    <React.Fragment>
        <header style={galleryHeaderStyle}>
            <h1 className="header-text">
                Gallery
            </h1>
        </header>
      <section style={sectionGallery}>
            {images}
      </section>
  </React.Fragment>
  )
}

export default gallery;
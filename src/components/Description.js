import React from 'react'

import './Description.css';
import logo from '../img/stranger-things_raw.png'

const sectionDescription = {
  background: '#DCDCDC',
  color: '#fff',
  alignItems: 'center',
  padding: '20px',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
}

const detailsLogo = {
  color: '#fff',
  margin: 'auto',
  alignItems: 'center',
  padding: '10px',
}

const detailsDescription = {
  color: '#000',
  alignItems: 'center',
  padding: '10px 100px',
}


function description(props) {

  return (
    <React.Fragment>
      <section id='inspiration' style={sectionDescription}>
          <div style={detailsLogo}>
              <img src={logo} alt='logo' />
          </div>
          <div style={detailsDescription}>
              <p>
                {props.children.description}
              </p>
          </div>
      </section>
  </React.Fragment>
  )
}

export default description;
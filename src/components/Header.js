import React from 'react'
import { Link } from 'react-scroll'

import './Header.css'

const headerStyle = {
  position: 'sticky',
  width: '100%',
  top: '60px',
  background: '#2a2a2a',
  color: '#fff',
  textAlign: 'center',
  padding: '5px'
}

const headerLinks = {
  marginBottom: '1em'
}

const linkTo = {
  cursor: 'pointer'
}

const Header = (props) => {
  return (
    <header style={headerStyle}>
      <h1 className="header">
        {props.data.heading}
      </h1>
      <div style={headerLinks}>
          <Link
              style={linkTo}
              activeClass="active"
              to="inspiration"
              spy={true}
              smooth={true}
              offset={-200}
              duration= {500}>Inspiration&nbsp;&nbsp;|  
          </Link>
          <Link
              style={linkTo}
              activeClass="active"
              to="gallery"
              spy={true}
              smooth={true}
              offset={-200}
              duration= {500}>&nbsp;&nbsp;Gallery&nbsp;&nbsp;|  
          </Link>
          <Link
              style={linkTo}
              activeClass="active"
              to="episodes"
              spy={true}
              smooth={true}
              offset={-200}
              duration= {500}>&nbsp;&nbsp;Episodes
          </Link>          
      </div>         
    </header>
  )
}

export default Header;
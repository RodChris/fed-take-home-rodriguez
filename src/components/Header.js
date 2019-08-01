import React from 'react'

import './Header.css'

const headerStyle = {
  position: 'sticky',
  width: '100%',
  top: '60px',
  background: '#2a2a2a',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const Header = (props) => {
  return (
    <header style={headerStyle}>
      <h1 className="header-text">
        {props.children.heading}
      </h1>
    </header>
  )
}

export default Header;
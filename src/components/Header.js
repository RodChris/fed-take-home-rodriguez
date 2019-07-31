import React from 'react'

import './Header.css'

const headerStyle = {
  background: '#333',
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
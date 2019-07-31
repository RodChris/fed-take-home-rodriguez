import React from 'react'

import './Header.css'

const navbarStyle = {
  position: 'sticky',
  top: 0,
  background: '#151515',
  color: '#fff',
  width: '100%',
  height: '60px'
}

const listGroup = {
    listStyle: 'none',
    textAlign: 'right',
    display: 'flex'
}

const listItem = {
    flex: 1
}

const Navabar = (props) => {
  return (
    <div style={navbarStyle}>
      <ul style={listGroup}>
          <li style={listItem}>Inspiration</li>
          <li style={listItem}>Gallery</li>
          <li style={listItem}>Episodes</li>
      </ul>
    </div>
  )
}

export default Navabar;
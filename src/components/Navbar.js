import React from 'react'

import './Navbar.css'

const navbarHeader = {
  position: 'sticky',
  top: 0,
  left: 0,
  background: '#000',
  color: '#fff',
  width: '100%',
  height: '60px'
}

const navbarInner = {
    alignItems: 'center',
    height: '100%',
    display: 'flex'
}

const navbarLogo = {
    padding: '0 2rem'
}

const navbarLogoLink = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.5rem'
}

const navbarItems = {
   
}

const listGroup = {
    listStyle: 'none',
    textAlign: 'right',
    display: 'flex'
}

const listItem = {
    margin: '0px 1.5em',
    flex: 1,

}

const navbarLink = {
    textDecoration: 'none',
    fontWeight: 'bold',
    color: "white",
    ':hover': {
        color: 'darkBlue',
      }

}

const navbarSelect = {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: '2em'
}

const selectText = {
    marginRight: '2em'
}

const selectInput = {
    height: '2em',
    margin: 'auto'
}

const Navbar = (props) => {
    function handleClick(event) {
        props.onChange(event.target.value)
    }


    return (
        <header style={navbarHeader}>
            <nav style={navbarInner}>
                <div style={navbarLogo}>
                    <a style={navbarLogoLink} href="/"><i>CoolShows</i></a>
                </div>
                <div style={navbarItems}>
                    <ul style={listGroup}>
                        <li style={listItem}><a href="#" style={navbarLink} key='1'>Home</a></li>
                        <li style={listItem}><a href="#" style={navbarLink} key='2'>Login</a></li>
                        <li style={listItem}><a href="#" style={navbarLink} key='3'>About</a></li>        
                    </ul>
                </div>
                <div style={navbarSelect}>
                    <p style={selectText}>Select Language:</p>
                    <select style={selectInput} onChange={handleClick.bind(this)}>
                        <option value="dataEN">English</option>
                        <option value="dataPG">Pig Latin</option>
                    </select>                   
                </div>
            </nav>
        
        </header>
    )
}

export default Navbar;
import React from 'react'

import { Link } from 'react-scroll'
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
    display: 'flex',
    alignItems: 'center',
    height: '100%'
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
    flex: 1
}

const Navbar = (props) => {
  return (
    <header style={navbarHeader}>
        <nav style={navbarInner}>
            <div style={navbarLogo}>
                <a style={navbarLogoLink} href="/"><i>CoolShows</i></a>
            </div>
            <div style={navbarItems}>
                <ul style={listGroup}>
                <li style={listItem}>Inspiration</li>
                <li style={listItem}>Gallery</li>
                <li style={listItem}>Episodes</li>
                    {/* <Link
                        activeClass="active"
                        to="inspiration"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                    </Link>
                    <Link
                        activeClass="active"
                        to="inspiration"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}> 
                    </Link>
                    <Link
                        activeClass="active"
                        to="inspiration"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                    </Link>           */}
                </ul>
            </div>
        </nav>
      
    </header>
  )
}

export default Navbar;
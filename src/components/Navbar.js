import React from 'react'
import{Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="Navbar">
        <div className="Navbar__container">
          <div className="Navbar__left">
            <Link to="/" className="logo">Resuma'</Link>
        
          </div>
          <div className="Navbar__right">
            <Link to="/about">About</Link>
             <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
             <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </div>
    )
}

export default Navbar;

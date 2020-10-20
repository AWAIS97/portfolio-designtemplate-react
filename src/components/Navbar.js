import React from 'react'

function Navbar() {
    return (
        <div className="Navbar">
        <div className="Navbar__container">
          <div className="Navbar__left">
            <h2>Resuma'</h2>
        
          </div>
          <div className="Navbar__right">
            <a href="#about">About</a>
             <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
             <a href="#contact">Contact us</a>
          </div>
        </div>
      </div>
    )
}

export default Navbar;

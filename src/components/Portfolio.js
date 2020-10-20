import React from 'react'
import {Link} from 'react-router-dom'
function Portfolio() {
    return (
        <div id="portfolio" className="portfolio">
        <div className="portfolio__container">
          <h1>Portfolio</h1>
          <div className="portfolio__main">
            <div className="portfolio__left">
              <img
                src={require("./images/portfolio-img.svg")}
                alt="dashboard"
                className="portfolio__img"
              />
            </div>
            <div className="portfolio__right">
              <h2>Web App for Company XYZ</h2>
              <p>
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't
                look even slightly believable.
              </p>
              <Link to="/">See more </Link>
            </div>
          </div>
          <div className="portfolio__projects">
            <img src={require("./images/portfolio1.svg")} alt="portfolio" />
            <img src={require("./images/portfolio2.svg")} alt="portfolio" />
            <img src={require("./images/portfolio3.svg")} alt="portfolio" />
          </div>
        </div>
      </div>
    )
}

export default Portfolio

import React from 'react'

function Main() {
    return (
        <div className="hero__section">
      <div className="hero__wrapper">
        <div className="column__left">
          <span>01 - Awais Hassan</span>
          <h1>FrontEnd Web Developer</h1>
          <p>
            I have years of experience working with small and large companies
            and I'm currently looking for the next opportunity.
          </p>
        </div>
        <div className="column__right">
          <img src={require("./images/web_developer.svg")} alt="brain" className="hero__img" />
        </div>
      </div>
    </div>
    )
}

export default Main

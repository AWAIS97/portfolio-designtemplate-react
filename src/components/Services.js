import React from 'react'

function Services() {
    return (
        <div id="services" className="services">
      <div className="services__container">
        <h1>Services</h1>
        <div className="services__grid">
          <div className="services__left">
            <div className="services__content">
              <img src={require("./images/chess.svg")} alt="chess piece" />
              <div className="services__desc">
                <h2>UX Strategy</h2>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words.
                </p>
              </div>
            </div>
            <div className="services__content">
              <img src={require("./images/wireframe.svg")} alt="chess piece" />
              <div className="services__desc">
                <h2>websites and web apps</h2>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words which don't look even slightly believable.
                </p>
              </div>
            </div>
            <div className="services__content">
              <img src={require("./images/virtual.svg")} alt="chess piece" />
              <div className="services__desc">
                <h2>Mobile Apps</h2>
                <p>
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="services__right">
            <img src={require("./images/Macbook.png")} alt="macbook" className="macbook" />
          </div>
        </div>
      </div>
      <div className="yellow__bar">
        <img src={require("./images/mail.svg")} alt="email icon" />
        <p>Email</p>
        <span>awais-01@info.com</span>
      </div>
    </div>
    )
}

export default Services

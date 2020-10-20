import React from 'react'

function About() {
    return (
        <div id="about"className="main__section">
      <div className="main__container">
        <h1>Hello, I'm Awais!</h1>
        <div className="main__content">
          <div className="main__text">
            <h2>
              I am Awais Hassan, a Front-end Developer living Jhelum, Pakistan.
            </h2>
            <p>
            I have rich experience in web site design & building and customization.
            Lorem Ipsum available, but the majority have suffered
                  alteration in some form, by injected humour, or randomised
                  words.
            </p>
            <ul>

                                <li><span>HTML</span></li>
                                <li><span>CSS</span></li>
                                <li><span>Javascript</span></li>
                                <li><span>WordPress</span></li>
                                <li><span>ReactJS</span></li>
                                <li><span>NodeJS/ExpressJS</span></li>
                                

                            </ul>
          </div>
          <div className="main__image">
            <img src={require("./images/mypic.PNG")} alt="face" className="main__img" />
          </div>
        </div>
      </div>
    </div>
    )
}

export default About

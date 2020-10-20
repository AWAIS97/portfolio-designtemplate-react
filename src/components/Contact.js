import React from 'react'

function Contact() {
    return (
        <div id="contact" className="contact">
        <div className="contact__bar">
          <img src={require("./images/mail.svg")} alt="email icon" />
          <p>Email</p>
          <span>awais-01@info.com</span>
        </div>
        <h1>Contact Me</h1>
      </div>
    )
}

export default Contact

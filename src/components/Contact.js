import React, { Component } from 'react'
import Header from './Header'

export default class Contact extends Component {
  render() {
    return (
        <div>
        <Header/>
        <div className="projects-landing-div">
            <div className="Contact">
                <div className="top-div">
                    <h1>Contact</h1>
                    <hr className="line-under"></hr>

                </div>
                <div>
                    <a href="https://www.linkedin.com/in/austin-brake/" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one">LinkedIn</p></a>
                    <a href="https://www.linkedin.com/in/austin-brake/" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one">Git Hub</p></a>
                    <p id="one">brake_austin@yahoo.com</p>
                    <p id="one">859-443-0755</p>

                </div>
            </div>

        </div>
      </div>
    )
  }
}

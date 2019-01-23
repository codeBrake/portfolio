import React, { Component } from 'react'
import Header from './Header'
import ProfilePic from '../bee-close-up-epeolus-minimus-33481.jpg'
import Pic from '../hal-and-daddy.jpg'

export default class About extends Component {
  render() {
    return (
        <div>
        <Header/>
        <div className="projects-landing-div">
            <div className="About">
                <div className="top-div">
                    <h1>About Me</h1>
                    <hr className="line-under"></hr>

                </div>
                <div className="about-div">
                    <div className="uhu">
                        <img className="profile-pic" src={ProfilePic} alt=""></img>
                    </div>
                    <div className="huh">
                        <img className="profile-pic" src={Pic} alt=""></img>
                    </div>
                </div>
                <div>
                    <p id="two">
                        Hello my name is Austin im 23 years old, I am a web developer located in Salt Lake City. I love what the city has to offer but i most enjoy my time in the mountains and with my family. I enjoy intilectual conversations as much as I enjoy talking about video games, snowboarding, and business ideas. If you do too, lets chat.
                    </p>
                </div>
                   
                
                
            </div>

        </div>
      </div>
    )
  }
}

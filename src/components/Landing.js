import React, {Component} from 'react'
import Header from './Header'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pic from '../hal-and-daddy.jpg'

class Landing extends Component{
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            message: ''
        }

       
    }
    componentDidMount(){
        
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log('name', this.state.name)
    }
    handleEmailChange = (e) => {
        this.setState({
            email: e.target.value
        })
        console.log('email', this.state.email)
    }
    handleMessageChange = (e) => {
        this.setState({
            message: e.target.value
        })
        console.log('message', this.state.message)
    }
    handleSubmit = () => {
        console.log('state', this.state)
        axios.post('/api/contact', this.state).then(response => {
            console.log(response)  
        })
    }
    
    render(){
        return(
            <div>
                <Header/>
                <div className="landing-div">

                    <div className="Landing">
                        <div className="top-landing">
                            <h1>
                                Web Developer
                                <hr className="line-under"></hr>
                            </h1>
                            <div className="skills-div">
                                
                                <p id="one">Javascript</p>
                                <p id="one">|</p>
                                <p id="one">HTML</p>
                                <p id="one">|</p>
                                <p id="one">CSS</p>
                                <p id="one">|</p>
                                <p id="one">React</p>
                                <p id="one">|</p>
                                <p id="one">Node</p>
                                
                            </div>
                            <div className="skills-div-2">
                            
                                <p id="one">Redux</p>
                                <p id="one">|</p>
                                <p id="one">Git</p>
                                <p id="one">|</p>
                                <p id="one">Express</p>
                            </div>

                        </div>
                        <div className="logo-div">
                            <div className="fade">
                                <i className="fab fa-js"></i>
                                <i className="fab fa-css3-alt"></i>
                                <i className="fab fa-node"></i>
                            </div>
                            <div className="fade-two">
                                <i className="fab fa-html5"></i>
                                <i className="fab fa-react"></i>
                                
                            </div>

                        </div>
                        
                    </div>
                            {/* <div className="quote-div">
                                <br></br>
                                <br></br>
                                <p>"{this.state.quote}" - {this.state.author}</p>
                                
                            </div> */}
                </div>
                <div className="landing-div-2">
                        <div className="section-title-project">
                            <h1 id="two">Projects</h1>
                            <hr id="section-under-proj"></hr>

                        </div>
                    <div className="projects">
                            <div className="inner-div-pics">
                                <div className="screenshot">
                                    
                                </div>
                                <br></br>
                                <div className="screenshot2">
                                    
                                </div>
                            </div>

                            <div className="inner-div">
                                
                                <div className="description">
                                    <div className="skill-stack">
                                        <h1 id="two-2">Dang Snowboard Shop</h1>
                                        <hr className="line-under"></hr>
                                        <p id="two-2">React | HTML | Javascript | CSS | Redux | Postico | Node</p>
                                        <a href="https://snowboardshop.austinbrake.info" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">https://snowboardshop.austinbrake.info</p></a>
                                        <a href="https://github.com/codeBrake/personal-project" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">https://github.com/codeBrake/personal-project</p></a>
                                    </div>
                                    
                                    <div className="project-description">
                                        <div className="inner-proj-description">
                                        
                                            <li className="list">Full-stack ecommerce site built with React</li>
                                            <li className="list">Backend runs Node, using massive and express</li>
                                            <li className="list">HTML and CSS integrated for styling</li>
                                            <li className="list">Wire-framed project, mobile responsive</li>
                                            <li className="list">Foreign keys and JOIN statements</li>
                                            <li className="list">Axios to define API endpoints with full CRUD</li>
                                            <li className="list">Implementing stripe for user checkout</li>
                                        </div> 

                                    </div> 

                                </div>
                                

                            </div>
                            {/* <iframe className="shop-frame" width="420" height="310" src="https://snowboardshop.austinbrake.info/#/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                            

                    </div>
                    <br></br>
                    <br></br>
                    {/* <hr className="line-under"></hr> */}
                    <div className="projects">
                            
                            <div className="inner-div">
                                <div className="skill-stack">
                                    <h1 id="two-2">Desert Spoon</h1>
                                    <hr className="line-under"></hr>
                                    <p id="two-2">React | HTML | Javascript | CSS | Redux | Postico | Node</p>
                                    <a href="https://desert-spoon.com" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">https://desert-spoon.com</p></a>
                                    <a href="https://github.com/theonewithjess/desertspoon" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">https://github.com/theonewithjess/desertspoon -- group project</p></a>

                                </div>
                                <div className="project-description"> 
                                    <div className="inner-proj-description">
                                        <li className="list">Full-stack fitness app</li>
                                        <li className="list">Track calories and meet personal fitness goals</li>
                                        <li className="list">Backend runs Node, using massive and express</li>
                                        <li className="list">HTML and CSS integrated for styling</li>
                                        <li className="list">Wire-framed project, mobile responsive</li>
                                        <li className="list">Axios to define API endpoints with full CRUD</li>

                                    </div>

                                </div> 
                                

                            </div>

                            <div className="inner-div-pics">
                                <div className="two-screenshot">
                                    
                                </div>
                                <br></br> 

                                <div className="two-screenshot2">
                                    
                                </div>
                                   
                                
                                

                            </div>
                            {/* <iframe className="shop-frame" width="420" height="310" src="https://snowboardshop.austinbrake.info/#/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

                            

                    </div>

                </div>
                <div className="landing-div-4">
                   
    
                    <div className="landing-div-3">
                        
                        <div className="aboutme-pic"> 
                            <div className="section-title">
                                <h1 id="two">About me</h1>
                                <hr id="under-about"></hr>
                            </div>   
                            <div className="paragraph">
                                <p id="three">Hi, my name is Austin Brake. I'm the type of guy who rellies on a fast-paced environment to keep me balanced and is always eager to tackle obstacles head on. Was raised to believe that hardwork pays off, that if you work hard enough you can accomplish anything. I am a former professional sales representive commited to giving any client the expectation they deserve. I use that dedication in every aspect of my life, and understand what it takes to achieve goals. Outside of the office, I'm an experienced snowboarder, father, and mountain enthusiast.</p>

                            </div>
                        
                        </div>
                        <div className="aboutme"> 
                            
                         <img className="pic" src={Pic} alt=""></img>
                          
                        </div>

                    </div>

                    <div className="contact-div">
                        <div className="contact-container">
                            <div className="section-title-contact">
                                <h1 id="two">Get in touch</h1>
                                <hr id="section-under"></hr>
                                <br></br>
                                <p>Whether your a small business owner or CEO of a multi-billion dollar empire, Im always up for a challenge and willing to help someone in need. Never hesitate to contact me!</p>

                            </div>
                            <div className="input-div">
                                
                                    <form className="inputs">

                                        <input type="text" placeholder="Name" className="name-email" onChange={this.handleNameChange}></input>
                                        <input type="text" placeholder="E-Mail" className="name-email" onChange={this.handleEmailChange}></input>
                                        <input type="text" placeholder="Message" className="message" onChange={this.handleMessageChange}></input>
                                        
                                        <button className="submit-button" onClick={this.handleSubmit}>Submit</button>

                                    </form>
                                    

                                
                                <div className="info">
                                    
                                    <a href="https://www.linkedin.com/in/austin-brake/" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">https://www.linkedin.com/in/austin-brake/</p></a>
                                    {/* <a href="https://github.com/codeBrake/personal-project" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">https://github.com/codeBrake/personal-project</p></a> */}
                                    <a href="https://github.com/codeBrake" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">https://github.com/codeBrake</p></a>
                                    <a href="brake_austin@yahoo.com" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one-1">brake_austin@yahoo.com</p></a>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        )
    }

}
export default Landing
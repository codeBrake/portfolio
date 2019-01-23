import React, { Component } from 'react'
import Header from './Header'


export default class Projects extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="projects-landing-div">
                    {/* <h1>Projects</h1>
                    <hr className="line-under"></hr> */}
            <div className="Projects">
                {/* <div className="top-div">

                </div> */}

                    <a href="https://snowboardshop.austinbrake.info" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one">Dang Snowboard Shop - Individual Project</p></a>
                    {/* <p id="one">Skills used</p> */}
                    <p id="two">React | HTML | Javascript | CSS | Redux | Postico | Node</p>
                <div className="project-div">
                    <div className="project-description"> 
                        <li className="list">Full-stack ecommerce site built with React</li>
                        <li className="list">Backend runs Node, using massive and express</li>
                        <li className="list">HTML and CSS integrated for styling</li>
                        <li className="list">Wire-framed project, mobile responsive</li>
                        <li className="list">Foreign keys and JOIN statements</li>
                        <li className="list">Axios to define API endpoints with full CRUD</li>
                        <li className="list">Implementing stripe for user checkout</li>

                    </div>
                    <div className="project-photo">
                        
                        <iframe className="shop-frame" width="420" height="310" src="https://snowboardshop.austinbrake.info/#/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <br></br>
                <hr className="line-under"></hr>
                <br></br>
                <a href="https://snowboardshop.austinbrake.info" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one">Dang Snowboard Shop - Individual Project</p></a>
                
                <div className="project-div">
                    <div className="project-description"> 
                        <li className="list">Full-stack ecommerce site built with React</li>
                        <li className="list">Backend runs Node, using massive and express</li>
                        <li className="list">HTML and CSS integrated for styling</li>
                        <li className="list">Wire-framed project, mobile responsive</li>
                        <li className="list">Foreign keys and JOIN statements</li>
                        <li className="list">Axios to define API endpoints with full CRUD</li>
                        <li className="list">Implementing stripe for user checkout</li>

                    </div>
                    <div className="project-photo">
                        <iframe className="shop-frame" width="420" height="310" src="https://snowboardshop.austinbrake.info/#/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <br></br>
                <hr className="line-under"></hr>
                <br></br>
                <a href="https://snowboardshop.austinbrake.info" target="_blank" rel="noopener noreferrer" className="project-links"><p id="one">Dang Snowboard Shop - Individual Project</p></a>
                
                <div className="project-div">
                    <div className="project-description"> 
                        <li className="list">Full-stack ecommerce site built with React</li>
                        <li className="list">Backend runs Node, using massive and express</li>
                        <li className="list">HTML and CSS integrated for styling</li>
                        <li className="list">Wire-framed project, mobile responsive</li>
                        <li className="list">Foreign keys and JOIN statements</li>
                        <li className="list">Axios to define API endpoints with full CRUD</li>
                        <li className="list">Implementing stripe for user checkout</li>

                    </div>
                    <div className="project-photo">
                        <iframe className="shop-frame" width="420" height="310" src="https://snowboardshop.austinbrake.info/#/" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                
                
                
            </div>
            
        </div>
      </div>
    )
  }
}

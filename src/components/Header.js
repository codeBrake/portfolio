import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';



class Header extends Component{
    render(){
        return(
            <div className="Header">
                <div className="header-name">
                    <h1 id="title">Austin Brake</h1>

                </div>
                <div className="header-links">
                    {/* <Link to="/" className="header-routes"><p id="one">home</p></Link>
                    <Link to="/projects" className="header-routes"><p id="one">projects</p></Link>
                    <Link to="/about" className="header-routes"><p id="one">about me</p></Link>
                    <Link to="/contact" className="header-routes"><p id="one">contact</p></Link> */}
                    
                    

                </div>
                <div className="header-social">
                    <div>
                    <a href="https://www.linkedin.com/in/austin-brake/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div>
                    <a href="https://github.com/codeBrake?tab=repositories" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                    </div>
                </div>
            </div>
        )
    }

}
export default Header
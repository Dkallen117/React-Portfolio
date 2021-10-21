import React, { Component } from 'react';
import '../assets/css/style.css'
import circuitVideo from '../assets/images/circuit-video.mp4'
import resumePDF from '../assets/docs/Daniels-Web-Resume.pdf'
import { MDBContainer } from 'mdb-react-ui-kit';
export default class Header extends Component {
  render() {
return (
<MDBContainer fluid>
<header>
<div className="row d-flex justify-content-center align-items-center" id="top-Section">
  <video playsInline autoPlay muted loop>
    <source src={circuitVideo} type="video/mp4"></source>
  </video> 
    <nav>
      <div className="wow fadeInLeft mr-2"
           style={{
           backgroundColor:  '#00000099',
           color:'#FFFFFF',
           width: '100%',
           marginRight: '7px',
           display: 'flex-column',
           borderRadius: '25px',
           }}>
        
        <h1 className="my-auto text-center" >Hello, I'm </h1><h1 className="linear-wipe my-auto text-center">Daniel Allen</h1>
        <h2 className="my-auto text-center mx-2">A Web and Game Developer</h2>
        <a  href="#main-Section">
          <div className="btn-container">
            <div className="flip-button mx-auto" btn-after="My Portfolio">
              <p className="glow my-auto">Check Out</p>
              </div>
              </div>
              </a>      
          </div>
      <ul className="nav nav-pills animated fadeInRight mx-3 my-2">
        <li className="nav-item mr-2">
          <a className="nav-link active light-blue" 
          href="https://github.com/Dkallen117" 
          target="_blank" 
          rel="noreferrer"
          data-mdb-toggle="tooltip" 
          title="Github">GitHub</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active light-blue" 
          href="https://www.linkedin.com/in/danielkentonallen/"
          target="_blank"
          rel="noreferrer"
          data-mdb-toggle="tooltip"
          title="LinkedIn">LinkedIn</a>
        </li>
        <li className="nav-item mx-2">
          <a className="nav-link active light-blue" 
          href= {resumePDF}
          target="_blank"
          rel="noreferrer"
          download="resume"
          data-mdb-toggle="tooltip"
          title="Resume">Resume</a>
        </li>
      </ul>  
    </nav>
</div>
</header>  
</MDBContainer>  
    );
  }
}
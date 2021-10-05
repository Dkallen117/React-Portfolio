import React, { Component } from 'react';
import '../assets/css/style.css'
import circuitVideo from '../assets/images/circuit-video.mp4'
import resumePDF from '../assets/docs/Daniels-Web-Resume.pdf'
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
export default class Header extends Component {
  render() {
return (
 
<MDBContainer fluid>

<header>

<div className="row d-flex justify-content-center" id="top-Section">


  <video playsInline autoPlay muted loop>
    <source src={circuitVideo} type="video/mp4"></source>
  </video>
 
    <nav>
      <div className='mr-2'>
      
      <div className="wow fadeInLeft"
           style={{
           backgroundColor:  '#00000099',
           color:'#FFFFFF',
           width: '100%',
           height: '100px',
           marginRight: '7px',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           }}>
        
        <h1 className="linear-wipe my-auto">Daniels Portfolio</h1>
        
      </div>
      
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
import React, { Component } from 'react';
import '../assets/css/style.css'
import circuitVideo from '../assets/images/circuit-video.mp4'
import resumePDF from '../assets/docs/Daniels-Web-Resume.pdf'
export default class Header extends Component {
  render() {
 
    return (
      
  

<header>


<div class="row d-flex justify-content-center" id="top-Section">

  <video playsinline autoPlay muted loop id="bgvid">
    <source src={circuitVideo} type="video/mp4"></source>
  </video>
    
    <nav>
      
      <div class="wow fadeInLeft">
        <h1 class="linear-wipe">Daniels Portfolio</h1>
      </div>
     
      <ul class="nav nav-pills animated fadeInRight">
        <li class="nav-item mr-2">
          <a class="nav-link active light-blue" 
          href="https://github.com/Dkallen117" 
          target="_blank" 
          rel="noreferrer"
          data-mdb-toggle="tooltip" 
          title="Github">GitHub</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active light-blue" 
          href="https://www.linkedin.com/in/danielkentonallen/"
          target="_blank"
          rel="noreferrer"
          data-mdb-toggle="tooltip"
          title="LinkedIn">LinkedIn</a>
        </li>
        <li class="nav-item mx-2">
          <a class="nav-link active light-blue" 
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

     
    );
  }
}
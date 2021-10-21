import React, { Component } from 'react';
import '../assets/css/style.css'
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import resumePDF from '../assets/docs/Daniels-Web-Resume.pdf'
export default class NavBar extends Component {
  render() {
   return (
<MDBContainer fluid className="px-0" id="nav-Bar">  

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="#main-Section">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link smooth-scroll" href="#work-Title">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href= {resumePDF}
          target="_blank"
          rel="noreferrer"
          download="resume"
          data-mdb-toggle="tooltip"
          title="Resume">Resume</a>
        </li>
      </ul>  
    </div>
</nav>
</MDBContainer>   
  );
}
}
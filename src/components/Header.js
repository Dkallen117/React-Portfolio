import React, { Component } from 'react';
import '../assets/css/style.css'
import circuitVideo from '../assets/images/circuit-video.mp4'
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
    </nav>
</div>
</header>  
</MDBContainer>  
    );
  }
}
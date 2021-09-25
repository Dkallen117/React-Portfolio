import React, { Component } from 'react';
import '../assets/css/style.css'
export default class Footer extends Component {
  render() {
   return (
 <footer className ="row justify-content-center my-4 animated fadeInUp">

    <div className ="col-12 col-sm-6 col-md-4">
      <address>

        <h5>
          Email me at: <a href="mailto:danielkentonallen@gmail.com">danielkentonallen@gmail.com </a>
        </h5>

      </address>
    </div>

  </footer>
    );
  }
}
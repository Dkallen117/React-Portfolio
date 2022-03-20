import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import { WOW } from 'wowjs';
import $ from "jquery";

class App extends Component {

  // Defining WOW 
  componentDidMount() {
    const wow = new WOW({
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,
      live: false, // default
    });
    let scrolled = false;
    $(document).on('scroll', function () {
      if (!scrolled) {
        scrolled = true;
        wow.init();
      }
    });

  }
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import WOW from 'wowjs';

class App extends Component {

  // Defining WOW 
componentDidMount() {
  new WOW.WOW({
      boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
}).init();
}
  render() {
    return (
      <div className="App">
        <Header/>
        <NavBar/>
        <Portfolio /> 
        <Footer />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
   
  
        <Portfolio />
      
        <Footer />
      </div>
    );
  }
}

export default App;
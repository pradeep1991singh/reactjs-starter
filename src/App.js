// `App.js`: Complete app content component

import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
        <Footer />       
      </div>
    );
  }
}

export default App;

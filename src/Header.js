// `Header.js`: Header component

import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <IndexLink to="/" className="home" activeClassName="active">
          <img src={logo} className="app-logo" alt="logo" />
          <p>ReactJs Starter</p>
        </IndexLink>        
        <ul role="nav">
          <li>
            <Link to="/about" activeClassName="active">About</Link>            
          </li>
          <li className="nav-links">
            <Link to="/contact" activeClassName="active">Contact</Link>
          </li>
        </ul>
      </div>        
    );
  }
}

export default Header;

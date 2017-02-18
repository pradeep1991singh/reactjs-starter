// `HomeView.js`: Home Page component

import React, { Component } from 'react';

class HomeView extends Component {
  render() {
    return (
      <div className="main-content">
        <h2>ReactJs Starter Home page</h2>
        <ul>
          <li>To update header and navigation, edit <code>src/Header.js</code> and save to reload. </li>
          <li>To update about or contact view, edit <code>src/AboutView.js or src/ContactView.js</code> and save to reload.</li>
          <li>And to update footer, edit <code>src/Footer.js</code> and save to reload.</li>
        </ul>
      </div>
    );
  }
}

export default HomeView;

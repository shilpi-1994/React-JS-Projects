import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <div className="App">
        <ol style={{textAlign: 'left'}}>
          <li>Welcome to React routing demo!</li>
          <li>We will learn to add routes, passing the params, requests redirects.</li>
        </ol>
      </div>
    );
  }
}

export default App;

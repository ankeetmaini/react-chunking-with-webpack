import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link, Router, browserHistory } from 'react-router';

const App = ({ children }) => {
  return (
    <div>
      <h1>Splitting with Webpack!</h1>
      <nav>
        <Link style={{margin: 5}} to="/">Home</Link>
        <Link style={{margin: 5}} to="/about">About</Link>
        <Link style={{margin: 5}} to="/ball">Ball</Link>
        <Link style={{margin: 5}} to="/goat">Goat</Link>
        <Link style={{margin: 5}} to="/river">River</Link>
      </nav>

      {children || <h2>Children components would show up here</h2>}
    </div>
  );
};

export default App;

// can't import above before exporting App
const routes = require('./routes').default;

render(
  <Router history={browserHistory}>
    {routes}
  </Router>,
  document.getElementById('app')
);
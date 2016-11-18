import React, { Component } from 'react';
import { render } from 'react-dom';

const App = () => {
  return (
    <h1>Splitting with Webpack!</h1>
  );
};

render(
  <App/>,
  document.getElementById('app')
);
import React from 'React';
import { Route, IndexRoute } from 'react-router';

import App from './app';
import About from './components/About';
import Ball from './components/Ball';
import Goat from './components/Goat';
import River from './components/River';

const routes = (
  <Route path='/' component={App}>
    <Route path='about' component={About} />
    <Route path='ball' component={Ball} />
    <Route path='goat' component={Goat} />
    <Route path='river' component={River} />
  </Route>
);

export default routes; 


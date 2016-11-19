import React from 'React';
import { Route, IndexRoute } from 'react-router';

import App from './app';

// see using `bundle-loader` on Route components
// read more here https://github.com/webpack/bundle-loader
// you can add that to webpack config but need to add good regex
// so that only route components are selected
import About from 'bundle?lazy!./components/About';
import Ball from 'bundle?lazy!./components/Ball';
import Goat from 'bundle?lazy!./components/Goat';
import River from 'bundle?lazy!./components/River';

// function which gets the bundle wrapper provided by bundle-loader
const lazyLoadRoute = bundle => (nextState, cb) => {
  // bundle is a function which lazy loads the actual module which is imported above
  // like About, Ball etc.
  // and it won't fetch unless called
  bundle(routeModule => {
    // calling react-router's callback telling it
    // we have the route Component code, do the routing now :P
    cb(null, routeModule.default); // note `default` here, ES6 :P
  });
};

// ES5 equivalent of lazyLoadRoute function to understand better
// var lazyLoadRoute = function lazyLoadRoute(bundle) {
//   return function (nextState, cb) {
//     bundle(function (routeModule) {
//       cb(null, routeModule.default);
//     });
//   };
// };

const routes = (
  <Route path='/' component={App}>
    <Route path='about' getComponent={lazyLoadRoute(About)} />
    <Route path='ball' getComponent={lazyLoadRoute(Ball)} />
    <Route path='goat' getComponent={lazyLoadRoute(Goat)} />
    <Route path='river' getComponent={lazyLoadRoute(River)} />
  </Route>
);

export default routes;
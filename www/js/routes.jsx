var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var HashHistory = require('react-router/lib/HashHistory')

var Main = require('./components/main.jsx');

module.exports = (
  <Router history={new HashHistory}>
      <Route path="/" component={Main}>
      </Route>
  </Router>
);
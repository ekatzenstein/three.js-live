import React from 'react';
import { Router, Route, Redirect } from 'react-router';

import App from './App';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path ="/:id" component={App}/>
  </Router>
);

export default Routes;

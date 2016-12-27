import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import App from './App';





const Routes = (props) => (
  <Router {...props}>

    <Route path="/" component={App}>
    <IndexRedirect to="/home" />
    </Route>
    <Route path ="/:id" component={App}/>


  </Router>
);

export default Routes;

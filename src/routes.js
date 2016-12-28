import React from 'react';
import {Router, Route} from 'react-router';

import App from './containers/App';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={App}/>
        <Route path="/:id" component={App}/>
    </Router>
);

export default Routes;

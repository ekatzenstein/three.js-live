import React from 'react';
import {Router, Route, IndexRedirect} from 'react-router';

import AppOG from './containers/AppOG';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component={AppOG}>
            <IndexRedirect to="/home"/>
        </Route>
        <Route path="/:id" component={AppOG}/>
    </Router>
);

export default Routes;

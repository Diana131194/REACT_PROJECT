import React from 'react';
import {  Route, IndexRoute, Switch } from 'react-router';
import { BrowserRouter} from 'react-router-dom'

/**
 * Import all page components here
 */
import App from './components/App';
import Login from './components/Login';
import SelfProfile from './components/SelfProfile';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/login" component={Login}/>
            <Route path='/my_profile' component={SelfProfile} />
        </Switch>
    </BrowserRouter>
);
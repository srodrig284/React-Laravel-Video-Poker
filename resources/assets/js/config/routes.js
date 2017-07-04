/**
 * Created by Sandra on 7/4/17.
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Dashboard from "../components/Dashboard";
import Game from "../components/children/Game";

/*export the routes*/
let myroutes = (
    <Router history={browserHistory}>
        <Route path="/home" component={Dashboard}/>
        <Route path="/Game" component={Game}/>
    </Router>

);

export default myroutes;
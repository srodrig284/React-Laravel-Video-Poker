/**
 * Created by Sandra on 7/4/17.
 */
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Dashboard from "../components/Dashboard";
import Game from "../components/children/Game";

/*export the routes*/
let myroutes = (

    <Router>
        <Switch>
            <Route path="/" component={Dashboard}>
                <Route path="Game" component={Game}/>
            </Route>
        </Switch>
    </Router>
);

export default myroutes;
/**
 * Created by Sandra on 7/4/17.
 */
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Dashboard from "../components/Dashboard";

/*export the routes*/
let myroutes = (

    <Router>

            <Switch>
                <Route path="/home" component={Dashboard} />
            </Switch>

    </Router>
);

export default myroutes;
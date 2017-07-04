/**
 * Created by Sandra on 7/3/17.
 */
import React, { Component } from 'react'

import {Link} from 'react-router';


class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Video Poker Dashboard</div>

                            <div className="panel-body">
                                <h1>Choose your game!</h1>
                                <p>
                                    <Link to="/Game"><button className="btn btn-primary btn-lg">Play Jacks or Better</button></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console
/*
if (document.getElementById('example')) {
    ReactDOM.render(<Dashboard />, document.getElementById('example'));
}*/

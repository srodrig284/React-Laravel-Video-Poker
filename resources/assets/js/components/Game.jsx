/**
 * Created by Sandra on 7/4/17.
 */
import React, { Component } from 'react'

import './Game.css'
import Payout from './Payout';


class Game extends Component {
    render() {
        return (
            <div className="container">
                <Payout />
            </div> // end container
        );
    }
}

export default Game;

// We only want to try to render our component on pages that have a div with an ID
// of "example"; otherwise, we will see an error in our console
/*
 if (document.getElementById('example')) {
 ReactDOM.render(<Dashboard />, document.getElementById('example'));
 }*/

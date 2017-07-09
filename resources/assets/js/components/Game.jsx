/**
 * Created by Sandra on 7/4/17.
 */
import React, { Component } from 'react'

import '../../../../public/css/mystylesheet.css'
import Payout from './children/Payout';
import Cards from './children/Cards';
import Controls from './children/Controls';
import cardBack from '../../../../public/images/cardBack_red2.png'


class Game extends Component {
    constructor() {
        super();
        this.state = {
            squares: Array(5).fill(<img src={cardBack}/>)
        };
    }


    render() {
        return (
            <div className="container">
                <Payout />
                <Cards
                    squares={this.state.squares}
                    /*onClick={i => this.handleClick(i)}*/
                />
                <Controls />
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

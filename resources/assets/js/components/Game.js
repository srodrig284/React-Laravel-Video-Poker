/**
 * Created by Sandra on 7/4/17.
 */
/**
 * Created by Sandra on 7/3/17.
 */
import React, { Component } from 'react'


class Game extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Jacks or better</div>

                            <div className="panel-body">
                                <h1>This is the Game component</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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

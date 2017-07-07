import React, { Component } from 'react'

class Cards extends Component {
    render() {
        return (
            <div className="row game_background">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <div className="col-md-1">
                            </div>
                            <div className="col-md-2">
                                Card 1
                            </div>
                            <div className="col-md-2">
                                Card 2
                            </div>
                            <div className="col-md-2">
                                Card 3
                            </div>
                            <div className="col-md-2">
                                Card 4
                            </div>
                            <div className="col-md-2">
                                Card 5
                            </div>
                            <div className="col-md-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;
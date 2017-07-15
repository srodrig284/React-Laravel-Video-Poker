import React, { Component } from 'react'

class Controls extends Component {
    render() {
        return (
            <div className="div_margin">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-1"/>
                    <div className="col-md-3">
                        <div className="controls_words">
                        CREDITS: 1000 {/*DISPLAY CREDITS HERE*/}
                        </div>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-1 plusminus">
                        <button type="submit" className="control_buttons" onClick={this.props.onClick}>
                            -
                        </button>
                    </div>
                    <div className="col-md-1 plusminus">
                        <div className="bet_words">
                            Bet 1 {/*DISPLAY BET LEVEL*/}
                        </div>
                    </div>
                    <div className="col-md-1 plusminus">
                        <button type="submit" className="control_buttons" onClick={this.props.onClick}>
                            +
                        </button>
                    </div>
                    <div className="col-md-1"/>
                    <div className="col-md-3">
                        <button type="submit" className="deal_button button" onClick={this.props.onClick}>
                            Draw
                        </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Controls;
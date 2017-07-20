import React, { Component } from 'react'

function ResetButton(props) {
    if(props.disabledReset)
    {
        return <button type="submit" className="control_buttons disabled" disabled={props.disabledReset} onClick={props.resetClicked}>
            Reset
        </button>;
    }
    else
    {
        return <button type="submit" className="control_buttons" disabled={props.disabled} onClick={props.resetClicked}>
            Reset
        </button>;
    }
}


class Controls extends Component {

    renderReset() {
        return (
            <ResetButton
                disabledReset={this.props.disableReset}
                resetClicked={this.props.resetClicked}
            />
        )
    }

    render() {
        return (
            <div className="div_margin">
                <div className="row">
                        <div className="col-sm-1"/>
                        <div className="col-sm-3 plusminus">
                            <div className="controls_words">
                            CREDITS: {this.props.credits}
                            </div>
                        </div>
                        <div className="col-sm-1 plusminus">
                            <button type="submit" className="control_buttons" disabled={this.props.disableBet} onClick={this.props.minusClicked}>
                                -
                            </button>
                        </div>
                        <div className="col-sm-1 plusminus">
                            <div className="bet_words">
                                Bet {this.props.bet}
                            </div>
                        </div>
                        <div className="col-sm-1 plusminus">
                            <button type="submit" className="control_buttons" disabled={this.props.disableBet} onClick={this.props.plusClicked}>
                                +
                            </button>
                        </div>
                        {/*<div className="col-sm-1"/>*/}
                        <div className="col-sm-2">
                            <button type="submit" className="deal_button button" onClick={this.props.drawClicked}>
                                Draw
                            </button>
                        </div>
                        <div className="col-sm-2">
                            {/*<button type="submit" className="control_buttons disabled" disabled={this.props.disableReset} onClick={this.props.resetClicked}>
                                Reset
                            </button>*/}
                            {this.renderReset()}
                        </div>
                        <div className="col-sm-1"/>
                </div>
            </div>
        )
    }
}
export default Controls;
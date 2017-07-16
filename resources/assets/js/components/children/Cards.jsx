import React, { Component } from 'react'


function Square(props) {
    return (
        <button className="square" onClick={props.onClick} disabled={props.disabled}>
            <img className="card_size animated flip" src={props.value}/>
        </button>
    );
}

function Message(props) {
    if(props.disabled)
    {
        return <span className="message animated infinite flash">{props.message}</span>;
    }
    else
    {
        return <span className="message animated fadeInLeftBig">{props.message}</span>;
    }
}




class Cards extends Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.cardsquares[i].Image}
                onClick={() => this.props.onClick(i)}
                disabled={ this.props.disabled }
            />
        );
    }

    renderMessage() {
        return (
            <Message
                disabled={this.props.disabled}
                message={this.props.message}
            />
        )
    }

    render() {
        return (
            <div className="div_margin">
                {/* DISPLAY MESSAGE*/}
                <div className="centerDiv">
                    {this.renderMessage()}
                </div>

                {/* DISPLAY LOCKED ABOVE CARDS*/}
                <div className="row">
                    <div className="col-md-12 rowposition">
                        <div className="col-md-1">
                        </div>
                        {/* Display HOLD if card is locked*/}
                        {this.props.cardsquares.map((data, i) => {
                            let returnString = function(){
                              if(data.Locked === true){
                                  return 'H O L D';
                              }else{
                                  return null;
                              }
                            };
                            return (
                                <div className="col-md-2 centerDiv" key={i}>
                                    <div className="holdCard" >{returnString()}</div>
                                </div>
                            );
                        })}
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>

                {/*DISPLAY CARDS*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-1">
                        </div>
                        {this.props.cardsquares.map((data, i) => {
                            return (
                                <div className="col-md-2" key={i}>
                                    {this.renderSquare(i)}
                                </div>
                            );
                        })}
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;
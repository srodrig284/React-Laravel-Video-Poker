import React, { Component } from 'react'
import cardBack from '../../../../../public/images/cardBack_red2.png'


function Square(props) {
    return (
        <button className="square" onClick={props.onClick} disabled={props.disabled}>
            <img className="card_size" src={props.value}/>
        </button>
    );
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

    render() {
        return (
            <div className="div_margin">
                {/* DISPLAY MESSAGE*/}
                <div className="centerDiv">
                    <span className="message">{this.props.message}</span>
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
                                  return 'LOCKED';
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
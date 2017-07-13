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
                {/* Display HOLD if card is locked*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-1">
                        </div>
                        {this.props.cardsquares.map((data, i) => {
                            let returnString = function(){
                              if(data.Locked === true){
                                  return 'LOCKED';
                              }else{
                                  return null;
                              }
                            };
                            return (
                                <div className="col-md-2" key={i}>
                                    <span className="holdCard" >{returnString()}</span>
                                </div>
                            );
                        })}
                        <div className="col-md-1">
                        </div>
                    </div>
                </div>

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
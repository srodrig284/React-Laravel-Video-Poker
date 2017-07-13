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
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-1">
                        </div>
                        {/*<div className="col-md-2">
                            {this.renderSquare(0)}
                        </div>
                        <div className="col-md-2">
                            {this.renderSquare(1)}
                        </div>
                        <div className="col-md-2">
                            {this.renderSquare(2)}
                        </div>
                        <div className="col-md-2">
                            {this.renderSquare(3)}
                        </div>
                        <div className="col-md-2">
                            {this.renderSquare(4)}
                        </div>*/}
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
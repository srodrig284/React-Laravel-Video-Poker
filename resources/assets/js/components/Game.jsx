/**
 * Created by Sandra on 7/4/17.
 */
import React, { Component } from 'react'
import marquee from '../../../../public/images/JacksOrBetterMarguee.jpeg'
import onechip from '../../../../public/images/OneChip.png'
import twochip from '../../../../public/images/TwoChip.png'
import threechip from '../../../../public/images/ThreeChip.png'
import fourchip from '../../../../public/images/FourChip.png'
import fivechip from '../../../../public/images/FiveChip.png'
import './Game.css'


class Game extends Component {
    render() {
        return (
            <div className="container">
             <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <table className="TITLE">
                                <tr>
                                    <td></td>
                                    <td>
                                        <img src={marquee} alt=""/>
                                    </td>
                                    <td></td>
                                </tr>
                            </table>
                        </div>

                        <div className="panel-body">
                            <table className="MARQUEE">
                              <thead>
                                <tr>
                                    <td >
                                    </td>

                                    <td>
                                                <img alt="Bet 1" src={onechip} />
                                    </td>

                                    <td>
                                                <img alt="Bet 2" src={twochip} />
                                    </td>

                                    <td>
                                                <img alt="Bet 3" src={threechip} />
                                    </td>

                                    <td>
                                                <img alt="Bet 4" src={fourchip} />
                                    </td>
                                    <td>
                                        <img alt="Bet 1" src={fivechip} />
                                    </td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                    <td className="PRIZE">
                                        Royal Flush
                                    </td>
                                    <td>
                                        250
                                    </td>
                                    <td>
                                        500
                                    </td>
                                    <td>
                                        750
                                    </td>
                                    <td>
                                        1000
                                    </td>
                                    <td>
                                        4000
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        Straight Flush
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        100
                                    </td>
                                    <td>
                                        150
                                    </td>
                                    <td>
                                        200
                                    </td>
                                    <td>
                                        250
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        4 of a Kind
                                    </td>
                                    <td>
                                        25
                                    </td>
                                    <td>
                                        50
                                    </td>
                                    <td>
                                        75
                                    </td>
                                    <td>
                                        100
                                    </td>
                                    <td>
                                        125
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        Full House
                                    </td>
                                    <td>
                                        9
                                    </td>
                                    <td>
                                        18
                                    </td>
                                    <td>
                                        27
                                    </td>
                                    <td>
                                        36
                                    </td>
                                    <td>
                                        45
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        Flush
                                    </td>
                                    <td>
                                        6
                                    </td>
                                    <td>
                                        12
                                    </td>
                                    <td>
                                        18
                                    </td>
                                    <td>
                                        24
                                    </td>
                                    <td>
                                        30
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        Straight
                                    </td>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        8
                                    </td>
                                    <td>
                                        12
                                    </td>
                                    <td>
                                        16
                                    </td>
                                    <td>
                                        20
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        3 of a Kind
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        6
                                    </td>
                                    <td>
                                        9
                                    </td>
                                    <td>
                                        12
                                    </td>
                                    <td>
                                        15
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        2 Pair
                                    </td>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        6
                                    </td>
                                    <td>
                                        8
                                    </td>
                                    <td>
                                        10
                                    </td>
                                </tr>
                                <tr>
                                    <td className="PRIZE">
                                        Jacks or Better
                                    </td>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        2
                                    </td>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        5
                                    </td>
                                </tr>
                              </tbody>
                            </table>
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

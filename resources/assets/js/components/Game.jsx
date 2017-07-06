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


class Game extends Component {
    render() {
        return (
            <div className="container">
             <div className="row">
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <img src={marquee} alt=""/>
                        </div>

                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-2">
                                                <img alt="Bet 1" src={onechip} />
                                    </div>
                                    <div className="col-sm-2">
                                                <img alt="Bet 2" src={twochip} />
                                    </div>
                                    <div className="col-sm-2">
                                                <img alt="Bet 3" src={threechip} />
                                    </div>
                                    <div className="col-sm-2">
                                                <img alt="Bet 4" src={fourchip} />
                                    </div>
                                    <div className="col-sm-2">
                                                <img alt="Bet 5" src={fivechip}/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                                Royal Flush
                                    </div>
                                    <div className="col-sm-2">
                                                250
                                    </div>
                                    <div className="col-sm-2">
                                                500
                                    </div>
                                    <div className="col-sm-2">
                                                750
                                    </div>
                                    <div className="col-sm-2">
                                                1000
                                    </div>
                                    <div className="col-sm-2">
                                                4000
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                                Straight Flush
                                    </div>
                                    <div className="col-sm-2">
                                                50
                                    </div>
                                    <div className="col-sm-2">
                                                100
                                    </div>
                                    <div className="col-sm-2">
                                                150
                                    </div>
                                    <div className="col-sm-2">
                                                200
                                    </div>
                                    <div className="col-sm-2">
                                                250
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                                4 of a Kind
                                    </div>
                                    <div className="col-sm-2">
                                                25
                                    </div>
                                    <div className="col-sm-2">
                                                50
                                    </div>
                                    <div className="col-sm-2">
                                                75
                                    </div>
                                    <div className="col-sm-2">
                                                100
                                    </div>
                                    <div className="col-sm-2">
                                                125
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                                Full House
                                    </div>
                                    <div className="col-sm-2">
                                                9
                                    </div>
                                    <div className="col-sm-2">
                                                18
                                    </div>
                                    <div className="col-sm-2">
                                                27
                                    </div>
                                    <div className="col-sm-2">
                                                36
                                    </div>
                                    <div className="col-sm-2">
                                                45
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                                Flush
                                    </div>
                                    <div className="col-sm-2">
                                                6
                                    </div>
                                    <div className="col-sm-2">
                                                12
                                    </div>
                                    <div className="col-sm-2">
                                                18
                                    </div>
                                    <div className="col-sm-2">
                                                24
                                    </div>
                                    <div className="col-sm-2">
                                                30
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                            Straight
                                    </div>
                                    <div className="col-sm-2">
                                            4
                                    </div>
                                    <div className="col-sm-2">
                                            8
                                    </div>
                                    <div className="col-sm-2">
                                            12
                                    </div>
                                    <div className="col-sm-2">
                                            16
                                    </div>
                                    <div className="col-sm-2">
                                            20
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                            3 of a Kind
                                    </div>
                                    <div className="col-sm-2">
                                            3
                                    </div>
                                    <div className="col-sm-2">
                                            6
                                    </div>
                                    <div className="col-sm-2">
                                            9
                                    </div>
                                    <div className="col-sm-2">
                                            12
                                    </div>
                                    <div className="col-sm-2">
                                            15
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                            2 Pair
                                    </div>
                                    <div className="col-sm-2">
                                            2
                                    </div>
                                    <div className="col-sm-2">
                                            4
                                    </div>
                                    <div className="col-sm-2">
                                            6
                                    </div>
                                    <div className="col-sm-2">
                                            8
                                    </div>
                                    <div className="col-sm-2">
                                            10
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                            Jacks or Better
                                    </div>
                                    <div className="col-sm-2">
                                            1
                                    </div>
                                    <div className="col-sm-2">
                                            2
                                    </div>
                                    <div className="col-sm-2">
                                            3
                                    </div>
                                    <div className="col-sm-2">
                                            4
                                    </div>
                                    <div className="col-sm-2">
                                            5
                                    </div>
                                </div>
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

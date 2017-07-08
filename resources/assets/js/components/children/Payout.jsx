import React from 'react'
import marquee from '../../../../../public/images/JacksOrBetterMarguee.jpeg'
import onechip from '../../../../../public/images/OneChip.png'
import twochip from '../../../../../public/images/TwoChip.png'
import threechip from '../../../../../public/images/ThreeChip.png'
import fourchip from '../../../../../public/images/FourChip.png'
import fivechip from '../../../../../public/images/FiveChip.png'
import '../../../../../public/css/payout.css'

function Payout() {
    return (
        <div className="row">
            <div className="col-md-12 panel_background">
                <div className="panel panel-default">
                    <div className="panel-heading panel_background">
                        <table className="TITLE  panel_background">
                            <tbody>
                                <tr>
                                    <td className="TITLE_SPACING"></td>
                                    <td>
                                        <img src={marquee} alt="" class="TITLE_IMAGE ROUNDED"/>
                                    </td>
                                    <td className="TITLE_SPACING"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="panel-body panel_background">
                        <table className="MARQUEE">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>
                                        <img alt="Bet 1" src={onechip} />
                                    </th>
                                    <th>
                                        <img alt="Bet 2" src={twochip} />
                                    </th>
                                    <th>
                                        <img alt="Bet 3" src={threechip} />
                                    </th>
                                    <th>
                                        <img alt="Bet 4" src={fourchip} />
                                    </th>
                                    <th>
                                        <img alt="Bet 1" src={fivechip} />
                                    </th>
                                </tr>


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
    )
}

export default Payout;

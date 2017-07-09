import React, { Component } from 'react'
import cardBack from '../../../../../public/images/cardBack_red2.png'

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
                                <img src={cardBack} alt="" class="TITLE_IMAGE ROUNDED"/>
                            </div>
                            <div className="col-md-2">
                                <img src={cardBack} />
                            </div>
                            <div className="col-md-2">
                                <img src={cardBack} />
                            </div>
                            <div className="col-md-2">
                                <img src={cardBack} />
                            </div>
                            <div className="col-md-2">
                                <img src={cardBack} />
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
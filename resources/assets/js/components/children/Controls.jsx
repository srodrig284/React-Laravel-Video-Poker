import React, { Component } from 'react'

class Controls extends Component {
    render() {
        return (
            <div className="div_margin">
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-6">
                    </div>
                    <div className="col-md-6">
                        <button type="button" className="deal_button">
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
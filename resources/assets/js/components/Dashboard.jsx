/**
 * Created by Sandra on 7/3/17.
 */
import React, { Component } from 'react'


import {Link} from 'react-router';


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            usercredits: 0,
            ytdcredits: 0
        };
    }


    componentDidMount() {
        /*console.log('Dashboard componentDidMount');*/
        /*console.log('user.id = ', user.id);*/
        axios.get("/credits/"+user.id)
            .then(function (response) {
                /*console.log('some response', response);*/
                /*console.log('user credits = ',response.data.credits);*/;
                this.setState({
                    usercredits: response.data.credits,
                    ytdcredits: response.data.ytd_credits
                })
            }.bind(this))
            .catch(function (error) {
                /*console.log('no response');*/
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Video Poker Dashboard</div>

                            <div className="panel-body">
                                <h1>Welcome, { user.name }</h1>
                                <h2> Account Overview:</h2>
                                <h3>Coins available to play: {this.state.usercredits}</h3>
                                <h3>YTD Coins: {this.state.ytdcredits}</h3>
                                <br/><hr/>
                                <h2>Choose your game!</h2>
                                <p>
                                    <Link to="/Game"><button className="btn btn-primary btn-lg">Jacks or Better</button></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
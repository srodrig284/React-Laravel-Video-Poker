/**
 * Created by Sandra on 7/4/17.
 */
import React, { Component } from 'react'

import '../../../../public/css/mystylesheet.css'
import '../../../../public/css/animate.css'
import Payout from './children/Payout';
import Cards from './children/Cards';
import Controls from './children/Controls';
import DeckActions from './functions/Cardfunctions';
import WinLoss from './functions/Handfunctions';



class Game extends Component {
    constructor() {
        super();
        this.state = {
            dealtCards: DeckActions.InitCardBack(),
            gameState: 0,   // 0=uninitialized, 1=firstdeal, 2=win, 3=loss
            cardDeck: [],
            shuffledDeck: [],
            finalText: "",
            credits: 10,
            payout: 0,
            betAmt: 1
        };
        this.drawClick = this.drawClick.bind(this);
        this.cardClick = this.cardClick.bind(this);
        this.minusClick = this.minusClick.bind(this);
        this.plusClick = this.plusClick.bind(this);

    }

    minusClick(){
        console.log('Minus was clicked');
        let currBet = (this.state.betAmt);
        if(currBet > 1){
            this.setState({
                betAmt: currBet - 1
            })
        }
    }

    plusClick(){
        console.log('Plus was clicked');
        let currBet = (this.state.betAmt);
        if(currBet < 5){
            this.setState({
                betAmt: currBet + 1
            })
        }
    }

    // card was clicked - hold or unhold
    cardClick(i) {
        let current = (this.state.dealtCards).slice();
        console.log('current lock = ', current[i].Locked);
        current[i].Locked = !current[i].Locked; // change Locked state
        console.log('current lock after= ', current[i].Locked);

        this.setState({
            dealtCards: current
        })
    }

    // draw button was clicked
    drawClick(){
        console.log('game state on drawclick = ', this.state.gameState);
        // 0=uninitialized, 1=firstdeal, 2=win, 3=loss
        // 0, 3, 4 - create a shuffled deck
        if(this.state.gameState === 0 || this.state.gameState === 2 || this.state.gameState === 3)
        {
            // check if there are enough credits to play
            if(this.state.betAmt === 0 || this.state.betAmt > this.state.credits){
                // not enough credits to play
                this.setState({
                    finalText: "Not enough credits. Lower bet or press Reset Game."
                })
            }
            else {
                let newDeck = DeckActions.CreateDeck();
                console.log("BetAmt = ", this.state.betAmt);
                let newShuffle = (newDeck).slice();
                newShuffle = DeckActions.ShuffleCards(newShuffle);

                // get 5 new cards
                let newDeal = DeckActions.DealCards(newShuffle, 5);

                // update credits by subtracting the bet amount
                let currBet = this.state.betAmt;
                let newCredits = this.state.credits;
                newCredits = newCredits - currBet;

                this.setState({
                    shuffledDeck: newDeal.reshuffled,
                    dealtCards: newDeal.newCard,
                    gameState: 1,   // 0=uninitialized, 1=firstdeal, 2=win, 3=loss
                    credits: newCredits
                })
            }
        }
        else
        {
            // get the currently shuffled cards
            let currShuffled = (this.state.shuffledDeck).slice();

            // 0=uninitialized, 1=firstdeal, 2=win, 3=loss
            if(this.state.gameState === 1)
            {
                let tempCards = (this.state.dealtCards).slice();
                // discard the unlocked cards and deal a new one
                for(let i = 0; i < tempCards.length; i++ )
                {
                    if(tempCards[i].Locked === false)
                    {
                        let newCards = DeckActions.DealCards(currShuffled,1);
                        tempCards[i] = newCards.newCard[0];
                        currShuffled = newCards.reshuffled;
                    }
                }

                console.log('redeal = ', tempCards);

                let determineGame = WinLoss.ProcessHand(tempCards, this.state.betAmt);

                console.log('winloss = ', determineGame.status);
                console.log('final message = ', determineGame.message);
                console.log('payout amount = ', determineGame.payout);

                let newCredits = this.state.credits;
                newCredits = newCredits + determineGame.payout;

                this.setState({
                    shuffledDeck: currShuffled,
                    dealtCards: tempCards,
                    gameState: determineGame.status,   // 0=uninitialized, 1=firstdeal, 2=win, 3=loss
                    finalText: determineGame.message,
                    payout: determineGame.payout,
                    credits: newCredits
                })
            }
        }
    } // end drawClick

    //
    render() {
        let status;
        let disableCards = true;  // for gamestate = 2, 3

        if(this.state.gameState === 0){
            status = "PRESS DRAW TO PLAY POKER";
        }
        if(this.state.gameState === 1)
        {
            status = "SELECT CARDS TO HOLD AND/OR PRESS DRAW";
            disableCards = false;
        }
        else if(this.state.gameState === 2 || this.state.gameState === 3)
        {
            status = this.state.finalText;
        }

        return (
            <div className="container">
                <Payout />
                <Cards
                    cardsquares={this.state.dealtCards}
                    onClick={i => this.cardClick(i)}
                    disabled={disableCards}
                    message={status}
                />
                <Controls
                    drawClicked={this.drawClick}
                    minusClicked={this.minusClick}
                    plusClicked={this.plusClick}
                    bet={this.state.betAmt}
                    credits={this.state.credits}

                />
            </div> // end container
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

/**
 * Created by Sandra on 7/4/17.
 */
import React, { Component } from 'react'

import '../../../../public/css/mystylesheet.css'
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
            finalText: ""
        };
        /*this.setDealtCards = this.setDealtCards.bind(this);
        this.setGameState = this.setGameState.bind(this);
        this.setCardDeck = this.setCardDeck.bind(this);
        this.setShuffledDeck = this.setShuffledDeck.bind(this);*/
        this.drawClick = this.drawClick.bind(this);
        this.cardClick = this.cardClick.bind(this);

    }

    // allow children to update the parent
    setDealtCards(cards) {
        this.setState({
            dealtCards: cards
        });
    }

    // allow children to update the parent
    setGameState(state){
        this.setState({
            gameState: state
        })
    }

    // allow children to update the parent
    setCardDeck(allcards){
        this.setState({
            cardDeck: allcards
        })
    }

    // allow children to update the parent
    setShuffledDeck(activeDeck){
        this.setState({
            shuffledDeck: activeDeck
        })
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
            let newDeck = DeckActions.CreateDeck();
            console.log('cardDeck = ', newDeck);
            console.log('gamestate = ', this.state.gameState);

            let newShuffle = (newDeck).slice();
            newShuffle = DeckActions.ShuffleCards(newShuffle);
            console.log('newShuffle after shuffle = ', newShuffle);

            // get 5 new cards
            let newDeal = DeckActions.DealCards(newShuffle, 5);
            console.log('newDeal = ', newDeal);

            this.setState({
                shuffledDeck: newDeal.reshuffled,
                dealtCards: newDeal.newCard,
                gameState: 1,   // 0=uninitialized, 1=firstdeal, 2=win, 3=loss
            })
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

                let determineGame = WinLoss(tempCards);

                console.log('winloss = ', determineGame.status);
                console.log('final message = ', determineGame.message);

                this.setState({
                    shuffledDeck: currShuffled,
                    dealtCards: tempCards,
                    gameState: determineGame.status,   // 0=uninitialized, 1=firstdeal, 2=win, 3=loss
                    finalText: determineGame.message
                })
            }
        }
    } // end drawClick

    //
    render() {
        let status;
        let disableCards = true;  // for gamestate = 0

        if(this.state.gameState === 1)
        {
            status = "SELECT CARDS TO LOCK THEN PRESS DRAW";
            disableCards = false;
        }
        else if(this.state.gameState === 2 || this.state.gameState === 3)
        {
            disableCards = true;
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
                <Controls onClick={this.drawClick}/>
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

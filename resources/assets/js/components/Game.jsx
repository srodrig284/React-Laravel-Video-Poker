/**
 * Created by Sandra on 7/4/17.
 */
import React, { Component } from 'react'

import '../../../../public/css/mystylesheet.css'
import Payout from './children/Payout';
import Cards from './children/Cards';
import Controls from './children/Controls';
import cardBack from '../../../../public/images/cardBack_red2.png'
import DeckActions from './functions/Cardfunctions';


class Game extends Component {
    constructor() {
        super();
        this.state = {
            dealtCards: Array(5).fill(<img src={cardBack}/>),
            gameState: 0,
            cardDeck: DeckActions.CreateDeck(),
            shuffledDeck: []
        };
        this.setDealtCards = this.setDealtCards.bind(this);
        this.setGameState = this.setGameState.bind(this);
        this.setCardDeck = this.setCardDeck.bind(this);
        this.setShuffledDeck = this.setShuffledDeck.bind(this);
        this.drawClick = this.drawClick.bind(this);

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
        console.log("card clicked = ", i);
    }

    // draw button was clicked
    drawClick(){
        console.log("draw clicked");
        console.log("new deck = ", this.state.cardDeck);
        if(this.state.gameState === 0){
            let shuffledDeck = DeckActions.ShuffleCards(this.state.cardDeck);
            console.log('shuffledDeck = ', shuffledDeck);
        }
    }

    //
    render() {
        return (
            <div className="container">
                <Payout />
                <Cards
                    cardsquares={this.state.dealtCards}
                    onClick={i => this.cardClick(i)}
                    disabled={!this.state.gameState}
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

/**
 * Created by Sandra on 7/4/17.
 */
import React, { Component } from 'react'
import enumPropType from 'react-enum-prop-type'

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
            dealtCards: DeckActions.InitCardBack(),
            gameState: 0,   // 0=uninitialized, 1=firstdeal, 2=seconddeal, 3=win, 4=loss
            cardDeck: DeckActions.CreateDeck(),
            shuffledDeck: [],
        };
        this.setDealtCards = this.setDealtCards.bind(this);
        this.setGameState = this.setGameState.bind(this);
        this.setCardDeck = this.setCardDeck.bind(this);
        this.setShuffledDeck = this.setShuffledDeck.bind(this);
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
        console.log("card clicked = ", i);
        let current = this.state.dealtCards;
        console.log('current lock = ', current[i].Locked);
        current[i].Locked = !current[i].Locked; // change Locked state
        console.log('current lock after= ', current[i].Locked);

        this.setState({
            dealtCards: current
        })
    }

    // draw button was clicked
    drawClick(){
        /*console.log('dealtcards = ', this.state.dealtCards);*/
        /*console.log('gamestate before = ', this.state.gameState);*/
        /*console.log('cardDeck = ', this.state.cardDeck);*/
        // 0=uninitialized, 1=firstdeal, 2=seconddeal, 3=win, 4=loss
        // 0, 3, 4 - create a shuffled deck
        if(this.state.gameState === 0 || this.state.gameState === 3 || this.state.gameState === 4)
        {
            /*this.setState({
                shuffledDeck: DeckActions.ShuffleCards(this.state.cardDeck)
            },
            function(){
                console.log('shuffledDeck = ', this.state.shuffledDeck);
            })*/
            let newShuffle = DeckActions.ShuffleCards(this.state.cardDeck);
            console.log('newShuffle = ', newShuffle);

            // get 5 new cards
            let newDeal = DeckActions.DealCards(newShuffle, 5);
            console.log('newdeal = ', newDeal);
            console.log('newdeal.shuffled = ', newDeal.reshuffled);
            console.log('newdeal.cards = ', newDeal.newCard);

            this.setState({
                shuffledDeck: newDeal.reshuffled,
                dealtCards: newDeal.newCard,
                gameState: 1,   // 0=uninitialized, 1=firstdeal, 2=seconddeal, 3=win, 4=loss
            })
        }
        else
        {
            // get the currently shuffled cards
            let currShuffled = this.state.shuffledDeck;

            // 0=uninitialized, 1=firstdeal, 2=seconddeal, 3=win, 4=loss
            if(this.state.gameState === 1 || this.state.gameState === 2)
            {
                let tempCards = this.state.dealtCards;
                // discard the unlocked cards and deal a new one
                for(let i = 0; i < tempCards.length; i++ )
                {
                    if(!tempCards[i].Locked)
                    {
                        let newCards = DeckActions.DealCards(currShuffled,1);
                        tempCards[i] = newCards.newCard[0];
                        currShuffled = newCards.reshuffled;
                    }
                }
                console.log('redeal = ', tempCards);
                console.log('reshuffled = ', currShuffled);

                if(this.state.gameState === 1)
                {
                    this.setState({
                        shuffledDeck: currShuffled,
                        dealtCards: tempCards,
                        gameState: 2,   // 0=uninitialized, 1=firstdeal, 2=seconddeal, 3=win, 4=loss
                    })
                }
                else if(this.state.gameState === 2)
                {
                    this.setState({
                        shuffledDeck: currShuffled,
                        dealtCards: tempCards,
                        gameState: 3,   // 0=uninitialized, 1=firstdeal, 2=seconddeal, 3=win, 4=loss
                    })
                }
            }
        }
    } // end drawClick

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

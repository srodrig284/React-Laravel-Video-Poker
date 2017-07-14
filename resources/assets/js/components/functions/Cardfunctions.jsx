import React from 'react'

function CardPNGArray(){
    let cardArray = [
        '/images/ace_of_clubs.png','/images/2_of_clubs.png','/images/3_of_clubs.png','/images/4_of_clubs.png','/images/5_of_clubs.png','/images/6_of_clubs.png','/images/7_of_clubs.png','/images/8_of_clubs.png','/images/9_of_clubs.png','/images/10_of_clubs.png','/images/jack_of_clubs.png','/images/queen_of_clubs.png','/images/king_of_clubs.png','/images/ace_of_diamonds.png','/images/2_of_diamonds.png','/images/3_of_diamonds.png','/images/4_of_diamonds.png','/images/5_of_diamonds.png','/images/6_of_diamonds.png','/images/7_of_diamonds.png','/images/8_of_diamonds.png','/images/9_of_diamonds.png','/images/10_of_diamonds.png','/images/jack_of_diamonds.png','/images/queen_of_diamonds.png','/images/king_of_diamonds.png','/images/ace_of_hearts.png','/images/2_of_hearts.png','/images/3_of_hearts.png','/images/4_of_hearts.png','/images/5_of_hearts.png','/images/6_of_hearts.png','/images/7_of_hearts.png','/images/8_of_hearts.png','/images/9_of_hearts.png','/images/10_of_hearts.png','/images/jack_of_hearts.png','/images/queen_of_hearts.png','/images/king_of_hearts.png','/images/ace_of_spades.png','/images/2_of_spades.png','/images/3_of_spades.png','/images/4_of_spades.png','/images/5_of_spades.png','/images/6_of_spades.png','/images/7_of_spades.png','/images/8_of_spades.png','/images/9_of_spades.png','/images/10_of_spades.png','/images/jack_of_spades.png','/images/queen_of_spades.png','/images/king_of_spades.png'
    ]
    return cardArray;
}

export function CreateDeck(){
    let Cards = []; // Array of Cards representing one deck
    let oneCard = {};

    let cardImages = CardPNGArray();
    
    for (let id = 0, p = 0, i = 0; i < 4; i++) // for each Suit {Clubs,Diamonds,Hearts,Spades}
    {
        for (let j = 0; j < 13; j++) // for each Rank {A,2,...,10,J,Q,K}
        {
            // Card(id, suit, rank, x, y, width, height)
            oneCard = {
                ID: ++id,
                Suit: i + 1,
                Rank: j + 1,
                Locked: false,
                Image: cardImages[p++]
            };

            Cards.push(oneCard);

        }
    }
    /*console.log('Card Deck = ', Cards);*/
    return Cards;
}

export function InitCardBack(){
    let Cards = []; // Array of Cards representing 5 cards
    let oneCard = {};
    let cardBack = "/images/cardBack_red2.png";

    for (let i = 0; i < 5; i++)
    {
            oneCard = {
                ID: i,
                Suit: 0,
                Rank: 0,
                Locked: false,
                Image: cardBack
            };
            Cards.push(oneCard);
    }
    /*console.log('Card backs = ', Cards);*/
    return Cards;
}

export function ShuffleCards(cardDeck){
    /*let shuffledcards = cards; // Array of shuffled cards*/
    let shuffledcards = cardDeck.slice();
    let i;
    let t;
    let m = shuffledcards.length;
    //console.log('cards.length = ', m);

    while (m){
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = shuffledcards[m];
        shuffledcards[m] = shuffledcards[i];
        shuffledcards[i] = t;
    }
    //console.log('shuffled cards = ', shuffledcards);
    return shuffledcards;
}


export function DealCards(shuffledcards, numCards){
    let popShuffled = shuffledcards.slice();
    /*console.log('popShuffled before = ', popShuffled);*/
    let dealt = [];

    for (var i = 0; i < numCards; i++){
        dealt.push(popShuffled.pop());
    }

    /*console.log('popShuffled after= ', popShuffled);
    console.log('dealt = ', dealt);*/
    return {reshuffled: popShuffled, newCard: dealt};
}

export default {CreateDeck, ShuffleCards, DealCards, InitCardBack}
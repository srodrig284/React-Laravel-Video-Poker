import React from 'react'

export function CreateDeck(){
    let Cards = []; // Array of Cards representing one deck
    let oneCard = {};
    const SpriteWidth = 230; // pixel width of card in source image
    const SpriteHeight = 300; // pixel height of card in source image

    for (let id = 0, i = 0; i < 4; i++) // for each Suit {Clubs,Diamonds,Hearts,Spades}
    {
        for (let j = 0; j < 13; j++) // for each Rank {A,2,...,10,J,Q,K}
        {
            // Card(id, suit, rank, x, y, width, height)
            oneCard = {
                Suit: i + 1,
                Rank: j + 1,
                X: j * SpriteWidth,
                Y: i * SpriteHeight,
                Width: SpriteWidth,
                Height: SpriteHeight,
                Locked: false,
                Image: 'Deck.png'
            }

            Cards.push(oneCard);

        }
    }
    //console.log('onecard = ', Cards);
    return Cards;
}


export default CreateDeck;
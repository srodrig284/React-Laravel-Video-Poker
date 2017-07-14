import React from 'react'

export function ProcessHand(finalCards){

    let sortedCards = SortCards(finalCards);
    let finalMessage = "You Lose";
    let winloss = 3;  // loss

    let IsRoyal = checkRoyal(sortedCards);
    let isFourOfAKind = checkIsFourOfAKind(sortedCards);
    let isFullHouse = checkIsFullHouse(sortedCards);
    let isFlush = checkIsFlush(sortedCards);

    let isStraight;
    if(IsRoyal)
    {
        checkIsStraight = true;
    }
    else {
        checkIsStraight(sortedCards);
    }

    let isThreeOfAKind = checkIsThreeOfAKind(sortedCards);
    let isTwoPair = checkIsTwoPair(sortedCards);
    let isJacksOrBetter = checkIsJacksOrBetter(sortedCards);


    // check for winning hand
    if (isStraight && isFlush && isRoyal) {
        // royal flush
        winloss = 2;
        finalMessage = 'Winner!!!  Royal Flush';
    }
    else if (isStraight && isFlush && !isRoyal) {
        // straight flush}
        winloss = 2;
        finalMessage = 'Winner!!!  Straight Flush';
    }
    else if (isFourOfAKind){
        // four of a kind
        winloss = 2;
        finalMessage = 'Winner!!!  Four Of A Kind';
    }
    else if (isFullHouse) {
        // full house
        winloss = 2;
        finalMessage = 'Winner!!!  Full House';
    }
    else if (isFlush){
        // flush
        winloss = 2;
        finalMessage = 'Winner!!!  Flush';
    }
    else if (isStraight){
        // straight
        winloss = 2;
        finalMessage = 'Winner!!!  Straight';
    }
    else if (isThreeOfAKind) {
        // 3 of a kind
        winloss = 2;
        finalMessage = 'Winner!!!  Three Of A Kind';
    }
    else if (isTwoPair) {
        // two pair
        winloss = 2;
        finalMessage = 'Winner!!!  Two Pair';
    }
    else if (isJacksOrBetter){
        // jacks or better
        winloss = 2;
        finalMessage = 'Winner!!!  Jacks Or Better';
    }

    
    return {message: finalMessage, status: winloss}
}


function SortCards(unsortedCards){
    // Returns new array in sorted rank, precedence: 1-13 (Ace-King)
    let sortedCards = [];
    for (let i = 0; i < unsortedCards.length; i++)
        sortedCards.push(unsortedCards[i]);
    sortedCards.sort(function (card1, card2) { return card1.Rank - card2.Rank }); // anonymous comparator function

    return sortedCards;
}

function checkRoyal(sortedCards){
    return sortedCards[0].Rank === 1 &&
        sortedCards[1].Rank === 10 &&
        sortedCards[2].Rank === 11 &&
        sortedCards[3].Rank === 12 &&
        sortedCards[4].Rank === 13;
}

function checkIsFullHouse(sortedCards) { // true if three card ranks equal with remaining two card ranks equal
    return (sortedCards[0].Rank === sortedCards[1].Rank && sortedCards[2].Rank === sortedCards[4].Rank) ||
        (sortedCards[0].Rank === sortedCards[2].Rank && sortedCards[3].Rank === sortedCards[4].Rank);
}

function checkIsFourOfAKind(sortedCards) { // true if four card ranks equal
    return sortedCards[0].Rank === sortedCards[3].Rank || sortedCards[1].Rank === sortedCards[4].Rank;
}

function checkIsFlush(sortedCards) // true if all suits equal
{
    for (let i = 1; i < sortedCards.length; i++){
        if (sortedCards[i].Suit !== sortedCards[0].Suit)
            return false;
    }
    return true;
}

function checkIsStraight(sortedCards) { // true if successively incremented ranks (n, n + 1,... n + 4) or royal (10, 11, 12, 13, 1)
    for (let i = 0; i < sortedCards.length - 1; i++)
        if (sortedCards[i].Rank !== (sortedCards[i + 1].Rank - 1))
        {
            return false;
        }
    return true;
}


function checkIsThreeOfAKind(sortedCards) {
    let CardCounts = {}; // Rank frequencies
    for (let i = 0; i < sortedCards.length; i++) {
        if (CardCounts.hasOwnProperty(sortedCards[i].Rank)) { // Check if key exists in hashmap
            CardCounts[sortedCards[i].Rank]++; // Increment frequency
        }
        else {
            CardCounts[sortedCards[i].Rank] = 1; // First occurrence
        }
    }

    for (let i = 1; i < 14; i++) // Check each rank, 1-13 (Ace-King)
        if (CardCounts.hasOwnProperty(i) && CardCounts[i] >= 3) // at least triple of a rank
            return true;
    return false;
}


function checkIsTwoPair(sortedCards) {
    let CardCounts = {}; // Rank frequencies
    for (let i = 0; i < sortedCards.length; i++) {
        if (CardCounts.hasOwnProperty(sortedCards[i].Rank)) { // Check if key exists in hashmap
            CardCounts[sortedCards[i].Rank]++; // increment frequency
        }
        else {
            CardCounts[sortedCards[i].Rank] = 1; // first occurrence
        }
    }
    var hasPair = false;
    for (var i = 1; i < 14; i++) { // Check each rank, 1-13 (Ace-King)
        if (CardCounts.hasOwnProperty(i) && CardCounts[i] === 4) // four of a kind is arguably a special case of two pair
            return true;
        else if (CardCounts.hasOwnProperty(i) && CardCounts[i] >= 2) { // at least double of a rank
            if (!hasPair)
                hasPair = true;
            else
                return true;
        }
    }
    return false;
}

function checkIsJacksOrBetter(sortedCards) {
    let CardCounts = {}; // Rank frequencies
    for (let i = 0; i < sortedCards.length; i++) {
        let rank = sortedCards[i].Rank;
        if (rank === 11 || rank === 12 || rank === 13 || rank === 1) { // Rank is Jack or better
            if (CardCounts.hasOwnProperty(rank))
                CardCounts[rank]++; // Increment frequency
            else
                CardCounts[rank] = 1; // First occurence
        }
    }
    for (let i = 1; i < 14; i++) // Check each rank, 1-13 (Ace-King)
        if (CardCounts.hasOwnProperty(i) && CardCounts[i] >= 2)
            return true;
    return false;
}


export default ProcessHand;
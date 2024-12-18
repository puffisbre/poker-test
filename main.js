let cardDeck = [
    { value: '2', suit: 'Hearts', type: 'number' }, { value: '3', suit: 'Hearts', type: 'number' }, { value: '4', suit: 'Hearts', type: 'number' }, { value: '5', suit: 'Hearts', type: 'number' }, { value: '6', suit: 'Hearts', type: 'number' }, { value: '7', suit: 'Hearts', type: 'number' }, { value: '8', suit: 'Hearts', type: 'number' }, { value: '9', suit: 'Hearts', type: 'number' }, { value: '10', suit: 'Hearts', type: 'number' }, { value: 'J', suit: 'Hearts', type: 'Jack' }, { value: 'Q', suit: 'Hearts', type: 'Queen' }, { value: 'K', suit: 'Hearts', type: 'King' }, { value: 'A', suit: 'Hearts', type: 'Ace' },
    { value: '2', suit: 'Diamonds', type: 'number' }, { value: '3', suit: 'Diamonds', type: 'number' }, { value: '4', suit: 'Diamonds', type: 'number' }, { value: '5', suit: 'Diamonds', type: 'number' }, { value: '6', suit: 'Diamonds', type: 'number' }, { value: '7', suit: 'Diamonds', type: 'number' }, { value: '8', suit: 'Diamonds', type: 'number' }, { value: '9', suit: 'Diamonds', type: 'number' }, { value: '10', suit: 'Diamonds', type: 'number' }, { value: 'J', suit: 'Diamonds', type: 'Jack' }, { value: 'Q', suit: 'Diamonds', type: 'Queen' }, { value: 'K', suit: 'Diamonds', type: 'King' }, { value: 'A', suit: 'Diamonds', type: 'Ace' },
    { value: '2', suit: 'Clubs', type: 'number' }, { value: '3', suit: 'Clubs', type: 'number' }, { value: '4', suit: 'Clubs', type: 'number' }, { value: '5', suit: 'Clubs', type: 'number' }, { value: '6', suit: 'Clubs', type: 'number' }, { value: '7', suit: 'Clubs', type: 'number' }, { value: '8', suit: 'Clubs', type: 'number' }, { value: '9', suit: 'Clubs', type: 'number' }, { value: '10', suit: 'Clubs', type: 'number' }, { value: 'J', suit: 'Clubs', type: 'Jack' }, { value: 'Q', suit: 'Clubs', type: 'Queen' }, { value: 'K', suit: 'Clubs', type: 'King' }, { value: 'A', suit: 'Clubs', type: 'Ace' },
    { value: '2', suit: 'Spades', type: 'number' }, { value: '3', suit: 'Spades', type: 'number' }, { value: '4', suit: 'Spades', type: 'number' }, { value: '5', suit: 'Spades', type: 'number' }, { value: '6', suit: 'Spades', type: 'number' }, { value: '7', suit: 'Spades', type: 'number' }, { value: '8', suit: 'Spades', type: 'number' }, { value: '9', suit: 'Spades', type: 'number' }, { value: '10', suit: 'Spades', type: 'number' }, { value: 'J', suit: 'Spades', type: 'Jack' }, { value: 'Q', suit: 'Spades', type: 'Queen' }, { value: 'K', suit: 'Spades', type: 'King' }, { value: 'A', suit: 'Spades', type: 'Ace' }
];

class Card{
    constructor(suit, value, type){
        this.suit = suit;
        this.value = value;
        this.type = type;
    }
}

class Deck{
    constructor(theDeck = []){
        this.theDeck = theDeck
    }
    randomizeArray (array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
       return array;
      }
}

class Player{
constructor(player, playerHand = []){
this.player = player;
this.playerHand = playerHand;
}
}

let newDeck = new Deck(cardDeck);
let playerOne = new Player("Slim", newDeck.randomizeArray(newDeck.theDeck).splice(0, 5));
let playerTwo = new Player("Luke", newDeck.randomizeArray(newDeck.theDeck).splice(0, 5));


let takenCards = [...playerOne.playerHand, ...playerTwo.playerHand];
cardDeck = cardDeck.filter(item => !takenCards.includes(item));

playerTwo.playerHand.forEach(item => {
    let eachCard = new Card(item.suit, item.value, item.type)
   // console.log(eachCard)
})

playerTwo.playerHand.forEach(item => {
    let eachCard = new Card(item.suit, item.value, item.type)
   // console.log(eachCard)
})

console.log('Player name: ' + playerOne.player, playerOne.playerHand)
console.log('Player name: ' + playerTwo.player, playerTwo.playerHand)
console.log('This now has 42 cards left: ' + cardDeck.length);

console.log("Players now throw 2 cards and pick 2 new ones:")

let slicedCards = [...playerOne.playerHand.slice(-2), ...playerTwo.playerHand.slice(-2)];
let updatedDeck = new Deck(cardDeck);
let updatedPlayerOne = new Player("Slim", [...playerOne.playerHand.slice(0, 3) , ...updatedDeck.randomizeArray(updatedDeck.theDeck).slice(0,2)]);
let updatedPlayerTwo = new Player("Luke", [...playerTwo.playerHand.slice(0, 3), ...updatedDeck.randomizeArray(updatedDeck.theDeck).slice(0,2)]);

takenCards = [...updatedPlayerOne.playerHand, ...updatedPlayerTwo.playerHand];
cardDeck = cardDeck.filter(item => !takenCards.includes(item));

updatedPlayerOne.playerHand.forEach(item => {
    let eachCard = new Card(item.suit, item.value, item.type)
    //console.log(eachCard)
})

updatedPlayerTwo.playerHand.forEach(item => {
    let eachCard = new Card(item.suit, item.value, item.type)
   // console.log(eachCard)
})

console.log('Player name: ' + updatedPlayerOne.player, updatedPlayerOne.playerHand)
console.log('Player name: ' + updatedPlayerTwo.player, updatedPlayerTwo.playerHand)
console.log('This now has 38 cards left: ' + cardDeck.length);
console.log(`This is the throw pile: ` + slicedCards.length);
console.log('Player now throws cards back to pile');

cardDeck = [...updatedPlayerOne.playerHand, ...updatedPlayerTwo.playerHand, ...slicedCards, ...cardDeck];
let finalDeck = new Deck(cardDeck);
console.log(finalDeck.randomizeArray(finalDeck.theDeck));




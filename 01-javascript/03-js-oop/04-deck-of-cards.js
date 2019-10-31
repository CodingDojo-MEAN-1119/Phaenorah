class Card {
    constructor(suit, faceValue, value) {
        this.suit = suit;
        this.faceValue = faceValue;
        this.value = value;       
    }
    show() {
        console.log(`This card ${this.suit} has a value of ${this.faceValue} and numeric number of ${this.value}`)
    }
}
class Deck {
    constructor() {
        this.reset();
    }
    shuffle(){
        let cards = this.cards;
        let bet = cards.length, i, j;
        while (bet) {
            i = cards[bet];
            j = Math.floor(Math.random() * bet--);

            cards[bet] = cards[j];
            cards[j] = i;
        }
            console.log("Shuffle");
            return this;       
        }        
    reset() {
        const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
        const faceValues = [
            "Ace",
            "Two",
            "Three",
            "Four",
            "Five",
            "Six",
            "Seven",
            "Eight",
            "Nine",
            "Ten",
            "Jack",
            "Queen",
            "King"];
            const cards = [];
            for(const suit of suits) {
                for(let index=0; index<faceValues.length; index++) {
                   const face = faceValues[index];
                   const card = new Card(suit, face,index+1);
                   cards.push(card);
                }                
            }
            //console.log(cards);
            this.cards = cards;      
        return this;
    }
    deal(){
        return this.cards.pop();
    }

}
class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
    }
    takeCard(deck) {
        this.hand.push(deck.deal());
        return this;
    }
    discardCard() {
        this.hand.pop();
        return this;
    }
}

const deck = new Deck();
const player = new Player("Jason");

deck.shuffle();
deck.reset();
player.takeCard(deck);
console.log(player);
console.log(deck);
// player.discardCard();
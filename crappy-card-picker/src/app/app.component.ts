import { Component } from "@angular/core";
import Deck from "./../classes/Deck"; //gets functions from deck.ts
import ICard from "./../interfaces/ICard";

@Component({
	selector: "application",
    templateUrl: "./app.html",
    styleUrls: ["./app.css"]
})

export class AppComponent {
	// write your component code here
    public cardsInHand: ICard[] = []; //the deck
    public recentCard: ICard; //holds value of the most recently drawn card

    public lifeHealth; //holds current health percentage of life bar
    get lifeBar() { //styles the lifebar
        return {
            'height': this.lifeHealth + '%',
            'background-color': 'blue'
        }
    }

    public deck = new Deck(); //creates new instance of the deck blueprint

    get getDeckCardCount() {
        var theCards = this.deck.getCardCount; //gets the number of cards and stores in variable
        this.lifeHealth = theCards / 52 * 100; // gets percentage of cards, stores in lifeHealth
        return this.deck.getCardCount; //returns card count to DOM
    }

    public drawACard() {
        var theCard = this.deck.drawCard(); //randomly draws card rank and suit
        this.cardsInHand.push(theCard); //puts a new card into deck
        this.recentCard = theCard; //takes note of recent card
    }

    public returnACard(index, card) {
        this.cardsInHand.splice(index, 1); // remove from our hand, which is being rendered in our view
        this.deck.returnCardToDeck(card);  // take the card we removed from hand and add back into deck
    }
}

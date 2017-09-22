import { Component } from "@angular/core";
import Deck from "./../classes/Deck"; //gets functions from deck.ts
import ICard from "./../interfaces/ICard";

@Component({
	selector: "application",
	templateUrl: "./app.html"
})



export class AppComponent {
	// write your component code here
    public cardsInHand: ICard[] = []; //the deck

    public deck = new Deck(); //creates new instance of the deck blueprint

    public drawACard() {
        this.cardsInHand.push(this.deck.drawCard()); //puts a new card into deck
    }

    public returnACard(index, card) {
        this.cardsInHand.splice(index, 1); // remove from our hand, which is being rendered in our view
        this.deck.returnCardToDeck(card);  // take the card we removed from hand and add back into deck
    }
}

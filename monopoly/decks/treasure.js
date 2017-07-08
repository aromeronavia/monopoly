import Deck from './deck';

export default class TreasureDeck extends Deck {
  constructor(cards) {
    super();
    this.cards = cards;
  }

  getCards() {
    return this.cards;
  }
}

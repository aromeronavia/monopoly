export default class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  getCards() {
    return this.cards;
  }

  drawCard() {
    return this.cards.pop();
  }
}

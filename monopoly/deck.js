export default class Deck {
  constructor(cards) {
    this.cards = cards;
    this.drawnCards = [];
    this.length = cards.length;
  }

  getCards() {
    return this.cards;
  }

  drawCard() {
    const card = this.cards.pop();
    this.drawnCards.push(card);

    if (this.runOutOfCards()) {
      this.shuffleCards();
    }

    return card;
  }

  runOutOfCards() {
    return this.drawnCards.length === this.length;
  }

  shuffleCards() {
    this.cards = [...this.drawnCards];
    this.drawnCards = [];
  }
}

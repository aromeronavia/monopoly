import TreasureDeck from './../../monopoly/decks/treasure';

describe('Treasure Deck', () => {
  const buildCards = () => [1, 2, 3, 4, 5];
  const buildTreasureDeck = cards => new TreasureDeck(cards);

  it('should have twenty treasure cards', () => {
    const deck = buildTreasureDeck(buildCards());
    expect(deck.getCards()).to.have.lengthOf(5);
  });
});

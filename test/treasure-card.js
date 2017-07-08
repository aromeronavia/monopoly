import TreasureCard from '../monopoly/cards/treasure';

describe('Treasure card', () => {
  it('should have an effect on the game', () => {
    const card = new TreasureCard('effect');
    expect(card.getEffect()).to.equals('effect');
  });
});

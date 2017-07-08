import Dice from '../monopoly/dices/dice';

describe('Dice', () => {
  const buildDice = () => new Dice();

  it('should roll and get a number between one and six', () => {
    const dice = buildDice();
    expect(dice.roll()).to.be.within(1, 6);
  });
});

import Dices from '../monopoly/dices/dices';

describe('Dices', () => {
  const buildDices = () => new Dices();
  it('should create two dices inside dices', () => {
    const dices = buildDices();
    expect(dices.getDices()).to.be.an('array');
  });

  it('should roll dices and give the results', () => {
    const dices = buildDices();
    const result = dices.roll();
    expect(result).to.be.an('array');
    result.forEach(number => expect(number).to.be.within(1, 6));
  });
});

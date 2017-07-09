import Monopoly from '../monopoly/monopoly';

describe('Monopoly', () => {
  const buildMonopoly = () => new Monopoly(2);

  it('should initialize the game with an amount of players', () => {
    const monopoly = buildMonopoly();
    expect(monopoly.getPlayers()).to.have.lengthOf(2);
  });

  it('should be able to add a player to the game before it starts', () => {
    const monopoly = buildMonopoly();
    monopoly.addPlayer();
    expect(monopoly.getPlayers()).to.have.lengthOf(3);
  });

  it('should assign the turn to a random player when the game starts', () => {
    const monopoly = buildMonopoly();
    expect(monopoly.getCurrentPlayer()).to.not.exist;

    monopoly.start();
    expect(monopoly.getCurrentPlayer()).to.exist;
    expect(monopoly.getCurrentPlayer().constructor.name).to.equals('Player');
  });
});

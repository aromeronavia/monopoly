import Board from '../monopoly/board';
import Player from '../monopoly/player';

describe('Board', () => {
  const buildBoard = () => new Board();

  it('should have slots slots initialized', () => {
    const board = buildBoard();
    expect(board.getSlots()).to.have.lengthOf(4);
  });

  it('should add a player to the board at the initial position', () => {
    const board = buildBoard();
    board.addPlayer(new Player());
    const boardPlayers = board.getPlayers();
    expect(boardPlayers).to.have.lengthOf(1);
    expect(boardPlayers[0].getSlot().getPosition()).to.equals(0);
  });
});

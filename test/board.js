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
    let boardPlayers = board.getPlayers();
    expect(boardPlayers).to.have.lengthOf(1);
    expect(boardPlayers[0].getSlot().getPosition()).to.equals(0);

    board.addPlayer(new Player());
    boardPlayers = board.getPlayers();
    expect(boardPlayers).to.have.lengthOf(2);
    expect(boardPlayers[1].getSlot().getPosition()).to.equals(0);
  });

  it('should link the slots in the game', () => {
    const board = buildBoard();
    const slots = board.getSlots();

    expect(slots[0].getPrevious()).to.equals(slots[3]);
    expect(slots[1].getPrevious()).to.equals(slots[0]);
    expect(slots[2].getPrevious()).to.equals(slots[1]);
    expect(slots[3].getPrevious()).to.equals(slots[2]);

    expect(slots[0].getNext()).to.equals(slots[1]);
    expect(slots[1].getNext()).to.equals(slots[2]);
    expect(slots[2].getNext()).to.equals(slots[3]);
    expect(slots[3].getNext()).to.equals(slots[0]);
  });
});

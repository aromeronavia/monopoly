import Board from '../monopoly/board';

describe('Board', () => {
  const buildBoard = () => new Board();

  it.skip('should have fourty slots initialized', () => {
    const board = buildBoard();
    expect(board.getSlots()).to.have.lengthOf(40);
  });
});

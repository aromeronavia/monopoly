import Box from '../monopoly/boxes/box';

describe('Box', () => {
  const buildPropertyBox = attributes => new Box(Object.assign({
    type: 'property',
    previous: null,
    next: null
  }, attributes));

  it('should have a type', () => {
    const box = buildPropertyBox();
    expect(box.getType()).to.be.equals('property');
  });

  it('should have a neighbour box at the left', () => {
    const previousBox = buildPropertyBox();
    const box = buildPropertyBox({
      previous: previousBox
    });
    expect(box.getPrevious()).to.equals(previousBox);
  });

  it('should have a neighbor box at the right', () => {
    const nextBox = buildPropertyBox();
    const box = buildPropertyBox({
      next: nextBox
    });
    expect(box.getNext()).to.equals(nextBox);
  });
});

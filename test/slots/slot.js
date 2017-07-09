import Slot from '../../monopoly/slots/slot';

describe('Slot', () => {
  const buildPropertySlot = attributes => new Slot(Object.assign({
    type: 'property',
    previous: null,
    next: null
  }, attributes));

  it('should have a type', () => {
    const slot = buildPropertySlot();
    expect(slot.getType()).to.be.equals('property');
  });

  it('should have a neighbour slot at the left', () => {
    const previousSlot = buildPropertySlot();
    const slot = buildPropertySlot({
      previous: previousSlot
    });
    expect(slot.getPrevious()).to.equals(previousSlot);
  });

  it('should have a neighbor slot at the right', () => {
    const nextSlot = buildPropertySlot();
    const slot = buildPropertySlot({
      next: nextSlot
    });
    expect(slot.getNext()).to.equals(nextSlot);
  });
});

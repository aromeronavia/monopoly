import Slot from '../../monopoly/slots/slot';

describe('Slot', () => {
  const buildPropertySlot = attributes => new Slot(Object.assign({
    name: 'name',
    type: 'property',
    position: 0,
    previous: null,
    next: null
  }, attributes));

  it('should have a type', () => {
    const slot = buildPropertySlot();
    expect(slot.getType()).to.be.equals('property');
  });

  it('should have a name', () => {
    const slot = buildPropertySlot();
    expect(slot.getName()).to.be.equals('name');
  });

  it('should have a position', () => {
    const slot = buildPropertySlot();
    expect(slot.getPosition()).to.be.equals(0);
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

  it('should set a neighbor at the right', () => {
    const nextSlot = buildPropertySlot();
    const slot = buildPropertySlot();
    slot.setNext(nextSlot);
    expect(slot.getNext()).to.equals(nextSlot);
  });

  it('should set a neighbor at the left', () => {
    const previousSlot = buildPropertySlot();
    const slot = buildPropertySlot();
    slot.setPrevious(previousSlot);
    expect(slot.getPrevious()).to.equals(previousSlot);
  });
});

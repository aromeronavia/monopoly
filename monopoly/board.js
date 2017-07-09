export default class Board {
  constructor(slotConfig) {
    this.slots = this.buildSlots(slotConfig);
  }

  buildSlots() {
    const slots = [];

    for (let i = 0; i < 40; i += 1) {
      slots.push(i);
    }

    return slots;
  }
}

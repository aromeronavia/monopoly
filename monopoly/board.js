import Slot from './slots/slot';

class BoardPlayer {
  constructor(player) {
    this.player = player;
    this.slot = null;
  }

  getSlot() {
    return this.slot;
  }

  setSlot(slot) {
    this.slot = slot;
  }
}

export default class Board {
  constructor(slotConfig) {
    this.slots = this.buildSlots(slotConfig);
    this.players = [];
  }

  buildSlots() {
    const slots = [];

    for (let i = 0; i < 4; i += 1) {
      slots.push(new Slot({ position: i }));
    }

    return slots;
  }

  getSlots() {
    return this.slots;
  }

  addPlayer(player) {
    const boardPlayer = new BoardPlayer(player);
    const initialSlot = this.slots[0];
    boardPlayer.setSlot(initialSlot);
    this.players.push(boardPlayer);
  }

  getPlayers() {
    return this.players;
  }
}

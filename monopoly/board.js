import Slot from './slots/slot';

const SLOTS_LENGTH = 4;

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
    this.slots = this.buildDoubleLinkedSlots(slotConfig);
    this.players = [];
  }

  buildDoubleLinkedSlots() {
    const slots = [];

    for (let i = 0; i < SLOTS_LENGTH; i += 1) {
      slots.push(new Slot({ position: i }));
    }

    for (let i = 0; i < SLOTS_LENGTH; i += 1) {
      slots[i].setNext(slots[(i + 1) % SLOTS_LENGTH]);
    }

    for (let i = 1; i < SLOTS_LENGTH; i += 1) {
      slots[i].setPrevious(slots[i - 1]);
    }

    slots[0].setPrevious(slots[SLOTS_LENGTH - 1]);

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

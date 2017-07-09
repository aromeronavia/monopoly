export default class Slot {
  constructor(attributes) {
    this.name = attributes.name;
    this.type = attributes.type;
    this.position = attributes.position;
    this.previous = attributes.previous;
    this.next = attributes.next;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getPosition() {
    return this.position;
  }

  getNext() {
    return this.next;
  }

  getPrevious() {
    return this.previous;
  }
}

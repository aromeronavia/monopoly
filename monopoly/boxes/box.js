export default class Box {
  constructor(attributes) {
    this.type = attributes.type;
    this.previous = attributes.previous;
    this.next = attributes.next;
  }

  getType() {
    return this.type;
  }

  getNext() {
    return this.next;
  }

  getPrevious() {
    return this.previous;
  }
}

const COST = 100;

export default class Station {
  constructor() {
    this.cost = COST;
    this.owner = null;

    this.rentWithOneStation = 50;
    this.rentWithTwoStations = 100;
    this.rentWithThreeStations = 150;
    this.rentWithfourStations = 200;
  }

  getCost() {
    return this.cost;
  }

  getOwner() {
    return this.owner;
  }

  hasOwner() {
    return !!this.owner;
  }

  getRent() {
    return this.rentWithOneStation;
  }
}

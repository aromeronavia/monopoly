class AlreadyHasHotel extends Error {}
class AlreadyInMortgage extends Error {}
class CannotDemolishHouseWithHotel extends Error {}
class TooManyHouses extends Error {}
class TooFewHouses extends Error {}

export {
  AlreadyHasHotel,
  AlreadyInMortgage,
  CannotDemolishHouseWithHotel,
  TooManyHouses,
  TooFewHouses,
};

export default class Property {
  constructor(attributes) {
    this.name = attributes.name;
    this.cost = attributes.cost;
    this.rent = attributes.rent;
    this.rentWithOneHouse = attributes.rentWithOneHouse;
    this.rentWithTwoHouses = attributes.rentWithTwoHouses;
    this.rentWithThreeHouses = attributes.rentWithThreeHouses;
    this.rentWithFourHouses = attributes.rentWithFourHouses;
    this.rentWithHotel = attributes.rentWithHotel;
    this.owner = attributes.owner;

    this.houses = 0;
    this.withHotel = false;
    this.inMortgage = false;
  }

  getName() {
    return this.name;
  }

  getCost() {
    return this.cost;
  }

  getOwner() {
    return this.owner;
  }

  setOwner(owner) {
    this.owner = owner;
  }

  getNumberOfHouses() {
    return this.houses;
  }

  hasHouses() {
    return this.getNumberOfHouses() > 0;
  }

  hasHotel() {
    return this.withHotel;
  }

  canBuildHotel() {
    return !this.hasHotel();
  }

  getRent() {
    if (this.hasHotel()) {
      return this.rentWithHotel;
    }

    switch (this.getNumberOfHouses()) {
      case 1:
        return this.rentWithOneHouse;
      case 2:
        return this.rentWithTwoHouses;
      case 3:
        return this.rentWithThreeHouses;
      case 4:
        return this.rentWithFourHouses;
      default:
        return this.rent;
    }
  }

  buildHouse() {
    if (this.getNumberOfHouses() >= 4) {
      throw new TooManyHouses();
    }

    this.houses += 1;
  }

  buildHotel() {
    if (this.getNumberOfHouses() < 4) {
      throw new TooFewHouses();
    }

    if (this.hasHotel()) {
      throw new AlreadyHasHotel();
    }

    this.withHotel = true;
  }

  demolishHouse() {
    if (this.hasHotel()) {
      throw new CannotDemolishHouseWithHotel();
    }

    if (!this.hasHouses()) {
      throw new TooFewHouses();
    }

    this.houses -= 1;
  }

  demolishHotel() {
    this.withHotel = false;
  }

  mortgage() {
    if (this.inMortgage) {
      throw new AlreadyInMortgage();
    }

    this.inMortgage = true;
  }

  unmortgage() {
    this.inMortgage = false;
  }

  isInMortgage() {
    return this.inMortgage;
  }
}

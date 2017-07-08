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
    this.price = attributes.price;
    this.priceWithOneHouse = attributes.priceWithOneHouse;
    this.priceWithTwoHouses = attributes.priceWithTwoHouses;
    this.priceWithThreeHouses = attributes.priceWithThreeHouses;
    this.priceWithFourHouses = attributes.priceWithFourHouses;
    this.priceWithHotel = attributes.priceWithHotel;

    this.houses = 0;
    this.withHotel = false;
    this.inMortgage = false;
  }

  getName() {
    return this.name;
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

  getPrice() {
    if (this.hasHotel()) {
      return this.priceWithHotel;
    }

    switch (this.getNumberOfHouses()) {
      case 1:
        return this.priceWithOneHouse;
      case 2:
        return this.priceWithTwoHouses;
      case 3:
        return this.priceWithThreeHouses;
      case 4:
        return this.priceWithFourHouses;
      default:
        return this.price;
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

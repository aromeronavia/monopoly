import Property, {
  AlreadyHasHotel,
  AlreadyInMortgage,
  CannotDemolishHouseWithHotel,
  IsNotMortgaged,
  TooManyHouses,
  TooFewHouses,
} from '../monopoly/property';

import Player from '../monopoly/player';

describe('Property', () => {
  const buildFrance = () => new Property({
    name: 'France',
    cost: 10,
    rent: 20,
    rentWithOneHouse: 40,
    rentWithTwoHouses: 45,
    rentWithThreeHouses: 100,
    rentWithFourHouses: 200,
    rentWithHotel: 300,
    inMortgage: false
  });

  const buildEngland = attributes => new Property(Object.assign({
    name: 'England',
    cost: 20,
    rent: 30,
    rentWithOneHouse: 40,
    rentWithTwoHouses: 45,
    rentWithThreeHouses: 100,
    rentWithFourHouses: 200,
    rentWithHotel: 300,
    inMortgage: false
  }, attributes));

  const buildEnglandWithHouses = (numberOfHouses, attributes) => {
    const england = buildEngland(attributes);
    for (let i = 0; i < numberOfHouses; i += 1) {
      england.buildHouse();
    }

    return england;
  };

  const buildEnglandWithHotel = attributes => {
    const england = buildEnglandWithHouses(4, attributes);
    england.buildHotel();

    return england;
  };

  it('should create a property with no houses and no hotels', () => {
    const france = buildFrance();
    expect(france.getNumberOfHouses()).to.equals(0);
    expect(france.hasHotel()).to.be.false;
  });

  it('should have the cost', () => {
    const france = buildFrance();
    const england = buildEngland();
    expect(france.getCost()).to.equals(10);
    expect(england.getCost()).to.equals(20);
  });

  it('should have a name', () => {
    const france = buildFrance();
    const england = buildEngland();
    expect(france.getName()).to.equals('France');
    expect(england.getName()).to.equals('England');
  });

  it('should have the initial rent', () => {
    const france = buildFrance();
    const england = buildEngland();
    expect(france.getRent()).to.equals(20);
    expect(england.getRent()).to.equals(30);
  });

  it('should build a house and return the number of houses', () => {
    const england = buildEngland();
    england.buildHouse();
    expect(england.getNumberOfHouses()).to.equals(1);
    england.buildHouse();
    expect(england.getNumberOfHouses()).to.equals(2);
  });

  it('should not build more than four houses', () => {
    const england = buildEnglandWithHouses(4);
    expect(() => england.buildHouse()).to.throw(TooManyHouses);
  });

  it('should return the price of a property with houses', () => {
    const england = buildEngland({
      rentWithOneHouse: 40,
      rentWithTwoHouses: 45,
      rentWithThreeHouses: 1000,
      rentWithFourHouses: 5000,
    });

    const expectRentWithNewHouse = rent => {
      england.buildHouse();
      expect(england.getRent()).to.equal(rent);
    };

    expectRentWithNewHouse(40);
    expectRentWithNewHouse(45);
    expectRentWithNewHouse(1000);
    expectRentWithNewHouse(5000);
  });

  it('should not create an hotel if we dont have four houses', () => {
    const england = buildEngland();
    expect(() => england.buildHotel()).to.throw(TooFewHouses);
  });

  it('should build hotel with four houses', () => {
    const england = buildEnglandWithHotel();
    expect(england.hasHotel()).to.be.true;
  });

  it('should not build more than one hotel', () => {
    const england = buildEnglandWithHotel();
    expect(() => england.buildHotel()).to.throw(AlreadyHasHotel);
  });

  it('should return the price of a property with hotel', () => {
    const england = buildEnglandWithHotel({
      rentWithOneHouse: 40,
      rentWithTwoHouses: 45,
      rentWithThreeHouses: 1000,
      rentWithFourHouses: 5000,
      rentWithHotel: 10000
    });
    expect(england.getRent()).to.equal(10000);
  });

  it('should not demolish a house if property has no houses', () => {
    const england = buildEngland();
    expect(() => england.demolishHouse()).to.throw(TooFewHouses);
  });

  it('should demolish a house if property has houses', () => {
    const england = buildEngland();
    england.buildHouse();
    england.demolishHouse();
    expect(england.getNumberOfHouses()).to.equals(0);
  });

  it('should not demolish a house if has hotel', () => {
    const england = buildEnglandWithHotel();
    expect(() => england.demolishHouse()).to.throw(CannotDemolishHouseWithHotel);
  });

  it('should demolish hotel', () => {
    const england = buildEnglandWithHotel();
    england.demolishHotel();
    expect(england.hasHotel()).to.be.false;
  });

  it('should demolish hotel and a house after', () => {
    const england = buildEnglandWithHotel();
    england.demolishHotel();
    england.demolishHouse();
    expect(england.hasHotel()).to.be.false;
    expect(england.getNumberOfHouses()).to.equals(3);
  });

  it('should be able to acquire mortgage', () => {
    const england = buildEngland();
    england.mortgage();
    expect(england.isInMortgage()).to.be.true;
  });

  it('should be able to unmortgage', () => {
    const england = buildEngland();
    england.unmortgage();
    expect(england.isInMortgage()).to.be.false;
  });

  it('should not mortgage when property is already mortgaged', () => {
    const england = buildEngland();
    england.mortgage();
    expect(() => england.mortgage()).to.throw(AlreadyInMortgage);
  });

  it('should not unmortgage the property if its not in mortgage', () => {
    const england = buildEngland();
    expect(() => england.unmortage()).to.throw(IsNotMortgaged);
  });

  it('should not have an owner when created', () => {
    const england = buildEngland();
    expect(england.getOwner()).to.not.exist;
  });

  it('should be able to set an owner to a property', () => {
    const england = buildEngland();
    const player = new Player();
    england.setOwner(player);
    expect(england.getOwner()).to.equals(player);
  });
});

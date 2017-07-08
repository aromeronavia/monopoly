import Dice from './dice';

export default class Dices {
  constructor() {
    this.dices = [
      new Dice(),
      new Dice()
    ];
  }

  getDices() {
    return this.dices;
  }

  roll() {
    return this.dices.map(dice => dice.roll());
  }
}

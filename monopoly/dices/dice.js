const getRandomTo = number => Math.floor(Math.random() * number);

export default class Dice {
  roll() {
    return getRandomTo(6);
  }
}

const getRandomTo = number => Math.floor(Math.random() * number) + 1;

export default class Dice {
  roll() {
    return getRandomTo(6);
  }
}

import Player from './player';

export default class Monopoly {
  constructor(numberOfPlayers) {
    this.players = this.buildPlayers(numberOfPlayers);
  }

  buildPlayers(numberOfPlayers) {
    const players = [];

    for (let i = 0; i < numberOfPlayers; i += 1) {
      players.push(new Player(i));
    }

    return players;
  }

  start() {
    this.currentPlayer = 0;
    const currentPlayer = this.getCurrentPlayer();
    this.assignTurn(currentPlayer);
  }

  assignTurn(currentPlayer) {
    currentPlayer.setTurn({});
  }

  getCurrentPlayer() {
    return this.players[this.currentPlayer];
  }

  getPlayers() {
    return this.players;
  }
}

const team = {
  _players: [
    {
      firstName: "Pablo",
      lastName: "Sanchez",
      age: 11,
    },
  ],
  _games: [
    {
      opponent: "Broncos",
      teamPoints: 42,
      opponentPoints: 27,
    },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts,
    };
    this.games.push(game);
  },
};
team.addPlayer("Steph ", "Curry ", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs ", "Bunny ", 76);
console.log(team.players);
team.addGame("test", 100, 0);
team.addGame("Titans", 100, 98);
console.log(team.games);

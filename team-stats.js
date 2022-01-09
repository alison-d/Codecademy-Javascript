//team object
const team = {
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11
    }, {
      firstName: 'Sam',
      lastName: 'Jones',
      age: 12
    }, {
      firstName: 'Andy',
      lastName: 'Smith',
      age: 13
    },
  ],
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }, {
      opponent: 'Warriors',
      teamPoints: 31,
      opponentPoints: 36
     }, {
      opponent: 'Stags',
      teamPoints: 38,
      opponentPoints: 32
     },
  ],
  // getter methods
  get games(){
    return this._games;
  },
  get players(){
    return this._players;
  },
  // method adding a player to the team object & then to the players array
  addPlayer(firstName, lastName, age) {
  const player = {
     firstName,
     lastName,
     age
    };
    this._players.push(player);
  },
  // method recording game results
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this._games.push(game);
  },
};
// invoking addPlayer method
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
//invoking addGame method
team.addGame('Tigers', 28, 34);
team.addGame('Cubs', 36, 29);
team.addGame('Racers', 41, 30);
console.log(team.games);

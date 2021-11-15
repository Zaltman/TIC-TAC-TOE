let Gameboard = {
  board: ['x', 'o', 'x', 'x', 'o', 'o', 'x', 'x', 'o'],
  drawBoard: function drawBoard() {
    for (let i = 0; i < Gameboard.board.length; i++) {
      let element = document.createElement('button');
      element.classList.add('square');
      element.setAttribute('data-key', i);
      element.addEventListener('click', Gameboard.playerPicks);
      document
        .querySelector('.boardContainer')
        .appendChild(element).textContent = this.board[i];
    }
  },

  playerPicks: function (e) {
    console.log(Gameboard.board[e.target.dataset.key]);
  },
};

let Players = {
  player1: 'player1',
  player2: 'player2',

  player1Factory: (name) => {
    Players.player1 = name;
  },

  player2Factory: (name) => {
    Players.player2 = name;
  },

  listPlayers: function () {
    return this.player1 + ' ' + this.player2;
  },
};

Gameboard.drawBoard();

// const playerFactory = (name) => {
//   return { name };
// };

// do this!
// function createMenuItem(name) {
//   let li = document.createElement('li');
//   li.textContent = name;
//   return li;
// }

// // get the ul#userprofile
// const userprofile = document.querySelector('#userprofile');
// // add the user profile items
// userprofile.appendChild(createMenuItem('Profile'));
// userprofile.appendChild(createMenuItem('Settings'));
// userprofile.appendChild(createMenuItem('Log out'));

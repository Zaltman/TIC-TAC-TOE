let Gameboard = {
  board: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
  drawBoard: function drawBoard() {
    for (let i = 0; i < Gameboard.board.length; i++) {
      let element = document.createElement('div');
      element.classList.add('square');
      element.setAttribute('data-key', i);
      document
        .querySelector('.boardContainer')
        .appendChild(element).textContent = this.board[i];
    }
  },

  player1: 'player1',
  player2: 'player2',

  setPlayer1Name: function (name) {
    this.player1 = name;
  },

  setPlayer2Name: function (name) {
    this.player2 = name;
  },

  listPlayers: function () {
    return this.player1 + this.player2;
  },
  code: 'code',
};
Gameboard.drawBoard();

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

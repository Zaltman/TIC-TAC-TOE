let Gameboard = {
  board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  playerTurn: 1,
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
    console.log(Gameboard.playerTurn + ' cia player turn');
    console.log(Gameboard.board[e.target.dataset.key]);
    if (
      Gameboard.board[e.target.dataset.key] == ' ' &&
      Gameboard.playerTurn == 1
    ) {
      Gameboard.board[e.target.dataset.key] = 'x';
      e.target.textContent = 'x';
      Gameboard.playerTurn++;
    } else if (
      Gameboard.board[e.target.dataset.key] == ' ' &&
      Gameboard.playerTurn == 2
    ) {
      Gameboard.board[e.target.dataset.key] = 'o';
      e.target.textContent = 'o';
      Gameboard.playerTurn--;
    }
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

function checkWin() {
  let winCond = 0;
  let i = 0;
  let lastElementIndex = 3;
  for (i; i < lastElementIndex; i++) {
    if (Gameboard.board[i] == 'x') {
      winCond++;
    } else if (Gameboard.board[i] == 'o') {
      winCond--;
    }
    if (winCond == 3 || winCond == -3) {
      return 'Player has won';
    }
    if (i == 2 || i == 5) {
      lastElementIndex += 3;
      winCond = 0;
    }
  }
}

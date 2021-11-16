let Gameboard = {
  board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  playerTurn: 1,
  drawBoard: function drawBoard() {
    for (let i = 0; i < Gameboard.board.length; i++) {
      let element = document.createElement('button');
      element.classList.add('square');
      element.setAttribute('data-key', i);
      element.addEventListener('click', Gameboard.playerPicks, Game.checkWin);
      document
        .querySelector('.boardContainer')
        .appendChild(element).textContent = this.board[i];
    }
  },

  playerPicks: function (e) {
    if (Game.state == 1) {
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
      if (Game.checkWin() !== undefined);
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

let Game = {
  state: 1,
  checkWin: function checkWin() {
    // row check
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
        Game.state = 0;
        return 'Player has won';
      }
      if (i == 2 || i == 5) {
        lastElementIndex += 3;
        winCond = 0;
      }
    }

    //column check
    lastElementIndex = 7;
    i = 0;
    winCond = 0;
    for (i; i < lastElementIndex; i += 3) {
      if (Gameboard.board[i] == 'x') {
        winCond++;
      } else if (Gameboard.board[i] == 'o') {
        winCond--;
      }
      if (winCond == 3 || winCond == -3) {
        Game.state = 0;
        return 'Player has won';
      }
      if (i == 6) {
        lastElementIndex += 1;
        winCond = 0;
        i = -2;
      }
      if (i == 7) {
        lastElementIndex += 1;
        winCond = 0;
        i = -1;
      }
    }

    //diagonal check
    if (
      Gameboard.board[0] == Gameboard.board[4] &&
      Gameboard.board[0] == Gameboard.board[8] &&
      Gameboard.board[0] == 'x'
    ) {
      Game.state = 0;
      return Players.player1 + ' has won';
    }
    if (
      Gameboard.board[0] == Gameboard.board[4] &&
      Gameboard.board[0] == Gameboard.board[8] &&
      Gameboard.board[0] == 'o'
    ) {
      Game.state = 0;
      return Players.player2 + ' has won';
    }

    if (
      Gameboard.board[2] == Gameboard.board[4] &&
      Gameboard.board[2] == Gameboard.board[6] &&
      Gameboard.board[2] == 'x'
    ) {
      Game.state = 0;
      return Players.player1 + ' has won';
    }
    if (
      Gameboard.board[2] == Gameboard.board[4] &&
      Gameboard.board[2] == Gameboard.board[6] &&
      Gameboard.board[2] == 'o'
    ) {
      Game.state = 0;
      return Players.player2 + ' has won';
    }
  },
};
Gameboard.drawBoard();

let Gameboard = {
  board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  playerTurn: 1,

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

  clearBoard: function () {
    for (let i = 0; i < Gameboard.board.length; i++) {
      Gameboard.board[i] = ' ';
    }
    let listToClear = document.querySelectorAll('.square');

    for (let i = 0; i < listToClear.length; i++) {
      listToClear[i].textContent = Gameboard.board[i];
    }
    Game.state = 1;
    if (document.querySelector('.winner') !== null) {
      document.querySelector('.winner').remove();
    }
  },
};

let Players = {
  player1: 'player1',
  player2: 'player2',
  setPlayers: function () {
    (function () {
      let name = prompt('enter player1 name');
      if (name == undefined || name == '') return;
      Players.player1 = name;
      let player1DomElement = document.querySelector('.player1');
      player1DomElement.textContent = Players.player1 + '(x)';
      player1DomElement = Players.player1;
    })();
    (function () {
      let name = prompt('enter player2 name');
      if (name == undefined || name == '') return;
      Players.player2 = name;
      let player2DomElement = document.querySelector('.player2');
      player2DomElement.textContent = Players.player2 + '(o)';
      player2DomElement = Players.player2;
    })();
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
      if (winCond == 3) {
        Game.state = 0;
        return Game.alertWinner(Players.player1);
      }
      if (winCond == -3) {
        Game.state = 0;
        return Game.alertWinner(Players.player2);
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
      if (winCond == 3) {
        Game.state = 0;
        return Game.alertWinner(Players.player1);
      }
      if (winCond == -3) {
        Game.state = 0;
        return Game.alertWinner(Players.player2);
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
      return Game.alertWinner(Players.player1);
    }
    if (
      Gameboard.board[0] == Gameboard.board[4] &&
      Gameboard.board[0] == Gameboard.board[8] &&
      Gameboard.board[0] == 'o'
    ) {
      Game.state = 0;
      return Game.alertWinner(Players.player2);
    }

    if (
      Gameboard.board[2] == Gameboard.board[4] &&
      Gameboard.board[2] == Gameboard.board[6] &&
      Gameboard.board[2] == 'x'
    ) {
      Game.state = 0;
      return Game.alertWinner(Players.player1);
    }
    if (
      Gameboard.board[2] == Gameboard.board[4] &&
      Gameboard.board[2] == Gameboard.board[6] &&
      Gameboard.board[2] == 'o'
    ) {
      Game.state = 0;
      return Game.alertWinner(Players.player2);
    }
    let emptySquares = 9;
    for (let i = 0; i < Gameboard.board.length; i++) {
      if (Gameboard.board[i] !== ' ') emptySquares--;
    }
    if (emptySquares < 1) return Game.alertWinner('Nobody');
  },
  alertWinner: function alertWinner(winner) {
    let winnerElement = document.createElement('div');
    winnerElement.classList.add('winner');
    winnerElement.textContent = winner + ' has won!';
    parentDiv = document.querySelector('.gameControls');
    refDiv = parentDiv.querySelector('button');
    if (document.querySelector('.winner') == null) {
      parentDiv.insertBefore(winnerElement, refDiv);
    }
  },
};

(function drawBoard() {
  for (let i = 0; i < Gameboard.board.length; i++) {
    let element = document.createElement('button');
    element.classList.add('square');
    element.setAttribute('data-key', i);
    element.addEventListener('click', Gameboard.playerPicks, Game.checkWin);
    document.querySelector('.boardContainer').appendChild(element).textContent =
      Gameboard.board[i];
  }
  let changePlayerNameDom = document.querySelector('.changeName');
  changePlayerNameDom.addEventListener('click', Players.setPlayers);
  let startNewDom = document.querySelector('#startNew');
  startNewDom.addEventListener('click', Gameboard.clearBoard);
})();

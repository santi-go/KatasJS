const ALIVE = true;
const DEAD = false;


function Board (columns, rows) {
  this.columns = columns;
  this.rows = rows;
  this.boardArray = this.createInitBoardArray();
}

Board.prototype.createInitBoardArray = function() {
  var boardArray = [];
  for(var i = 0; i < this.rows; i++){
    var row = [];
    for(var j = 0; j < this.columns; j++){
      var cell = new Cell(liveOrDead(), i, j);
      row.push(cell);
    }
    boardArray.push(row);
  }
  return boardArray;
};

Board.prototype.updateBoardArray = function() {

};

Board.prototype.renderBoard = function(boardArray) {
  var boardString = "";
  for(var i = 0; i < boardArray.length; i++){
    var rowString = boardArray[i].join("") + "\n";
    boardString += rowString;
  }
  console.log(boardString)
  return boardString;
};



function Cell(alive, row, column) {
  this.alive = alive;
  this.row = row;
  this.column = column;
}

Cell.prototype.isAlive = function() {
    return this.alive;
}

Cell.prototype.whereIam = function() {
  return [this.row, this.column];
}

Cell.prototype.renderCell = function(alive) {
  if(alive === ALIVE) {
    return "*";
  } else {
    return "-";
  }
}

Cell.prototype.neighbourCounter = function(boardArray) {
    var count = 0;

    if(this.row === 0 && this.column === 0){
      for(var i = this.row; i <= this.row + 1; i++){
        for(var j = this.column; j <= this.column + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row === 0 && this.column < boardArray[0].length - 1){
      for(var i = this.row; i <= this.row + 1; i++){
        for(var j = this.column - 1; j <= this.column + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row === 0 && this.column === boardArray[0].length - 1){
      for(var i = this.row; i <= this.row + 1; i++){
        for(var j = this.column - 1; j <= this.column; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row > 0 && this.row < boardArray.length -1 && this.column === 0){
      for(var i = this.row - 1; i <= this.row + 1; i++){
        for(var j = this.column; j <= this.column + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row > 0 && this.row < boardArray[0].length - 1
      && this.column > 0 && this.column < boardArray.length - 1){
      for(var i = this.row - 1; i <= this.row + 1; i++){
        for(var j = this.column - 1; j <= this.column + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row > 0 && this.row < boardArray.length -1 && this.column === boardArray[0].length - 1){
      for(var i = this.row - 1; i <= this.row + 1; i++){
        for(var j = this.column - 1; j <= this.column; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row === boardArray.length -1 && this.column === 0){
      for(var i = this.row - 1; i <= this.row; i++){
        for(var j = this.column; j <= this.column + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row === boardArray.length -1 && this.column > 0
      && this.column < boardArray[0].length - 1){
      for(var i = this.row - 1; i <= this.row; i++){
        for(var j = this.column - 1; j <= this.column + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }

    if(this.row === boardArray.length -1 && this.column === boardArray[0].length - 1){
      for(var i = this.row - 1; i <= this.row; i++){
        for(var j = this.column - 1; j <= this.column; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            count++;
          }
        }
      }
    }
    return count;
}

function liveOrDead() {
  if(Math.random() > 0.5){
    return ALIVE;
  } else {
    return DEAD;
  }
}

function convertObjToStr(boardArray){
  var boardStringArray = [];
  for(var i = 0; i < boardArray.length; i++){
    var row = [];
    for(var j = 0 ;j < boardArray[i].length; j++){
      var cell = boardArray[i][j].renderCell(boardArray[i][j].isAlive());
      row.push(cell);
    }
    boardStringArray.push(row);
  }
  return boardStringArray;
}

function checkRules(isAlive, neighbourCount) {
  if(isAlive === ALIVE && neighbourCount < 2) {
    return DEAD;
  }
  if(isAlive === ALIVE && neighbourCount > 3) {
    return DEAD;
  }
  if(isAlive === ALIVE && neighbourCount === 2 || neighbourCount === 3){
    return ALIVE;
  }
  if(isAlive === DEAD && neighbourCount === 3) {
    return ALIVE;
  }
}

function liveOrDead() {
  if(Math.random() > 0.5){
    return true;
  } else {
    return false;
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

function Board(columns, rows) {
  this.columns = columns;
  this.rows = rows;
}

Board.prototype.renderBoard = function(boardArray) {
  var boardString = "";
  for(var i = 0; i < boardArray.length; i++){
    var rowString = boardArray[i].join("") + "\n";
    boardString += rowString;
  }
  console.log(boardString)
  return boardString;
};
//diferencias entre initBoard y otros boards;
Board.prototype.createBoardArray = function() {
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
  if(alive === true) {
    return "*";
  } else {
    return "-";
  }
}

Cell.prototype.neighbourCounter = function(boardArray) {
    var count = 0;
    for(var i = this.row - 1; i < this.row + 1; i++){
        for(var j = this.column - 1; j < this.column + 1; j++){
            if(boardArray[i][j].isAlive() === true){
              count++
            }
        }
    }
    return count;
}

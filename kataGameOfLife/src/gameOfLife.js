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
  var updatedBoardArray = [];
  var count = 0;
  for(var i = 0; i < this.rows; i++){
    var row = [];
    for(var j = 0; j < this.columns; j++){
      count++;
      var cell = this.boardArray[i][j];
      var neighbourCount = cell.neighbourCounter(this.boardArray);
      var isAlive = cell.isAlive();
      var newCell = new Cell(checkRules(isAlive, neighbourCount), i, j);
      row.push(newCell)
    }
    updatedBoardArray.push(row);
  }
  this.boardArray = updatedBoardArray;
  };

Board.prototype.renderBoard = function() {
  var boardArrayString = convertObjToStr(this.boardArray)
  var boardString = "";
  for(var i = 0; i < boardArrayString.length; i++){
    var rowString = boardArrayString[i].join("") + "\n";
    boardString += rowString;
  }
  console.log(boardString)
  this.updateBoardArray();
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
// REFACTOR!!!!
Cell.prototype.neighbourCounter = function(boardArray) {
    const ROW = this.row;
    const COL = this.column;
    const WIDTH = boardArray[0].length;
    const HEIGHT = boardArray.length;

    var count = 0;

    if(ROW === 0 && COL === 0){
      // console.log("CASE 1");
      for(var i = ROW; i <= ROW + 1 ; i++){
        for(var j = COL; j <= COL + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 1 alive");
            count++;
          }
        }
      }
    }
    else if(ROW === 0 && COL > 0 && COL < WIDTH - 1){
      // console.log("CASE 2");
      for(var i = ROW; i <= ROW + 1; i++){
        for(var j = COL - 1; j <= COL + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 2 alive");
            count++;
          }
        }
      }
    }

    else if(ROW === 0 && COL === WIDTH - 1){
      // console.log("CASE 3");
      for(var i = ROW; i <= ROW + 1; i++){
        for(var j = COL - 1; j <= COL; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 3 alive");
            count++;
          }
        }
      }
    }

    else if(ROW > 0 && ROW < HEIGHT -1 && COL === 0){
      // console.log("CASE 4");
      for(var i = ROW - 1; i <= ROW + 1; i++){
        for(var j = COL; j <= COL + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 4 alive");
            count++;
          }
        }
      }
    }

    else if(ROW > 0 && ROW < WIDTH - 1 && COL > 0 && COL < HEIGHT - 1){
        // console.log("CASE 5");
      for(var i = ROW - 1; i <= ROW + 1; i++){
        for(var j = COL - 1; j <= COL + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 5 alive");
            count++;
          }
        }
      }
    }

    else if(ROW > 0 && ROW < HEIGHT -1 && COL === WIDTH - 1){
      // console.log("CASE 6");
      for(var i = ROW - 1; i <= ROW + 1; i++){
        for(var j = COL - 1; j <= COL; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 6 alive");
            count++;
          }
        }
      }
    }

    else if(ROW === HEIGHT -1 && COL === 0){
      // console.log("CASE 7");
      for(var i = ROW - 1; i <= ROW; i++){
        for(var j = COL; j <= COL + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 7 alive");
            count++;
          }
        }
      }
    }

    else if(ROW === HEIGHT - 1 && COL > 0 && COL < WIDTH - 1){
      // console.log("CASE 8");
      for(var i = ROW - 1; i <= ROW; i++){
        for(var j = COL - 1; j <= COL + 1; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 8 alive");
            count++;
          }
        }
      }
    }

    else if(ROW === HEIGHT -1 && COL === WIDTH - 1){
      // console.log("CASE 9");
      for(var i = ROW - 1; i <= ROW; i++){
        for(var j = COL - 1; j <= COL; j++){
          if(boardArray[i][j].isAlive() === ALIVE){
            // console.log("CASE 9 alive");
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
  if(isAlive === ALIVE && neighbourCount < 2 || neighbourCount > 3) {
    return DEAD;
  }
  if(isAlive === ALIVE && neighbourCount === 2 || neighbourCount === 3){
    return ALIVE;
  }
  if(isAlive === DEAD && neighbourCount === 3) {
    return ALIVE;
  }

  if(isAlive === DEAD && neighbourCount < 3 || neighbourCount > 3) {
    return DEAD;
  }
}

function startGame(rows, columns, frecuency) {
  var board = new Board(rows, columns);
  window.setInterval(function(){board.renderBoard()}, frecuency);

}

//startGame(50,50,1000);

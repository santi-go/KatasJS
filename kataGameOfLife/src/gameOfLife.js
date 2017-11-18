function liveOrDead() {
  if(Math.random() > 0.5){
    return true;
  } else {
    return false;
  }
}

function Board(columns, rows) {
  this.columns = columns;
  this.rows = rows;
}

Board.prototype.renderInitBoard = function() {
  var initBoard = [];
  for(var i = 0; i < this.rows; i++){
    var row = [];
    for(var j = 0; j < this.columns; j++){
      cell = new Cell(liveOrDead())
      row.push(cell.renderCell(cell.isAlive()));
    }
    row = row.join("") + "\n";
    initBoard.push(row);
  }
  return initBoard.join("");
};



function Cell() {
  this.alive = liveOrDead();
}

Cell.prototype.isAlive = function() {
    return this.alive;
}

Cell.prototype.renderCell = function(alive) {
  if(alive === true) {
    return "*";
  } else {
    return "-";
  }
}

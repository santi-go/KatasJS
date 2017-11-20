describe("gameOfLife", function() {
  var board = new Board(3,3);
  var boardArray = board.createBoardArray()

  beforeEach(function(){

  });

  it("creates a board object with a columns property with value 3",function(){
    expect(board.columns).toEqual(3);
  });

  it("renders a board in a form of a string",function(){
    expect(typeof board
      .renderBoard(convertObjToStr(boardArray)))
      .toEqual("string");
  });

  it("creates a board array with random cells objects",function(){
    expect(typeof board.createBoardArray()).toEqual("object");
  });

  it("creates a cell object with its ubication within the board",function(){
    var cell = new Cell(true, 3, 5);
    expect(cell.whereIam()).toEqual([3, 5]);
  });

  it("convert alive cells object into strings",function(){
    var board = new Board(3,3);
    expect(typeof convertObjToStr(board.createBoardArray())).toEqual("object");
  });

  it("counts the number of alive neighbours",function(){
    board.renderBoard(convertObjToStr(boardArray))
    expect(boardArray[2][2].neighbourCounter(boardArray)).toEqual(8);
  });
})

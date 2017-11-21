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
    expect(boardArray[1][1].neighbourCounter(boardArray)).toEqual();
  });

  it("checks the first game rule",function(){
    expect(checkRules(ALIVE, 0)).toEqual(DEAD);
  });

  it("checks the second game rule",function(){
    expect(checkRules(ALIVE, 4)).toEqual(DEAD);
  });

  it("checks the third game rule",function(){
    expect(checkRules(ALIVE, 2)).toEqual(ALIVE);
  });

  it("checks the fourth game rule",function(){
    expect(checkRules(DEAD, 3)).toEqual(ALIVE);
  });
})

describe("gameOfLife", function() {

  beforeEach(function(){

  });

  it("creates a board object with a columns property with value 3",function(){
    var board = new Board(3,3);
    expect(board.columns).toEqual(3);
  });

  it("renders a board in a form of a string",function(){
    var board = new Board(30,30);
    expect(typeof board
      .renderBoard(convertObjToStr(board.createBoardArray())))
      .toEqual("string");
  });

  it("creates a board array with random cells objects",function(){
    var board = new Board(3,3);
    expect(typeof board.createBoardArray()).toEqual("object");
  });

  it("tells you if the created cell object is alive ",function(){
    var cell = new Cell(true);
    expect(cell.isAlive()).toEqual(true);
  });

  it("tells you if the created cell object is alive ",function(){
    var cell = new Cell(liveOrDead(), 2, 2);
    expect(cell.whereIam()).toEqual([2, 2]);
  });

  it("convert alive cells object into strings",function(){
    var board = new Board(3,3);
    expect(typeof convertObjToStr(board.createBoardArray())).toEqual("object");
  });
})

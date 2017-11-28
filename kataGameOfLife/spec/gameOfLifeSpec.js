describe("gameOfLife", function() {
  var board = new Board(3,3);

  beforeEach(function(){

  });

  it("creates a board object with a columns property with value 3",function(){
    expect(board.columns).toEqual(3);
  });

  it("has a board in a form of an Array, when created new board",function(){
    expect(typeof board.boardArray).toEqual("object");
  });

  it("creates a board array with random cells objects",function(){
    expect(typeof board.boardArray).toEqual("object");
  });

  it("creates a cell object with its ubication within the board",function(){
    var cell = new Cell(true, 3, 5);
    expect(cell.whereIam()).toEqual([3, 5]);
  });

  it("renders the board",function(){
    expect(typeof board.renderBoard()).toEqual("string");
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

describe("gameOfLife", function() {

  beforeEach(function(){

  });

  it("creates a board object with a columns property with value 3",function(){
    var board = new Board(3,3);
    expect(board.columns).toEqual(3);
  });

  it("renders a 3x3 board with all its cells alive",function(){
    var board = new Board(3,3);
    expect(board.renderInitBoard()).toEqual("***\n***\n***\n");
  });

  it("tells you if the created cell object is alive ",function(){
    var cell = new Cell(true);
    expect(cell.isAlive()).toEqual(true);
  });

  it("renders an alive cell",function(){
    var cell = new Cell();
    expect(cell.renderCell(cell.isAlive())).toEqual("*");
  });
})

describe("gameOfLife", function() {

  beforeEach(function(){

  });

  it("creates a board object with 2 properties",function(){
    var board = new Board(3,3);
    expect(board).toEqual({ columns : 3, rows : 3 });
  });
})

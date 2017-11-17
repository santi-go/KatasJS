describe("stringCalculator", function() {

  beforeEach(function() {
  });
//actualizar todo esto!!!
  it("evaluates no arguments : 0", function() {
    expect(stringCalculator.add()).toEqual(0);
  });

  it("evaluates one argument : 0", function() {
    expect(stringCalculator.add(0)).toEqual(0);
  });

  it("evaluates one argument : 12", function() {
    expect(stringCalculator.add(12)).toEqual(12);
  });

  it("evaluates negative numbers : negatives not allowed", function() {
    expect(stringCalculator.add(-13)).toEqual("negatives not allowed");
  });

  it("evaluates multiple arguments : 1, 2, 3, 4, 5 = 15", function() {
    expect(stringCalculator.add(1, 2, 3, 4, 5)).toEqual(15);
  });
/*
  it("evaluates multiple arguments : 1\n2,3 = 6", function() {
    expect(stringCalculator.add(1\n2,3)).toEqual(6);
  });*/

});

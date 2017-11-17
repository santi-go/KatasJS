describe("fizzBuzz", function() {

  beforeEach(function() {
  });

  it("identifies multiples of 3 / 6 = true", function() {
    expect(fizzBuzzMachine.isFizz(6)).toEqual(true);
  });

  it("identifies multiples of 5 / 4 = false", function() {
    expect(fizzBuzzMachine.isFizz(4)).toEqual(false);
  });

  it("identifies multiples of 5 / 25 = true", function() {
    expect(fizzBuzzMachine.isBuzz(25)).toEqual(true);
  });

  it("identifies multiples of 5 / 7 = false", function() {
    expect(fizzBuzzMachine.isBuzz(7)).toEqual(false);
  });

  it("identifies multiples of both, 3 and 5 / 30 = true", function() {
    expect(fizzBuzzMachine.isBuzz(30)).toEqual(true);
  });

  it("identifies other numbers other than multiples of 3, 5, or both / 13 = 13", function() {
    expect(fizzBuzzMachine.printResult(13)).toEqual(13);
  });

});

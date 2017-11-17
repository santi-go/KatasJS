describe("fizzBuzz", function() {

  beforeEach(function() {
  });

  it("identifies multiples of 3 | 6 = true", function() {
    expect(fizzBuzzMachine.isFizz(6)).toEqual(true);
  });

  it("identifies multiples of 3 | 4 = false", function() {
    expect(fizzBuzzMachine.isFizz(4)).toEqual(false);
  });

  it("identifies multiples of 5 | 25 = true", function() {
    expect(fizzBuzzMachine.isBuzz(25)).toEqual(true);
  });

  it("identifies multiples of 5 | 7 = false", function() {
    expect(fizzBuzzMachine.isBuzz(7)).toEqual(false);
  });

  it("identifies multiples of both, 3 and 5 | 30 = true", function() {
    expect(fizzBuzzMachine.isFizzBuzz(30)).toEqual(true);
  });

  it("Prints the result in a single string", function() {
    expect(fizzBuzzMachine.printResult(13)).toEqual('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 ');
  });

});

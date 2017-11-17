var fizzBuzzMachine = {
  FIZZ: 'Fizz',
  BUZZ: 'Buzz',
  FIZZBUZZ: 'FizzBuzz',

  isFizz: function(number){
    return number % 3 === 0;
  },

  isBuzz: function(number){
    return number % 5 === 0;
  },

  isFizzBuzz: function(number){
    return number % 3 === 0 && number % 5 === 0;
  },

  printResult: function(n){
    var number = n || 100;
    var result = "";
    for(var i = 1; i < number + 1; i++){
      current = i;
      if(this.isFizzBuzz(i)) current = this.FIZZBUZZ;
      else if(this.isFizz(i)) current = this.FIZZ;
      else if(this.isBuzz(i)) current = this.BUZZ;
      result += current +  " ";
      console.log(current);
    }
    return result;
  }
};

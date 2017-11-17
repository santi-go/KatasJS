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
    for(var i = 1; i < number + 1; i++){
      var result = i;
      if(this.isFizzBuzz(i)) result = this.FIZZBUZZ;
      else if(this.isFizz(i)) result = this.FIZZ;
      else if(this.isBuzz(i)) result = this.BUZZ;
      console.log(result);
      //arrar con results para retornar results[result]
    }
  },
};

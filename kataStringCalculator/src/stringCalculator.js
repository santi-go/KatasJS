/*
## String Calculator Kata (via [Roy Osherove](http://osherove.com/tdd-kata-1/))

* Create a simple String calculator with a method int Add(string numbers). The method can take 0, 1 or 2 numbers, and will return their sum
(for an empty string it will return 0). For example "" or "1" or "1,2"
	* Start with the simplest test case of an empty string and move to 1 and two numbers
	* Remember to solve things as simply as possible so that you force yourself to write tests you did
		  not think about
	* Remember to refactor after each passing test
* Allow the Add method to handle an unknown amount of numbers
* Allow the Add method to handle new lines between numbers (instead of commas).
	* the following input is ok:  "1\n2,3"  (will equal 6)
	* the following input is NOT ok:  "1,\n" (not need to prove it - just clarifying)
* Support different delimiters. To change a delimiter, the beginning of the string will contain a separate line
that looks like this: `[delimiter]\n[numbers...]`, for example `;\n1;2` should return three where the default delimiter is `;` .
	* he first line is optional. all existing scenarios should still be supported
* Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.
	* if there are multiple negatives, show all of them in the exception message
*/

var stringCalculator = {
  add: function(a, b, ...args){

    if(!Array.prototype.every.call(arguments, function(element){
      return element >= 0;
    })){
      return "negatives not allowed";
    }

    if(arguments.length === 0 || arguments[0] === ""){
      return 0;
    }

    if(arguments.length === 1) {
      return arguments[0];
    }

    var result = Array.prototype.reduce.call(arguments, function(acc, curr){
      return acc +curr;
    });

    return result;
  }
};


var Fizzbuzz = function(){

};

Fizzbuzz.prototype.isDivisibleByThree = function(number) {
    return number % 3 === 0;
  };


Fizzbuzz.prototype.isDivisibleByFive = function(number) {
    return number % 5 === 0;
  };


Fizzbuzz.prototype.isDivisibleByFifteen = function(number) {
    return number % 15 === 0;
  };


Fizzbuzz.prototype.game = function(number) {

  if (this.isDivisibleByFifteen(number)) {

    return 'FizzBuzz'

  }  else if (this.isDivisibleByThree(number)) {

    return 'Fizz'

  } else if (this.isDivisibleByFive(number)) {

    return 'Buzz'
    
  }

    return number

  };

var fizzbuzz = new Fizzbuzz();

for (i = 1; i <= 100; i++) {
  console.log(fizzbuzz.game(i));
}

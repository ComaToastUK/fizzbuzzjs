var JavaBuzz = function() {
};

JavaBuzz.prototype.isDivisibleBy = function(number, divisor) {
  return number % divisor === 0;
};

JavaBuzz.prototype.game = function(number){
  if(this.isDivisibleBy(number, 15)){
    return 'FizzBuzz';
  } else if (this.isDivisibleBy(number, 5)) {
    return 'Buzz';
  } else if (this.isDivisibleBy(number, 3)) {
    return 'Fizz';
  } else {
    return number
  }
};

var javaBuzz = new JavaBuzz()
for (i = 0; i < 100; i++) {
  console.log(javaBuzz.game)
}

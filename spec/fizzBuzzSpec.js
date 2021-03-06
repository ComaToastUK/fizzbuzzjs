describe('Fizzbuzz', function() {

  beforeEach(function() {
    var fizzbuzz = new Fizzbuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(3)).toEqual(true);
    });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(5)).toEqual(true)
    });
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(15)).toBe(true)
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)
    });
    it('divisible by 5', function() {
      expect(fizzbuzz.isDivisibleByFive(2)).toBe(false)
    });
    it('divisible by 15', function() {
      expect(fizzbuzz.isDivisibleByFifteen(2)).toBe(false)
    });
  });
});

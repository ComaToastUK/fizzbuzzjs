describe('JavaBuzz', function() {

  beforeEach(function() {
    var javaBuzz = new JavaBuzz();
  });

  describe('knows when a number is', function() {

    it('divisible by 3', function() {
      expect(javaBuzz.isDivisibleBy(3, 3)).toEqual(true);
    });
    it('divisible by 5', function() {
      expect(javaBuzz.isDivisibleBy(5, 5)).toEqual(true)
    });
    it('divisible by 15', function() {
      expect(javaBuzz.isDivisibleBy(15, 15)).toBe(true)
    });
  });

  describe('knows when a number is not', function() {
    it('divisible by 3', function() {
      expect(javaBuzz.isDivisibleBy(1, 3)).toBe(false)
    });
    it('divisible by 5', function() {
      expect(javaBuzz.isDivisibleBy(2, 5)).toBe(false)
    });
    it('divisible by 15', function() {
      expect(javaBuzz.isDivisibleBy(2, 15)).toBe(false)
    });
  });
});

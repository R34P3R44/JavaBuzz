describe('JsBuzz', function() {

    var jsBuzz;
  
    beforeEach(function() {
      jsBuzz = new JsBuzz();
    });
  
    describe('multiples of 3 and 5', function() {
      it('fizzbuzz for 15', function() {
        expect(jsBuzz.play(15)).toEqual('FizzBuzz');
      });
    });
    
    describe('multiples of 5', function() {
      it('buzz for 5', function() {
        expect(jsBuzz.play(5)).toEqual('Buzz');
      });
    });

    describe('multiples of 3', function() {
      it('fizz for 3', function() {
        expect(jsBuzz.play(3)).toEqual('Fizz');
      });
    });

    describe('other numbers', function(){
      it('returns number 4', function () {
        expect(jsBuzz.play(4)).toEqual(4);
      });
    });
  });
  
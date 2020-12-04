class JsBuzz {

    _isDivisibleBy(divisor, number) {
         return number % divisor === 0;
    }
    
    play(number) {
      if (this._isDivisibleBy(15, number)) {
         return 'FizzBuzz';
      } else if (this._isDivisibleBy(5, number)) {
         return 'Buzz';
      } else if (this._isDivisibleBy(3, number)) {
         return 'Fizz';
      } else {
         return number;
      }
    }
 }

 var jsBuzz = new JsBuzz();

for (var i = 1; i <= 100; i++) {
  console.log(jsBuzz.play(i));
}

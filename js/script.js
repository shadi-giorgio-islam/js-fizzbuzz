// Fizz Buzz test
// Scrivi un programma che stampi i numeri da 1 a
// 100, ma per i multipli di 3 stampi “Fizz” al posto
// del numero, per i multipli di 5 stampi “Buzz” e
// per i numeri che sono sia multipli di 3 che di 5
// stampi “FizzBuzz”.
var numero = fizzBuzz(1, 100);
console.log(numero);

// ****FUNZIONI****
function fizzBuzz(min, max){
  for (var i = min; i <= max; i++) {
    if (i % 3 == 0 && i % 5 == 0){
      console.log('FizzBuzz');
    }
    else if (i % 3 == 0){
      console.log('Fizz');
    }
    else if (i % 5 == 0) {
      console.log('Buzz');
    }
    else {
      console.log(i);
    }
  }
}

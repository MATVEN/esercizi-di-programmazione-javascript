/*
  I primi numeri…primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi.

  Esempio:
    Input: n = 5
    Output:
          TRUE

            2
            3
            5
            7
            11


  Consigli:
  Per non ripetere il codice, nella seconda funzione puoi richiamare la prima funzione ;)

  http://www.imparareaprogrammare.it
*/

var n = Math.floor(Math.random() * 20);

function isPrime(n) {
    for ( var i = 2; i < n; i++ ) {
        if ( n % i === 0 ) {
            return false;
        }
    }
    return true;
}

console.log(n + ' - ' + isPrime(n));

function display(n) {
  const primeNumber = [];
  let i = 2;
  while(primeNumber.length < n){
    if(isPrime(i)){
      primeNumber.push(i);
    };
    i = i === 2 ? i+1 : i+2;
  };
  return primeNumber;
  console.log(primeNumber);
}

console.log(display(n));

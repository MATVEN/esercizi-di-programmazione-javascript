/*
  Tick, tack, timer!
  Scrivi una funzione che dato un numero in input, stampi il conto alla rovescia a partire dal numero passato.

  Esempio:
    Input: n = 5
    Output:
            4
            3
            2
            1
            0

            
  http://www.imparareaprogrammare.it
*/

function contoAllaRovescia(){
 
  var n = Math.round(Math.random() * 10) + 1;
  var timer = setInterval(function() {
    n--;
    console.log(n);
    if (n <= 0) {
      console.log("Fatto!");
      clearInterval(timer);
    }
  },1000);
} 

console.log(contoAllaRovescia());

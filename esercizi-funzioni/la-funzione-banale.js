/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI,
  FALSE altrimenti.

  Esempi:
    Input: n = 2, m = 3
    Output: FALSE

    Input: n = 2, m = '2'
    Output: FALSE

    Input: n = 2, m = 2
    Output: TRUE

    
  http://www.imparareaprogrammare.it
*/

argUno = Math.round(Math.random()*10 + 1);
argDue = Math.round(Math.random()*10 + 1);
console.log(argUno + ' - ' + argDue);

function sameArg(argUno, argDue){
  
  if(argUno === argDue){
    return true;
  }else{
    return false;
  }
}

console.log(sameArg(argUno, argDue))

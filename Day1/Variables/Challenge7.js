let prompt = require('prompt-sync')();
let a=prompt("note de controle continu : ") ;
let b=prompt("note du projet : ") ;
let c=prompt("note d'examen finale : ") ;
  let d=(a*2+b*3+c*5)/10;
console.log("la note finale est :"+d);
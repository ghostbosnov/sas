let prompt = require('prompt-sync')();
let a=prompt("la tension en volts : ") ;
let b=prompt("l'intensité en ampères : ") ;
let c=prompt("le temps en heures : ") ;
  let d=a*b*c;
console.log("l'énergie consommée est :"+d);
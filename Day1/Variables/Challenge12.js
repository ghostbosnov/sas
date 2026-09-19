let prompt= require('prompt-sync')()
let x=prompt("entrer le code: ") ;
let p=x/1000;
console.log("le premier chiffre est :"+p);
 let y=x%1000;
let d=y/100;
console.log("le deuxieme chiffre est :"+d);
 let z=y%100;
console.log("le troisieme chiffre est :"+z);
let w=z%10;
console.log("le quatrieme chiffre est :"+w);    

 


let prompt = require('prompt-sync')();

let a=prompt("entrer longueur: ");
let b=prompt("entrer largeur: ");
let s=a*b;
let p=2*(a+b);
console.log("surface est :"+s);
console.log("perimétre est :"+p);
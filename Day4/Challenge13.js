let prompt=require('prompt-sync')()
let a=prompt("entrer le nom complet : ")
function obtenirInitiales(chaine){
return chaine
.split(" ") 
.map(chaine=> chaine[0].toUpperCase()) 
.join(".");
}
console.log(obtenirInitiales(a))
let prompt=require('prompt-sync')()
function calculerAgeChien(ageHumain){
   return ageHumain*7;
}
let a=prompt("entrer l'age humain : ");
console.log(calculerAgeChien(a));
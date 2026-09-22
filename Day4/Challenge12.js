let prompt=require('prompt-sync')()
let a=prompt("entrer l'adresse email : ")
function verifierEmail(chaine){
let fact=false ;
if (chaine.endsWith("@gmail.com")){
    fact=true ;
}
return fact
}
console.log(verifierEmail(a))
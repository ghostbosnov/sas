let prompt= require('prompt-sync')()
const formatMAD = (val) => val + " DH";
let montant=prompt("entrer le montant : ");
let tauxChange=prompt("entrer le taux : ")
function convertirMontant(montant, tauxChange, formatMAD) {
    return formatMAD(montant * tauxChange) ;
}
console.log(convertirMontant(montant, tauxChange, formatMAD));




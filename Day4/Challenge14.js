let prompt=require('prompt-sync')()
let a=prompt("entrer le numéro de carte : ")
function masquerCarte(serie){
    let hidden=serie.slice(12,16);
    return hidden
}
console.log(masquerCarte(a))
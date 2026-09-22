let prompt=require('prompt-sync')()
let a=prompt("entrer la chaine de caractere : ")
function formatterTexte(chaine){
    return {
        majuscule : chaine.toUpperCase() ,
        minuscule : chaine.toLowerCase()
    }
}
console.log(formatterTexte(a))
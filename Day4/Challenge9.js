let prompt = require('prompt-sync')()
let a = prompt("entrer une chaine de caracteres : ")
function nettoyerEspaces(chaine){
    let clean="" ;
     for(i=0;i<chaine.length;i++){
        if(chaine[i]!=" "){
            clean+= chaine[i] ;
        }
        else clean ;
     }
     return clean ;
} 
console.log(nettoyerEspaces(a))

/*function nettoyerEspaces(chaine) {
    let x = 0;
    let y = chaine.length - 1;
    while (chaine[x] === " ") {
        x++;
    }
    while (chaine[y] === " ") {
        y--;
    }
    let result = "";
    for (let i = x; i <= y; i++) {
        result += chaine[i];
    }
    return result;
}
console.log(nettoyerEspaces(a))*/
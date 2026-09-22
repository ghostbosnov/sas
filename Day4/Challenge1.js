let prompt=require('prompt-sync')()
let a= prompt("entrer une chaine de charactere : ")

function compterCharacteres(chaine){
    let i=0 ;
    let compt=0 ;
    while(chaine[i]!==undefined){
       compt++ ;
       i++ ; 
    }
    return compt ;
}

console.log(compterCharacteres(a))
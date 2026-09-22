let prompt=require('prompt-sync')()
let a=prompt("entrer une chaine de caractere : ")
let b=prompt("entrer l'idince de début : " )
let c=prompt("entrer l'indice de la fin : ")
function extraireChaine(chaine,debut,fin){
    let sub="" ;
    for(i=debut;i<=fin;i++){
        sub+=chaine[i]
    }
    return sub ;
}
console.log(extraireChaine(a,b,c))
let prompt= require('prompt-sync')()
let a = prompt("entrer le nombre à rechercher : ")
let nombres = [4,8,15,10,4,9]
 function recherche(num){
    let existe = false ;
    for (let i=0;i<nombres.length;i++){
        if(nombres[i]==num){
        existe= true ;
        break
    }
    }
    return existe ;
 }

 console.log(recherche(a))
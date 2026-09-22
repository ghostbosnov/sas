let prompt=require('prompt-sync')()
let a= prompt("entrer le mot à inverser: ")
const inverserChaine=(chaine)=>{
    let hold=[] ;
    for(i=0;i<chaine.length;i++){
     hold[chaine.length-1-i]=chaine[i]
     }

    
    return hold
}
console.log(inverserChaine(a))
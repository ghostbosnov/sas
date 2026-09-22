let prompt=require('prompt-sync')()
let a=prompt("entrer une chaine de charctere: ")
function compterVoyelles(chaine){
    let compt=0 ;
    for(i=0;i<chaine.length;i++){
        if (chaine[i]=="a"||chaine[i]=="e"||chaine[i]=="i"||chaine[i]=="o"||chaine[i]=="u"||chaine[i]=="y"){
            compt++ ;
        }
    }
    return compt ;
}
console.log(compterVoyelles(a))
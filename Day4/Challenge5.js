let prompt=require('prompt-sync')()
let a=prompt("entrer une chaine de charactere: ")
function estPalindrome(chaine){
    let pali=false ;
    let compt=0 ;
    for (i=0;i<chaine.length;i++){
        if(chaine[i]==chaine[chaine.length-1-i]){
            compt++ ;
        }
    }
    if(compt==chaine.length){
        pali=true ;
    }
    return pali ;
}
console.log(estPalindrome(a))
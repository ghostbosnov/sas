let prompt=require('prompt-sync')()
let a=prompt("entrer une chaine de charcteres : ")
let b=prompt("entrer le charactere à remplacer : ")
let c=prompt("entrer le charactere  remplacant : ")
function remplacerCaractere(chaine,ancien,nouveau){
    let result="" ;
    for(i=0;i<chaine.length;i++){
        if(chaine[i]==ancien){
            result+= nouveau ;
        }
        else
            result+= chaine[i];
 }
     return result ;
}
console.log(remplacerCaractere(a,b,c))
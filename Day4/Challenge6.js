let prompt=require('prompt-sync')()
let a=prompt("entrer la chaine de charactere à dupliquer : ")
let b=prompt("entre le nombre de fois à répeter la chaine de charactere : ")
function repetercChaine(chaine,fois){
    let c="";
    for(i=0;i<fois;i++){
        c+=chaine ;
    }
    return c ;
}
console.log(repetercChaine(a,b))
let prompt=require('prompt-sync')()
let a=prompt("entrer la phrase à découper : ")
function separerMots(chaine){
    let word=""
    let tab=[]
    for(let i=0;i<chaine.length;i++){
        if(chaine[i]!=" "){
            word+=chaine[i]
        }
        else{
            tab.push(word);
            word="";
        }
    }
    tab.push(word) ;
    return tab
}
console.log(separerMots(a))
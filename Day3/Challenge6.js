let prompt=require('prompt-sync')()
/*let motDePasse=prompt("entrer votre mot de passe : ")
let occ=motDePasse.indexOf("@")
let verifierMotDePasse=(motDePasse)=>{
    if(motDePasse.length>=8 && occ !== -1){
        return true
    }else{
        return false
    }}
    console.log(verifierMotDePasse(motDePasse))*/

    
/*let motDePasse=prompt("entrer votre mot de passe : ")
let occ=motDePasse.match("@")
let verifierMotDePasse=(motDePasse)=>{
    if(motDePasse.length>=8 && occ !== null){
        return true
    }else{
        return false
    }}
    console.log(verifierMotDePasse(motDePasse))*/
 

let motDePasse=prompt("entrer votre mot de passe : ")
let occ=motDePasse.includes("@")
let verifierMotDePasse=(motDePasse)=>{
    if(motDePasse.length>=8 && occ == true)
    {
        return true
    }else{
        return false
    }}
    console.log(verifierMotDePasse(motDePasse))
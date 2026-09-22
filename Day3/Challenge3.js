let prompt=require('prompt-sync')()
let prenom=prompt("entrer votre prenom : ")
let nom=prompt("entrer votre nom : ")

function genererEmail(prenom,nom){
    return console.log(`${prenom}.${nom}@entreprise.com`.toLowerCase())
}
genererEmail(prenom,nom)
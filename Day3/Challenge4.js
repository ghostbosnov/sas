let prompt=require('prompt-sync')()
 let titre=prompt("entrer votre titre : ") || undefined
 let prenom=prompt("entrer votre nom : ")
 
function saluerClient(prenom,titre="client"){
   
   return `Bonjour ${titre} ${prenom}`
    }
    console.log(saluerClient(prenom,titre))
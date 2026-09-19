let prompt= require('prompt-sync')()
let calc=[]
let somme=0
let N=prompt("entrer la taille du tableau: ")
for(i=0;i<N;i++){
    calc[i]=+prompt("entrer la valeur "+i+":")
    somme+=calc[i]
}
console.log(somme)

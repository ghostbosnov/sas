let prompt= require('prompt-sync')()
let tab=[]
let hold=0
let N=prompt("entrer la taille du tableau: ")
for(i=0;i<N;i++){
    tab[i]=+prompt("entrer la valeur "+i+":")

}
for(i=0;i<N;i++){
    if(tab[i]>hold){hold=tab[i]}
}
console.log(hold)

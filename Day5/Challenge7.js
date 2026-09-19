let prompt=require('prompt-sync')()
let tab=[]
let filtrer=[]
let N=prompt("entrer la taille du tableau :")
 
  for (let i=0;i<N;i++){
    tab[i]=prompt("entrer l'element"+(i+1)+":")
    
  }
console.log(tab)
for (i=0;i<N;i++){
    if (tab[i]%2==0){
        filtrer[filtrer.length]=tab[i]
    }
}
console.log(filtrer)
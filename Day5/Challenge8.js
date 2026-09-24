let prompt=require('prompt-sync')()
  let tab=[]
  let tab1=[]
  let N=prompt("entrer la taille du tableau :")
  console.log("enter similar numbers to test the function :")
  for (let i=0;i<N;i++){
    tab[i]=prompt("entrer l'element"+(i+1)+":")
  }
console.log(tab)
  for(i=0;i<tab.length;i++){
    let existe = false ;
    for(j=0;j<tab1.length;j++){
      
      if(tab[i]===tab1[j]){
        existe=true ;
        break ;
      }
    }
    if(existe==false){
      tab1[tab1.length]=tab[i]
    }
    
  }
  return tab1 ;
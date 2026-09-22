 let prompt=require('prompt-sync')()
 let a= prompt("entrer le mot : ")
 let b= prompt("entrer le lettre à chercher son occurence : ")
 function compterLettres(chaine,lettre){
    let occ=0 ;
    let i=0 ;
  for(i=0;i<chaine.length;i++){
    if(lettre==chaine[i]){
        occ++ ;
    }
  }
  return occ ;
 }
 console.log(compterLettres(a,b))
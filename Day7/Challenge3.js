let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
let prompt=require('prompt-sync')()
let num=prompt("entrer le nombre à rechercher : ")
function rechercheBinaire(tab,number){
    let start = 0;
    let end = tab.length-1 ;
    let index ;
  while(end>start){
    if(tab[start]==number){
           index = start;
    }
    else if(tab[end]==number){
        index= end ;
    }
    else {
        index=-1 ;
    }
    start ++ ;
    end -- ;
  }
  return index ;
}
console.log(rechercheBinaire(ids,num))
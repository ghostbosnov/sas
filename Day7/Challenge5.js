let scores = [3, 3, 7, 7, 7, 12, 19, 19, 25, 30, 30, 30, 41];
 const rechercheBinaire=(tab,a)=>{
    let start=0 ;
    let end=tab.length-1 ;
   for(let i=0;i<tab.length;i++){
    if(tab[start]==a){
         start ;
    }
    else start++ ;
    if(tab[end]==a){
         end ;
    }
    else end-- ;
   }
   return console.log(`le premier indice est ${start} et le dernier indice est ${end}`)
 }
 console.log(rechercheBinaire(scores,41))
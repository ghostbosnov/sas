let temperatures = [22, 19, 30, 15, 28, 17, 25];
 function triSelection(tab){
    let echange=0 ; 
    for(let i=0;i<tab.length;i++){
        let maxIndex=i ;
       for(let j=i+1;j<tab.length;j++){
        if(tab[j]>tab[maxIndex]){
            maxIndex=j ;
        }
       }
       if (maxIndex!=i){
        let hold=tab[i];
            tab[i]=tab[maxIndex];
            tab[maxIndex]=hold;
            echange++ ;
       }
    }
   console.log(echange)
   return  tab ;
 }
 console.log(triSelection(temperatures))
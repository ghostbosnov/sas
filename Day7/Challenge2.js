let notes = [12, 5, 19, 3, 27, 8, 14];
console.log(triBulles(notes))
function triBulles(tab){
    let swaped ;
    let hold ;
    let occ=0 ;
    do {
        swaped= false ;
        for(i=0;i<tab.length;i++){
            if(tab[i+1]<tab[i]){
                hold=tab[i+1]
                tab[i+1]=tab[i]
                tab[i]=hold
                swaped=true
                occ++ ;
            }
        }
    }while(swaped)
        console.log(occ)
 return tab  
 
}
console.log(triBulles(notes))
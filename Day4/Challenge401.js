let prompt=require('prompt-sync')()
let a=prompt("entrer une phrase :")
function finder(chaine) {
    let word="" ;
    let result = "";
    let tab = [];
    let j=0 ;
    for (i = 0; i < chaine.length; i++) {
        if (chaine[i] != " ") {
            result+= chaine[i];
        }
        else
           {tab[j]=result ;
            result=" " ;
            j++ ;} 
        
    }
    tab[j]=result ;
    let max=0 ;
    let index=0 ;
    for(i=0;i<tab.length;i++){
       if(tab[i].length>max) {
        max=tab[i].length
        index=i ;
       }
    }
    return tab[index] ;
}
console.log(finder(a))

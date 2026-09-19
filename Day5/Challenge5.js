let prompt= require('prompt-sync')()
let tab=[50,"cat",2,-5,"dog"]
console.log(tab)
let e=prompt("saisir le mot désigné :")
let b=false;
for(let i=0;i<5;i++){
    if (tab[i]==e){
        b = true;
       break;    
    } 
}
    console.log(b)

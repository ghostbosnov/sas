let prompt = require('prompt-sync')();
    let a=+prompt("entrer un Nombre:  ");
    let somme=0 ; 
    for(let i=1;i<=a;i++)
        {    
            somme+=i;
    }
    console.log("N =",a)
    console.log("Somme= ", somme);
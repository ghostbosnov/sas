let prompt = require('prompt-sync')();
    let a=prompt("entrer le nombre de participants: ");
    console.log("nombre de participants :", a);
    for(i=1;i<=a;i++)
        {
        console.log("participant ",i);
    }
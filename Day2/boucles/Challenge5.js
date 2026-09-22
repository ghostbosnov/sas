let prompt = require('prompt-sync')();
    let N=+prompt("entrer un nombre N: ");
    let X=+prompt("entrer un nombre X: ");

    
    for(i=1;i<=N;i++)
        {
           if(i%X===0){
            console.log(i) ;
           }
    }
   
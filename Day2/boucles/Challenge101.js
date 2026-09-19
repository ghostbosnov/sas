let prompt = require('prompt-sync')();
   let N=+prompt("entrer le nombre des articles: ");
   const P=125;
   let pr=0;
   for(i=0;i<N;i++){
    
     pr+=P-P*i*2/100;
   }
   
     console.log("article "+ pr);

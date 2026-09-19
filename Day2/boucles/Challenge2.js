let prompt = require('prompt-sync')();
    let a=prompt("entrer un nombre: ");
    console.log("N= ", a);
    for(i=0;i<=a;i++)
        {
            if(i%2==0 && i>0)
                {console.log(i);};
    }
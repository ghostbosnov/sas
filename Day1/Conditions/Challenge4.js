let prompt = require('prompt-sync')();
            let a=+prompt("entrer le montant de la commande :") ;
            
            if  (a>=500){
                console.log("la livraison est gratuite") ;

            }
        else {
            a=a+40 ;
            console.log("total à payer : ", a) ;
        }   
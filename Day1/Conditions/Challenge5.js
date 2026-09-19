let prompt = require('prompt-sync')();
            let a=+prompt("entrer la note :") ;
            
            if  (a<10){
                console.log("mention: echec") ;
            }
        else if (10<=a<=11.99){
            console.log("mention: passable") ;
        }   
        else if (12<=a<=13.99){
            console.log("mention: Assez bien ") ;
        }
        else if (14<=a<=15.99){
            console.log("mention: bien ") ;
        }
        else if (16<=a<=17.99){
            console.log("mention: trés bien ") ;
        }
        else if (18<=a<=20){
            console.log("Excellent");
        } 
        else if (a<0 || a>20){             
            console.log("la note est invalide");
        }

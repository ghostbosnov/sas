let prompt = require('prompt-sync')();
            let a=+prompt("please enter the first number :") ;
            let b=+prompt("please enter the second number :") ;
            let c=prompt("please enter your operator :") ;
            switch(c){
                case "+":
                    console.log("Résultat: ", a+b) ;
                    break ;
                case "-":
                    console.log("Résultat: ", a-b) ;
                    break ;
                case "*":
                    console.log("Résultat: ", a*b) ;
                    break ; 
                case "/":
                    if (0==b) 
                      console.log("nombre invalid")  ;
                    break ;
                    console.log("Résultat: ", a/b) ;
                    break ;
                default :
                    console.log("Opérateur invalid") ;
            }
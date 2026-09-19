let prompt = require('prompt-sync')();
            let a=prompt("please enter your choice :") ;
            switch(a){
                case "1":
                    console.log("Affichage des notifications") ;
                    break ;
                case "2":
                    console.log("Affichage des paramètres") ;
                    break ;
                case "3":
                    console.log("Affichage de l'aide") ;
                    break ; 
                case "4":
                    console.log("Déconnection") ;
                    break ;
                default:
                    console.log("invalid choice") ;
            }
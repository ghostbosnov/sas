let prompt = require('prompt-sync')();
            let a=prompt("please choose your plate option from 1 to 4 ") ;
            let p ;
            switch(a){
                case "1":
                    p=60 
                    console.log("plat: pizza ") ;
                    break ;
                case "2":
                    p=45 
                    console.log("plat: Burger ") ;
                    break ;
                case "3":
                    p=40 
                    console.log("plat: Tacos ") ;
                    break ; 
                case "4":
                    p=30 
                    console.log("plat: salade ") ;
                    break ;
                default : 
                    console.log("invalid choice");
            
            }
            let q=prompt("enter the food quantity: ")
            let fp=q*p ;
            if(fp>=200){
                rp=fp-(fp/10) ;
                console.log("final price : ", rp);
            }
            else 
                console.log("final price: ", fp ) ;

            
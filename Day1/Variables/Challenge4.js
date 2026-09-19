let prompt = require('prompt-sync')();
    let a=prompt("please enter the distance in km :") ;
    let b=prompt("please enter the fuel consumption in l :") ;


let c=(b/a)*100 ;
console.log("the fuel consumption per 100 km is : "+c+" l/100km");
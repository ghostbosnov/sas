let prompt = require('prompt-sync')();
let a=+prompt("please enter the score of part 1 : ") ;
let b=+prompt("please enter the score of part 2 : ") ;
let c=+prompt("please enter the score of part 3 : ") ;
let d=+prompt("please enter the score of part 4 : ") ;
let e=a+b+c+d
console.log("the overall score is : "+e);
console.log("the average score is : "+e/4);

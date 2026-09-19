let prompt = require('prompt-sync')();
let a=prompt("please enter the movie duration :") ;
if (a<60){
 console.log("its a short film")
}
else if(60<=a<120){
    console.log("its a standard film")
}
else console.log("its a long film")
let prompt= require('prompt-sync')()
let x1=prompt("cordoonnée x1 : ") ;
let y1=prompt("cordoonnée y1 : ") ;
let z1=prompt("cordoonnée z1 : ") ;

let x2=prompt("cordoonnée x2 : ") ;
let y2=prompt("cordoonnée y2 : ") ;
let z2=prompt("cordoonnée z2 : ") ;
 
let distance=((x2-x1)**2+(y2-y1)**2+(z2-z1)**2)**.5 ;
console.log("distance :"+distance);
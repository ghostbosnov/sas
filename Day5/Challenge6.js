let prompt= require('prompt-sync')()
let tab1=[1,2,3,4,5]
let tab2=[]
 console.log("tableau normal:"+ tab1)
 for(i=0;i<tab1.length;i++){
    tab2[i]=tab1[tab1.length-1-i]
 }
 console.log("tableau inversé : "+ tab2)

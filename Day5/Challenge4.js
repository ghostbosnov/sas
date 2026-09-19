let prompt= require('prompt-sync')()
let tab=[10,5,9,5,7]
let e=+prompt("entrer l'élement:")
 tab[tab.length]=e
 console.log(tab)
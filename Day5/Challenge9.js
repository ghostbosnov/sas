let prompt = require('prompt-sync')()
let tab1 = [2, 9, 5, 6];
let tab2 = [40, 8, 9, 2];
let fusionne = [];
for (i = 0; i < tab1.length; i++) {
    fusionne[fusionne.length] = tab1[i]
}
for (i = 0; i < tab2.length; i++) {
    fusionne[tab1.length + i] = tab2[i]
}
console.log(fusionne)


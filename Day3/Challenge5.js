function additionnerTout(...args){
    return args.reduce((acc, curr) => acc + curr, 0);
}
let prompt=require('prompt-sync')()
let argument = [];
let i=0;
while(true){
let N=prompt(`Entrer l'argument ${i + 1} à additionner: `);
if(N === "" || N === "0") 
    break;
argument.push(Number(N));
i++;
}
console.log(`La somme de tous les arguments est: ${additionnerTout(...argument)}`);

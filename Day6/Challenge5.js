let prompt = require('prompt-sync')()
let a = +prompt(`entrer l'argent à déposer : `)

let b = +prompt(`entrer l'argent à retirer : `)

let account = {
    owner: "Tayeb",
    balance: 5000,
    type: "saving"
};
const afficherSolde = () => {
    if (account.balance>=0){
        console.log(account.balance);
    }
    
}
const deposerArgent = (a) => {
    if (a > 0) {
        account.balance += a;
    }
    else console.log("le montant à déposer est invalide.")
    return account.balance;
}
console.log(deposerArgent(a))
const retirerArgent = (b) => {
    if (account.balance - b < 0 || account.balance == 0) {
        console.log(`le balance est insuffisant`)
    }
    else account.balance -= b;
    return console.log(`${account.balance}`);
}
/*const estSuffisant=()=>{
    if(account.balance-b>0){
        console.log(`le solde est suffisant`)
    }
    else console.log(`le solde est insuffisant`) ;
}*/
/*console.log(afficherSolde())*/

console.log(retirerArgent(b))
console.log(account)

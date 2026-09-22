let obtenirHeureActuelle=()=>{
    let date=new Date();
    let heures=date.getHours();
    let minutes=date.getMinutes();
    let secondes=date.getSeconds();
    return `${heures}:${minutes}:${secondes}`;
}
console.log(obtenirHeureActuelle());

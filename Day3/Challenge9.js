function MonCompteur(){
  let count=0 ;
  function creerCompteur(){
    count++;
    console.log(count);
  }
  return creerCompteur;
}
console.log(creerCompteur);
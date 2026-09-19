let prompt= require('prompt-sync')()
let r=prompt("Entrer le rayon :");
let h=prompt("entrer la hauteur :");
  const pi=3.14159;
  let v= pi* r**2 *h;
  console.log("volume :"+v);
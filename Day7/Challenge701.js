let voitures = [
  { marque: "mercedes gls63", prix: 220 , catégorie:"berline"  ,kilométrage: 200000 ,disponibilité: false },
  { marque: "Porshe cayenne", prix: 200 , catégorie: "berline" , kilométrage: 15000 ,disponibilité:true },
  { marque: "mercedes G class", prix: 250 , catégorie: "suv" , kilométrage: 1000, disponibilité:true},
  { marque: "dacia duster", prix: 30 , catégorie: "suv",  kilométrage: 10000, disponibilité:true },
  { marque: "dacia logan", prix: 25 , catégorie: "sédane", kilométrage: 5000, disponibilité:false },
  { marque: "fiat dublo", prix: 35 , catégorie: "suv" , kilométrage: 6000, disponibilité:false}
];
function voitureDispo(){
    let disp=0 ;
    for(i=0;i<voitures.length;i++){
         if(voitures[i].disponibilité==true){
            disp++ ;
         }
    }
    return disp ;
}
function moyennePrix(){
    let total=0 ;
    let moy=0 ;
    for (i=0;i<voitures.length;i++){
        total+=voitures[i].prix
    }
    moy=total/voitures.length ;
    return moy ;
}
function nmbVoitures(ctgr){
     let occ=0 ;
    for(i=0;i<voitures.length;i++){
       
        if(voitures[i].catégorie==ctgr){
            occ++ ;
        } 
        
    }
   return occ
}
function addVoiture(){
    let newcar={marque:"Mclaren" , prix: 250 , catégorie: "sport" , kilométrage: 2000 , disponibilité: true}
    voitures.push(newcar) ;
    return voitures ;
}
console.log(voitureDispo()) ;
console.log(moyennePrix()) ;
console.log(nmbVoitures("sédane")) ;
console.log(addVoiture()) ;


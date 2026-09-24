let etudiants = [
  { nom: "Ali", age: 22 },
  { nom: "Fatima", age: 19 },
  { nom: "Reda", age: 25 },
  { nom: "Imane", age: 21 }
];
function triParAge(){
    let temp ;
    for(i=0;i<etudiants.length;i++){
        for(j=0;j<etudiants.length-1-i){
            if(etudiants[j+1].age<etudiants[j].age){
                temp=etudiants[j+1] ;
                etudiants[j+1]=etudiants[j] ;
                etudiants[j]=temp ;
            }
        }
    }
    return etudiants ;
}
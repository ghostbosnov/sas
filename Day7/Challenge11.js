let utilisateurs = [
    { id: 1, nom: "Sara" },
    { id: 2, nom: "Omar" },
    { id: 3, nom: "Nadia" },
    { id: 4, nom: "Yassine" }
];
function rechercheLineaire(id) {
    let match = null;
    for (let i = 0; i < utilisateurs.length; i++) {
        if (utilisateurs[i].id == id) {
            match = utilisateurs[i] ;
        }
    }
    return match;
}
console.log(rechercheLineaire(2))
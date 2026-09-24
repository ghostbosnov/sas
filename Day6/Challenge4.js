let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
function salaireFinale(){
salaireFinale=(employee.salary+employee.bonus)-(200*employee.absenceDays)
return salaireFinale ;
}
console.log(salaireFinale())
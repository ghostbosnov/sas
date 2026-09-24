const product = {
    name: "lasagna",
    price: 22 ,
    category: "food",
    quantity: 5,
    available: true
};
let total=product.price * product.quantity;
console.log(product.name)
console.log(product.price)
console.log(product.category)
if(product.available=true){
     console.log(`le stock existe`)
}
else {console.log(`le stock est vide`)}
console.log(total)
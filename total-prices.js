

// const products = [
//     {name: 'laptop', price: 45000},
//     {name: 'shirt', price: 670},
//     {name: 'watch', price : 200},
//     {name: 'phone', price: 6700}
// ];

// let totalPrice = 0;
// for(const product of products){
//     totalPrice = totalPrice + product.price;
// }
// console.log(totalPrice);


const cart = [
    {name: 'laptop', price: 45000 , quantity: 2},
    {name: 'shirt', price: 670 , quantity: 6},
    {name: 'watch', price : 200 , quantity: 4},
    {name: 'phone', price: 6700 , quantity: 2}
];

let cardTotal = 0;
for(const product of cart){
    const productTotal = product.price * product.quantity;
    cardTotal = cardTotal + productTotal;
}
console.log(cardTotal);
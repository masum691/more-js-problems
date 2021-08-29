

// const phones = [
//     {name: 'Samsung j2', price: 9000, camera: 8, storage: 8},
//     {name: 'Oppo A3', price: 25000, camera: 46, storage: 64},
//     {name: 'Vivo S7', price: 7800, camera: 22, storage: 16},
//     {name: 'HTC K45', price: 9300, camera: 30, storage: 16},
//     {name: 'Walton W68', price: 12300, camera: 12, storage: 8},
//     {name: 'Realme C3', price: 17800, camera: 50, storage: 32},
// ];

// let cheapest = phones[0];
// for(const phone of phones){
//     if(phone.price < cheapest.price){
//         cheapest = phone;
//     }
// }
// console.log(cheapest.price);



// const phones = [
//     {name: 'Samsung j2', price: 9000, camera: 8, storage: 8},
//     {name: 'Oppo A3', price: 25000, camera: 46, storage: 64},
//     {name: 'Vivo S7', price: 7800, camera: 22, storage: 16},
//     {name: 'HTC K45', price: 9300, camera: 30, storage: 16},
//     {name: 'Walton W68', price: 12300, camera: 12, storage: 8},
//     {name: 'Realme C3', price: 17800, camera: 50, storage: 32},
// ];

// let cheapest = phones[0];
// for(const phone of phones){
//     if(phone.price < cheapest.price){
//         cheapest = phone;
//     }
// }
// console.log(cheapest.price);




/*
const mobiles = [
    {name: 'Samsung j2', price: 9000, camera: 8, storage: 8},
    {name: 'Oppo A3', price: 25000, camera: 46, storage: 64},
    {name: 'Vivo S7', price: 7800, camera: 22, storage: 16},
    {name: 'HTC K45', price: 9300, camera: 30, storage: 16},
    {name: 'Walton W68', price: 12300, camera: 12, storage: 8},
    {name: 'Realme C3', price: 17800, camera: 50, storage: 32},
];

let higtPricePhone = mobiles[0];
for(const mobile of mobiles){
    if(mobile.price > higtPricePhone.price){
        higtPricePhone = mobile;
    }
}
console.log(higtPricePhone.price);
*/




const mobiles = [
    {name: 'Samsung j2', price: 9000, camera: 8, storage: 8},
    {name: 'Oppo A3', price: 25000, camera: 46, storage: 64},
    {name: 'Vivo S7', price: 7800, camera: 22, storage: 16},
    {name: 'HTC K45', price: 9300, camera: 30, storage: 16},
    {name: 'Walton W68', price: 12300, camera: 12, storage: 8},
    {name: 'Realme C3', price: 17800, camera: 50, storage: 32},
];

let lowPriceMobile = mobiles[0];
for(const mobile of mobiles){
    if(mobile.price < lowPriceMobile.price){
        lowPriceMobile = mobile;
    }
}
console.log(lowPriceMobile.price);


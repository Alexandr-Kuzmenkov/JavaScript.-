
"use strict";

/**
 * Выбирает цену из масива и изменяет стоимость
 * @param products
 */
let discount = function (products) {
    for (let i =0; i < products.length; i++){
        products[i].price = products[i].price - (products[i].price / 100 * sale);
    }
}

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
]
let sale = 15; // На сколько % уменьшить стоимость
console.log(products);
discount(products);
console.log(products);




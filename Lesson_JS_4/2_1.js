

"use strict";
let name = prompt("Введите имя продукта");
let price = +prompt("Введите стоимость продукта");

// es5 __________________________________

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 25 / 100;
};

const product1 = new Product(name, price);
product1.make25PercentDiscount();
console.log(product1);

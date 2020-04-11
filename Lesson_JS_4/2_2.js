

"use strict";

let name = prompt("Введите имя продукта");
let price = +prompt("Введите стоимость продукта");

// es6 __________________________________________

class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 25 / 100;
    };
}

const product1 = new Product(name, price);
product1.make25PercentDiscount();
console.log(product1);


"use strict";

    // Сложение
    /**
     * @param {number} a
     * @param {number} d
     * @returns {number}
     */
function result1(a, d) {
    return a + d;
}

    // Вычитание
    /**
     * @param {number} a
     * @param {number} d
     * @returns {number}
     */
function result2(a, d) {
    return a - d;
}

    // Деление
    /**
     * @param {number} a
     * @param {number} d
     * @returns {number}
     */
function result3(a, d) {
    return a / d;
}

    // Умножение
    /**
     * @param {number} a
     * @param {number} d
     * @returns {number}
     */
function result4(a, d) {
    return a * d;
}

    /**
     * Проводит математические действия над числами
     * @param arg1
     * @param arg2
     * @param action - может быть "+", "-", "/", "*".
     * @returns {number}
     */
function mathAction(arg1, arg2, action) {
    switch (action) {
        case "+":
            return result1(arg1, arg2);
        case "-":
            return result2(arg1, arg2);
        case "/":
            return result3(arg1, arg2);
        case "*":
            return result4(arg1, arg2);
    }
}

let arg1 = +prompt("Введите первое число");
let arg2 = +prompt("Введите второе число");
let action = prompt("Укажите действие - может быть +, -, /, *");
//mathAction(arg1, arg2, action);
alert("Результат: " + mathAction(arg1, arg2, action));

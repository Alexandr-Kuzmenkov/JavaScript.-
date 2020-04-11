

"use strict";

let num = +prompt("Введите число от  0 до 999");

function parseNum(num) {

    let units = 0;
    let tens = 0;
    let hundreds = 0;

    if (!Number.isInteger(num) || num < 0 || num > 999){
        console.log('Значение аргумента должно быть целым числом в диапазоне от 0 до 999.');
        return {};
    } else {
        num = String(num);
        for (let i = 1; i <= num.length; i++) {
            if (i === num.length) {
                units = Number(num[i - 1]);
            }
            if (i === num.length - 1) {
                tens = Number(num[i - 1]);
            }
            if (i === num.length - 2) {
                hundreds = Number(num[i - 1]);
            }
        }
    }
    return {
        units: units,
        tens: tens,
        hundreds: hundreds,
    }
}
console.log(parseNum(num));
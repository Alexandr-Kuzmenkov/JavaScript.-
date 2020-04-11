

"use strict";

/**
 * Выполнил задание самостоятельно, до просмотра видео Вашего решения данной задачи.
 * Оставил свой вариант, проверил все работает, но может у Вас будут замечания.
 * @param sum
 * @returns {string}
 */
function stringLength(sum) {
    let str = String(sum);
    let numLast = str.charAt(str.length - 1);
    let numBeforeLast = str.charAt(str.length - 2);
    if (numBeforeLast == 1) {
        return " рублей "
    } else
        if (numLast == 0 || (numLast >= 5 && numLast <= 9)) {
            return " рублей "
        }
        if (numLast >= 2 && numLast <= 4) {
            return " рубля "
        }
        if (numLast == 1) {
            return " рубль "
        }
}

let sum = parseInt(prompt("Введите сумму в рублях"));
alert("Ваша сумма в " + sum + stringLength(sum) + "успешно зачислена");
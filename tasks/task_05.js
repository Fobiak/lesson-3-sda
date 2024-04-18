/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

function abs(array) {
    let count = array.length;
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return Math.round((sum/count)*10)/10;
}

//количество чисел / на сумму







































module.exports = abs
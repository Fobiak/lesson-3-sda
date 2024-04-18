/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    const arr = ['a', 'e', 'i', 'o', 'u', 'y'];
    let count = 0;

    for (let char of str) {
        if (arr.includes(char)) {
            count++;
        }
    }

    return count;
}

//создаем массив с гласными, проходим по строке и проверяем каждую букву










































module.exports = getVowelsCount
/* Вам предоставляется словарь/хэш/объект, содержащий несколько языков, и результаты вашего теста на этих языках.
  Верните список языков, на которых ваш результат теста не ниже 60, в порядке убывания баллов.
 {"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
Note: оценки всегда будут уникальными (поэтому никаких повторяющихся значений) */

function myLanguages(results) {
    let languages = [];

    for (let language in results) {
        if (results[language] >= 60) {
            languages.push(language);
        }
    }

    languages.sort((a, b) => results[b] - results[a]);

    return languages;
}
//массив для >60, проходим по словарю, добавляем в массив











































































module.exports = myLanguages


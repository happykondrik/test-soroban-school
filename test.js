
// Djinni.co
// Яков Сытник
// Руководитель отдела разработки в Soroban school

// **Впечатлен! Найдите меня в телеграмме jakob_sytnik пришлите свое резюме, ожидания по зарплате и результат выполнения тестового задания**

// **ТЕСТОВОЕ ЗАДАНИЕ**

// Поле name -> хранит first_name и last_name последовательно
// Поле dob -> хранит дату рождения в формате «DD-MM-YYYY»

// **ЗАДАНИЕ**

// Написать функцию, выполняющую отбор из Данных по входящим параметрам Аргументов вызова и возвращающую Ожидаемый результат.

// **Аргументы вызова функции: **

// Массив любимых животных
// Объект диапазона возраста с ключами from и to

// Каждый из аргументов необязательный, при вызове функции мы можем не передавать их оба или один из них.

// **Ожидаемый результат: **

// [
// {
// first_name: String,
// last_name: String,
// age: Int,
// favorite_animals: Object[]
// }
// ];

// **ДАННЫЕ**

var schemaData = [
    { name: "Jou Doe", dob: "21-03-1991", favorite_animals: ["cat", "dog"] },
    { name: "Ivan Deshek", dob: "24-04-2005", favorite_animals: ["dog"] },
    { name: "Denis Xevin", dob: "12-06-1951", favorite_animals: ["cat"] },
    { name: "Jak Baed", dob: "02-09-1961", favorite_animals: ["cat", "rabbit"] },
    { name: "Lolla Nekson", dob: "14-01-1971", favorite_animals: ["rabbit", "dog"] },
    { name: "Mariya Arroka", dob: "21-12-1981", favorite_animals: ["rabbit", "dog", "rabbit"] }
];

console.log(schemaData);

function dataSelection(animal, age) {

    var newSchemaData = JSON.parse(JSON.stringify(schemaData));

    var now = new Date();

    function convertDate(date) {
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString();
        var dd = date.getDate().toString();

        var mmChars = mm.split('');
        var ddChars = dd.split('');

        return (ddChars[1] ? dd : "0" + ddChars[0]) + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + yyyy;
    }

    console.log(convertDate(now));

    console.log(newSchemaData[1].dob);

    // var getCurrentAgeResults = newSchemaData.map(i => {
    //     i.dob = Number(convertDate(now)) - Number(i.dob);
    //     return i;
    // });

    // console.log(getCurrentAgeResults);

    var results = newSchemaData.map(i => {
        i.first_name = i.name;
        i.last_name = i.name;
        delete i.name;
        i.age = i.dob;
        delete i.dob;
        i.favorite_animals = i.favorite_animals;

        return i;
    })

    


    console.log(results);

    var someAnimals = animals => animals === animal;
    var favoriteAnimals = results.filter(obj => obj.favorite_animals.some(someAnimals));

    return favoriteAnimals;

}

console.log(dataSelection("dog"));
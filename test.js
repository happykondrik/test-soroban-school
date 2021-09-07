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

var ageRange = { from: 1, to: 100 }

function dataSelection(animal, ageRange) {

    var newSchemaData = JSON.parse(JSON.stringify(schemaData));

    var now = new Date();
    var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;

    var results = newSchemaData.map(i => {
        i.first_name = i.name.split(" ").splice(0, 1).join();
        i.last_name = i.name.split(" ").splice(1, 1).join();
        delete i.name;
        i.age = Math.round((new Date(i.dob.replace(/-/g, ".").replace(pattern, '$3-$2-$1')) - now)/-31600800000);
        delete i.dob;
        i.favorite_animals = i.favorite_animals;

        return i;
    });

    var someAnimals = animals => animals === animal;
    var favoriteAnimals = results.filter(obj => obj.favorite_animals.some(someAnimals));

    

    return favoriteAnimals;

}

console.log(dataSelection("dog", { from: 1, to: 100 }));
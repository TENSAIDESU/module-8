//8.7.1 
function printInfo(person){
    console.log("Name: $self.name, Age: $self.age")}
const person = {
    "name": "Иван",
    "age": 30
}
printInfo.call(person)
//8.7.2
function calculate(a, b, operator) {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Неверный оператор";
    }
}

var values = [2, 3, "+"];
var result = calculate.apply(null, values);
console.log(result);
//8.7.3
// Исходный массив пользователей
var users = [
    { name: "Евгений", age: 21 },
    { name: "Анна", age: 17 },
    { name: "Марат", age: 15 },
    { name: "Виктор", age: 29 }
];

var adults = users.filter(function(user) {
    return user.age >= 18;
});

var names = adults.map(function(user) {
    return user.name;
});

console.log(adults); 
console.log(names); 
// 8.7.4
// Создание функции setFullName
function setFullName(fullName) {
    this.fullName = fullName;
}

var person = {
    name: "John",
    age: 30
};

var setPersonFullName = setFullName.bind(person);

setPersonFullName("John Smith");

console.log(person.fullName); 
//8.7.5
function uniqueSortedNumbers(arr) {
    var uniqueArray = arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
    uniqueArray.sort(function(a, b) {
        return a - b;
    });

    return uniqueArray;
}
var numbers = [3, 1, 5, 3, 7, 5, 9, 1, 7];
var result = uniqueSortedNumbers(numbers);
console.log(result); 
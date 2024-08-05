"use strict";
//           EX 1
let person = {
    name: "John",
    age: 17,
    address: {
        city: "New York",
        zip: "10001",
    },
};

//Task: Write a function to update the person's city

function updateCity(person, newCity){
    person.address.city = 'Los Angeles'
}
console.log(person);

//            EX 2
let students = [
    {id: 1, name: "Alice", age: 20 },
    {id: 2, name: "Bob", age: 22 },
    {id: 3, name: "Charlie", age: 19},
];

//Task: Write a functuon to return a new array of student names
function getStudenttNames(students){
    let res = [];
    for (let i = 0; i < students.length; i++){
        res.push(students[i].name);
    }
    return res;
}

let names = getStudenttNames(students)
console.log("Students names: ", names);

//             EX 3
let product = {
    name: "Laptop",
    price: 1200,
    isAvaliable: true,
    cateregories: ['eletronics', 'computers', 'tech'],
}

function toggleAvaliability(product){
    productIsAvaliable === !product.isAvaliable
}
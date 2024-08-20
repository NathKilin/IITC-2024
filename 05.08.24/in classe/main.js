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
//console.log(person);

//            EX 2
let students = [
    {id: 1, name: "Alice", age: 20 },
    {id: 2, name: "Bob", age: 22 },
    {id: 3, name: "Charlie", age: 19},
];

//Task: Write a functuon to return a new array of student names
function getPassStudents(array, minGrade) {
    let newArray = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i].grade > minGrade) {
        newArray.push(array[i]);
      }
    }
  
   // return newArray;
  }
//             EX 3
/*let product = {
    name: "Laptop",
    price: 1200,
    isAvaliable: true,
    cateregories: ['eletronics', 'computers', 'tech'],
}

function toggleAvaliability(product){
    productIsAvaliable === !product.isAvaliable
}
*/
//                    EX 4
//Write a function to find the most expensive product


let products = [
    { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
    { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
    { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
  ];
  

  function findingMostExpensiveProduct (products){
      let mostExpensiveProduct = products[0]
    for (let i = 0; i < products.length; i++){
        if (products[i].price >= mostExpensiveProduct.price){
            mostExpensiveProduct = products[i]
        }
    }
    //console.log(mostExpensiveProduct);
    
  }
findingMostExpensiveProduct(products)

// TODO: Write a function to return an array of only available product sizes
function showingAvalibleSizes(item, availability){
    let avalib
}
showingAvalibleSizes(products, isAvailable);


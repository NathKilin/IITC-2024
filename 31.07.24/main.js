let myChoices = {
    buyingCar: true,
    numberOfKids: 1,
    dogName: 'Maximus'
}
console.log(myChoices)

console.log('')
let person = {
    name: 'Yuvdókolis III',
    age: 27,
    isKingOfAllLand: false
}
console.log(`
     ${person.name} 
Age: ${person.age}`)
isKingOfAllLand = true
console.log(`Is king of all land? ${isKingOfAllLand}`)

console.log('')
console.log('DeLorean')
let car = {
    make: "DeLorean Motor Company",
    model: "DeLorean DMC-12",
    year: 1981
}
console.log(`
    make:  ${car.make}
    model: ${car.model}`)
car.year = 1982
console.log(`    year:  ${car.year}`)

console.log('')
let fruit = {
    name: 'Orange',
    color: 'orange',
    sweetness: 6
}
console.log(`
Name: ${fruit.name}
Sweetness: ${fruit.sweetness}`)
fruit.color = 'Purple'
console.log(fruit.color)

console.log('');
let book = {
    title: "The Call of Cthuhlu",
    author: 'H.P Lovecraft',
    pages: 67
}
console.log(`
Book: ${book.title}
Author: ${book.author}`)
book.pages += 50
console.log(`Number of pages: ${book.pages}`)

console.log('')
let animal = {
    spicies: 'Gremilin',
    sound: 'WddaehWWD',
    isWild: true
}
console.log(`
Spicies: ${animal.spicies}
Sound: ${animal.sound}`)
animal.isWild = false
console.log(`Is wild: ${animal.isWild}`)

console.log('')
let car2 = {
    make: 'DeLorian Motor Company',
    model: 'DeLorian',
    year: 1981
}
car2.year = 1982
car2.color = 'gray'
let array = Object.keys(car2)
console.log(array)
for (let i = 0; i < array.length; i++) {
    console.log(`${array[i]}: ${car[array[i]]}`)
}


let guy = {
    name: 'Guy',
    lastName: 'Rodriguez',
    Age: 39,
    isFather: true,
    greeting: function(){
        console.log(`My name is${this.name}`)
    }
}
guy.greeting()

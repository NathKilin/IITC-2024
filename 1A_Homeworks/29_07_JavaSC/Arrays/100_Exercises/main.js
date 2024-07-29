console.log('')
console.log('Exercise 1')
fruits = []

console.log('')
console.log('Exercise 2')
numbers = [1, 2, 3, 4, 5]

console.log('')
console.log('Exercise 3')
colors = ["red", "green", "blue"]

console.log('')
console.log('Exercise 4')
mixed = [2, 'two', true]

console.log('')
console.log('Exercise 5')
seasons = ['summer', 'fall', 'winter', 'spring']

console.log('')
console.log('Exercise 6')
console.log(numbers.length)

console.log('')
console.log('Exercise 7')
emptyCheck = []
if (emptyCheck.length === 0){
    console.log('Empty')
}

console.log('')
console.log('Exercise 8')
dynamic = [1, 2, 3, 4, 5]
console.log(dynamic.length)

console.log('')
console.log('Exercise 9')
dynamic.push(6)
console.log(dynamic.length)

console.log('')
console.log('Exercise 10')
dynamic.pop(1)
console.log(dynamic.length)

console.log('')
console.log('Exercise 11')
console.log(colors[0])

console.log('')
console.log('Exercise 12')
lastIndex = seasons.length-1
console.log(seasons[lastIndex])

console.log('')
console.log('Exercise 13')
middleNumber = numbers.length/2
console.log(numbers)
console.log(numbers[Math.floor(middleNumber)])

console.log('')
console.log('Exercise 14')
console.log(fruits.length[1])

console.log('')
console.log('Exercise 15')
console.log(`The second color is: ${colors[1]}`)

console.log('')
console.log('Exercise 16')
fruits[0] = 'apple'
console.log(fruits)

console.log('')
console.log('Exercise 17')
let lastNumber = numbers.length - 1;
numbers[lastNumber] = 10; 
console.log(numbers)

console.log('')
console.log('Exercise 18')
thirdElement = numbers[2]
console.log(`${thirdElement*2} is double of ${thirdElement}`)

console.log('')
console.log('Exercise 19')
for (i = 0; i < colors.length; i++){
    colors[i] = colors[i].toUpperCase()
}
console.log(colors)

console.log('')
console.log('Exercise 20 ')
console.log(seasons)
tempVariable = seasons[0]
seasons[0] = seasons[seasons.length-1]
seasons[seasons.length-1] = tempVariable;

console.log(seasons)
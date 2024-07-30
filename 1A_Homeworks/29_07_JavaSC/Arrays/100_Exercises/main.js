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

console.log('')
console.log('Exercise 21')
fruits.push('orange')
console.log(fruits)

console.log('')
console.log('Exercise 22')
console.log(numbers)
removedNumber = numbers[numbers.length-1]
numbers.pop()
console.log('-',removedNumber)
console.log(numbers)

console.log('')
console.log('Exercise 23')
console.log(colors)
colors.push('white', 'purple', 'black')
console.log(colors)

console.log('')
console.log('Exercise 24')
emptyArray = []
for (i = 1; i < 6; i++){
    emptyArray.push(i)
}
console.log(emptyArray)

console.log('')
console.log('Exercise 25')
for (i = emptyArray.length-1; i >= 0; i--){
    console.log('removing', emptyArray[i])
    emptyArray.pop(i)
}
console.log(emptyArray)

console.log('')
console.log('Exercise 26')
fruits.unshift('mango')
console.log(fruits)

console.log('')
console.log('Exercise 27')
console.log(numbers)
numbers.shift()
console.log(numbers)

console.log('')
console.log('Exercise 28')
numbers.unshift(0, 1)
console.log(numbers)

console.log('')
console.log('Exercise 29')
console.log(emptyArray)
for (i = 1; i < 6; i++){
    emptyArray.unshift(i)
}
console.log(emptyArray)

console.log('')
console.log('Exercise 30')
for (i = emptyArray.length-1; i >=1; i--){
    console.log(`removing ${[i]}`)
    emptyArray.shift(emptyArray[i])
    console.log(emptyArray)
}
console.log(emptyArray)

console.log('')
console.log('Exercise 31')
console.log(colors.indexOf("GREEN"))

console.log('')
console.log('Exercise 32')
console.log(seasons.indexOf("winter"))

console.log('')
console.log('Exercise 33')
colors.push('red')
console.log(colors.indexOf('red'))

console.log('')
console.log('Exercise 34')
arrayWithDuplicates = [2,3,2,4]
console.log(arrayWithDuplicates)
console.log(arrayWithDuplicates.indexOf(2), arrayWithDuplicates.lastIndexOf(2))

console.log('')
console.log('Exercise 35')
checkNumber = 8
console.log(`Let´s check if ${checkNumber} is in our array: ${arrayWithDuplicates}`)
if (arrayWithDuplicates.indexOf(checkNumber) === -1){
    console.log(false)}
    else {console.log(true)}

console.log('')
console.log('Exercise 36')
console.log(fruits.includes('apple'))

console.log('')
console.log('Exercise 37')
console.log(numbers.includes(10))

console.log('')
console.log('Exercise 38')
middleOfArray = Math.floor(colors[colors.length/2])
secondHalf = colors.slice(middleOfArray, colors.length-1)
console.log(`Let´s check if "blue" is part of the second half of this array`)
console.log(colors)
console.log(`Answer: ${secondHalf.includes('blue')}`)
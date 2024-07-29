console.log('')
console.log('Exercise 1')
for (i = 1; i<6; i++){
    console.log(i)
}
console.log('')
console.log('Exercise 2')
for (i = 0; i<10; i++){
    console.log(i)
}
console.log('')
console.log('Exercise 3')
for (i = 10; i>0; i--){
    console.log(i)
}
console.log('')
console.log('Exercise 4')
for (i = 1; i < 11; i++){
    if (i%2 === 0){
        console.log(i)
    }
}
console.log('')
console.log('Exercise 5')
for (i = 1; i<11; i++){
    if (i % 2 !== 0){
        console.log(i)
    }
}

console.log('')
console.log('Exercise 6')
for (i = 0; i < 16; i +=3){
    console.log(i)
}

console.log('')
console.log('Exercise 7')
for (i = 1; i < 21; i +=2){
    console.log(i)
}

console.log('')
console.log('Exercise 8')
for (i = 2; i < 21; i +=2){
    console.log(i)}

console.log('')
console.log('Exercise 9')
for (i = 10; i >= 0; i -=2){
    console.log(i)}


console.log('')
console.log('Exercise 10')
for (i = 5; i < 26; i +=5){
    console.log(i)}

console.log('')
console.log('Exercise 11')
let result = "";
for (let i = 0; i < 5; i++) {
    result += "*";
}
console.log(result);

console.log('')
console.log('Exercise 12')
for (i = 1; i<4; i++){
    console.log('Hello')}

console.log('')
console.log('Exercise 13')
for (i = 1; i < 4; i++){
    console.log(`${i}!`)
}

console.log('')
console.log('Exercise 14')
for (i = 65; i < 70; i++){
    console.log(String.fromCharCode(i))
}

console.log('')
console.log('Exercise 15')
let two = "";
for (let i = 0; i < 5; i++) {
    two += " 2";
}
console.log(two)

console.log('')
console.log('Exercise 16')
let array16 = [1, 2, 3, 4, 5]
for (i = 0; i<5; i++){
    console.log(array16[i])
}

console.log('')
console.log('Exercise 17')
let array17 = ['a', 'b', 'c', 'd']
for (i = 0; i< 4; i++){
    console.log(array17[i])
}
console.log('')
console.log('Exercise 18')
let array18 = [10, 20, 30, 40, 50]
for (i = 4; i>= 0; i--){
    console.log(array18[i])
}

console.log('')
console.log('Exercise 19')
let array19 = [1, 2, 3, 4, 5, 6]
for (i = 0; i < 6; i+= 2){
    console.log(array19[i])
}

console.log('')
console.log('Exercise 20')
let colors = ['red', 'green', 'blue']
for (i = 0; i <3; i++){
    console.log(`Color ${colors[i]}`)
}

console.log('')
console.log('Exercise 21')
rslt = 0
for (i = 1; i < 6; i++){
    rslt += i
    console.log(i)
}
console.log(rslt)

console.log('')
console.log('Exercise 22')
let product = 1
for (i = 1; i < 6; i++)
{
    product *= i
    console.log(`${i} X`)}
console.log(product)

console.log('')
console.log('Exercise 23')
let evenNumber = 0
list0 = [1, 2, 3, 4, 5, 6, 7, 8]
for (i = 0; i < 8; i++){
    console.log(list0[i])
    if (list0[i] % 2 === 0){
        evenNumber += list0[i]
    }
}
console.log(`The sum of every even number on the list is ${evenNumber}`)

console.log('')
console.log('Exercise 24') 
let list1 = [10, 5, 8, 12, 3]
let biggerNum = 0
for (i = 0; i < 5; i++){
    console.log(list1[i])
    if (list1[i] >= biggerNum){
        biggerNum = list1[i]
    }
}
console.log(`the bigger number is ${biggerNum}`)

console.log('')
console.log('Exercise 25')
let sum = 0
for (i = 0; i < 11; i++){
    if  (i % 2 === 0){
        sum += i}
}
console.log(sum)

console.log('')
console.log('Exercise 26')
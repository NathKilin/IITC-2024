for (let i = 10; i > 0; i--){
    console.log(i)}
console.log('')

for (let i = 2; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i)
    }
}
console.log('')
let sum = 0
for (i = 0; i<=10; x = i++){
    sum += i;
}
console.log(sum
)

console.log('')

for (let i = 0; i <= 10; i++){
    console.log(5*i)}
console.log('')

for (let i = 0; i <= 5; i++){
    console.log("*".repeat(i))}
console.log('')

///////////////////////////////////////////////////////////

//number = 1
//while (number < 11){
//    console.log(number++)
//}
//console.log('')
//number = prompt('select a number: ')
//while (number <101){
//    console.log(number)
//   number = number * 2
//}
///////////////////////////////////
console.log('')
let t = 1
do {
console.log(t++)
}while(t<6)

//////////////////////
console.log('')
for (let i = 1; i <10; i++){
    if (i ===5) break;
    console.log(i) }
////////////////////////////
console.log('')
let foods = ['hamburguer','pizza','lasanha','soda','limon cake']
console.log(foods[2])
foods[1] = 'cake';
console.log(foods);
foods.push('spaggetti')
console.log(foods)
foods.shift();
for (let i = 0; i< foods.length; i++){
    console.log(foods[i])
}
console.log(foods.indexOf('limon cake'))

for (let i = 0; i<10; i++){
    sum = i+i
}
console.log(sum)

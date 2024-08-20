//30 Basic 'for' Loop Exercises in JavaScript

console.log('EXERCISE 1');
list = ''
function counting (n){
    for (i = 1; i <= n; i++)
        list += i + '... '
        console.log(list)
}
counting(5)

console.log('');
console.log('EXERCISE 2');
list = ''
function counting(n){
    for (i = 0; i <= n; i++)
        list +=i + '... '
        console.log(list)
}
counting(9)

console.log('EXERCISE 3');
list_10 = ''
function counting_10(m){
    for (i = m, i >= 1; i--;){
        list_10 +=i + '... '
    }
    console.log(list_10)
}
counting_10(11)

console.log('');
console.log('EXERCISE 4');
let listEven = '';

function countingEven(o) {
    for (let i = 1; i <= o; i++) {
        if (i % 2 === 0) {
            listEven += i + "... ";           }
    }
    console.log(listEven);
}

countingEven(10);
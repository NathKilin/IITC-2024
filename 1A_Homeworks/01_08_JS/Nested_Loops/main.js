console.log('30 Easy Nested Loop Exercises');
console.log('');
console.log('EXERCISE 1');

for (let i = 0; i < 2; i++) {
    let row = "";
    for (let j = 0; j < 2; j++) {
      row += "* ";
    }
    console.log(row);
  }

console.log('');
console.log('EXERCISE 2');
count = 1
for (i = 1; i <= 3; i++){
    line = '' 
    for (j = 1; j <= 3; j++){
        line += ' ' + count
        count++
    }console.log(line)
}

console.log('');
console.log('EXERCISE 3');
for (i = 1; i <= 3; i++){
    line = ''
    for ( j= 1; j <= i; j++){
        line += "*"
    }
    console.log(line);
}

console.log('');
console.log('EXERCISE 4');
function addingIndices(n){
count = 0
    for (i = 0; i < 3; i++){
        line = ''
        
        for (j = 0; j < 3; j++){
            line += count + ' '
            count++
        }
        count -= 2
        console.log(line)
    }
        
}
addingIndices(4)

//////////////////////////////////
console.log('')
console.log('EXERCISE 5');
for (i = 1; i <= 3; i++){
    let line = ''
    for (j = 1; j <= 3; j++){
        line += j*i + ' '
    }
    console.log(line);
    
}
///////////////////////////////////
console.log('')
console.log('EXERCISE 6')
for (i = 1; i <= 3; i++){
    row = ''
    for (j = 1; j <= 3; j++){
        row += '* '
    }console.log(row)
}
////////////////////////////////////
console.log('')
console.log('EXERCISE 7')
let counter = 1
for (i = 0; i < 3; i++){
    let line = ''
    for (j = 0; j < 3; j++){
        line += counter + ' '
        counter++
    }console.log(line)
} 
/////////////////////////////////////
console.log('');
console.log('EXERCISE 8');
let counter2 = 2;
for (i = 0; i < 3; i++){
    let line = ''
    for (j = 0; j < 3; j++){
        line += counter2 + " "
        counter2 += 2
    }
    console.log(line);
}
/////////////////////////////////////
console.log('');
console.log('EXERCISE 9');
let counter3 = 1
for (i = 1; i <= 3; i++){
    let line = ''
    for (j = 1; j <= i; j++){
        line += counter3 + ' '
        counter3++
    }
    console.log(line);
}
/////////////////////////////////////
console.log('');
console.log('EXERCISE 10');
let counter0 = 1
for (i = 0; i < 3; i++){
    let line = ''
    for (j = 0; j < 3; j++){
        line += ((i+j) % 2) + " "
    }
    console.log(line); 
}
/////////////////////////////////////
console.log('');
console.log('');



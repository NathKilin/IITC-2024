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
count = 1
    for (i = 0; i < 3; i++){
        line = ''
        count --
        for (j = 0; j < 3; j++){
            line += count + ' '
            count++
        }
        count --
        console.log(line)
    }
        
}
addingIndices(4)


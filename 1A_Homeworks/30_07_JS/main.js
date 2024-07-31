// https://docs.google.com/document/d/1yB6ErFdyjXWh7INfikVXyVpZ5sTM-htDnYth5FXK0sM/edit?usp=sharing

//////////////////////////////////////////////

/*Exercise 4: Count Vowels and Consonants
Objective: Write a program to count the number of vowels and consonants in a given string.
*/
console.log('');
console.log('EXERCISE 4')

let vowel = ['A', 'E', 'I', 'O', 'U']
let countOfVowels = 0
let countOfConsonants = 0
let initialWord = 'blahbGjGASIlah'
let word = initialWord.toUpperCase()
console.log(`Let´s find out how many vowels and consonants the word ${word} has`)
for (let i = 0; i <= word.length-1; i++) {
  let char = word[i]
  if (vowel.includes(char)) {
    countOfVowels++
  }
  else { countOfConsonants++ }
}
console.log(`Number of vowels: ${countOfVowels}`)
console.log(`Number of consonants: ${countOfConsonants}`)

////////////////////////////////////////////
console.log('')
console.log('EXERCISE 5')
/*Exercise 5: Reverse a String*/

let string = 'blahblah'
function reversingString(word){
  let letter = ""
  for (let i = 0; i <= word.length-1; i++){
    letter += word[word.length-1-i] 
  }
console.log(letter)  
}
reversingString(string);
/////////////////////////////////////////////
console.log('')
console.log('EXERCISE 6')

for (i = 1; i <= 5; i++){
    line = ''
    for (j = 1; j<= i; j++){
        line+= j
    }
    console.log(line)
}
/////////////////////////////
console.log('')
console.log('EXERCISE 7')

let sum = 0
let arr = [[1,2],[3,4],[5,6]]
    for (let i=0; i< arr.length; i++){
        for  (let j = 0; j < arr[i].length; j++)
            sum += arr[i][j]

    }
    console.log(`The sum is ${sum}`)

////////////////////////////

console.log('')
console.log('EXERCISE 8')

let input = 'hello';
let ourBox = []; 
let frequency = {};
for (let i = 0; i < input.length; i++) {
    let char = input[i];
    ourBox.push(char);

    if (frequency[char]) {
        frequency[char]++; 
    } else {
        frequency[char] = 1;  
    }
}

console.log( frequency);

console.log('')
console.log('EXERCISE 9')
let newArray = []
function convertingTo_1D(originalArray){
  for (let i = 0; i < originalArray.length; i ++){
    //console.log(originalArray[i])
    for (let j = 0; j <= originalArray[i].length-1; j ++){
      //console.log(originalArray[j])
      //console.log(originalArray[i][j])
      newArray.push(originalArray[i][j])
    }
  }
  console.log('new array: ', newArray);
}
convertingTo_1D([[1, 2], [3, 4], [5, 6]])
//////////////////////////////////////////////////

console.log('');
console.log('Exercise 10');
let myMatrix = [[1, 2, 3], [4, 5, 6]]
let columns = []
let lines = []
function transposing(anyMatrix){
  for (i = 0; i < myMatrix.length; i++){
    lines.push(myMatrix[i])
    for (j = 0; j < myMatrix[i].length-1; j++){
      columns+= j
      columns.push(myMatrix[j]);
    }    
  }
  //console.log(`lines ${lines}, columns ${columns}`)

}
transposing(myMatrix)
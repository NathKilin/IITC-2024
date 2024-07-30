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
    

}
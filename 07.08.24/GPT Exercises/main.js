'use strict'
// GPT EXERCISES

//Arrays
//Insert Items:

///////////////////////////////////////////////////////////////////////////////

/*
console.log('Exercise 1:')
//Add the item "Chaves" to the end of the array of characters.

let characters = ["Quico", "Seu Madruga"];
console.log(characters);
characters.push('Chaves')
console.log(characters);
*/

///////////////////////////////////////////////////////////////////////////////

/*
console.log('Exercise 2:')
//Add the item "Dona Florinda" to the beginning of the array of characters.
let characters = ["Chiquinha", "Professor Girafales"];
console.log(characters);
characters.unshift('Dona Florinda')
console.log(characters);
*/

///////////////////////////////////////////////////////////////////////////////

//Select Items:

/*
console.log('Exercise 3:')
//Access the second item of the array of characters.
let characters = ["Chaves", "Quico", "Seu Barriga"];
const secondCharacter = characters[1] 
console.log(secondCharacter);
*/


///////////////////////////////////////////////////////////////////////////////

/*
console.log('Exercise 4:')
//Find the index of the character "Seu Madruga" in the array.
let characters = ["Chaves", "Seu Madruga", "Quico"];
const index = characters.indexOf('Seu Madruga')
console.log(index);
*/


///////////////////////////////////////////////////////////////////////////////

//Remove Items:
/*
console.log('Exercise 5:')
//Remove the last item from the array of characters.
let characters = ["Dona Clotilde", "Chaves", "Quico"];
console.log(characters);
characters.pop()
console.log(characters);
*/

///////////////////////////////////////////////////////////////////////////////

/*
console.log('Exercise 6:')
//Remove the first item from the array of characters.
let characters = ["Seu Barriga", "Chiquinha", "Chaves"];
console.log(characters);
characters.shift()
console.log(characters);
*/


///////////////////////////////////////////////////////////////////////////////

//OBJECTS
//Insert/Update Items:

/* 
console.log('Exercise 7:')
//Add the key "age" to the object "Chaves" with the value 8.
let chaves = { name: "Chaves" };
console.log(chaves);
chaves.age = 8;
console.log(chaves);
*/


///////////////////////////////////////////////////////////////////////////////

/*
console.log('Exercise 8 :')
//Update the key "age" of the object "Seu Madruga" to 45.
let seuMadruga = { name: "Seu Madruga", age: 44 };
console.log(seuMadruga);
seuMadruga.age = 45
console.log(seuMadruga);
*/


///////////////////////////////////////////////////////////////////////////////

/*
console.log('Exercise 9:')
//Access the value of the key "name" in the object "Quico".
let quico = { name: "Quico", age: 9 };
let name = quico.name
console.log(name);
*/

///////////////////////////////////////////////////////////////////////////////

/*
console.log('Exercise 10:')
//Check if the key "profession" exists in the object "Professor Girafales".
let professorGirafales = { name: "Professor Girafales", age: 50 };
function checkingKey (character, key){
    if (key in character){
        console.log('Category already exists');
    }
    else {console.log('this category doesn`t exists');
    }
}
checkingKey(professorGirafales, 'profession')
*/


///////////////////////////////////////////////////////////////////////////////


//Arrays Inside Objects
//Insert Items:

/*
console.log('Exercise 11:')
//Add "Dona Clotilde" to the end of the array in the key "characters" of the object "vila".
let vila = {
name: "Chaves",
characters: ["Chaves", "Quico"]
};
vila.characters.push('Dona clotilde')
console.log(vila);
*/


///////////////////////////////////////////////////////////////////////////////


console.log('Exercise 12:')
//Add "Jaiminho" to the beginning of the array in the key "characters" of the object "vila".
let vila = {
    name: "Chaves",
    characters: ["Seu Madruga", "Chiquinha"]
    };
    // Your code here
    console.log(vila);
    
    /*
    Select items
    Exercise 13:
Access the first character in the array in the key "characters" of the object "show".

javascript
Copy code
let show = {
    name: "Chaves",
    characters: ["Dona Clotilde", "Chaves"]
};
// Your code here
console.log(firstCharacter);
Exercise 14:
Find the index of the character "Chiquinha" in the array in the key "characters" of the object "show".

javascript
Copy code
let show = {
    name: "Chaves",
    characters: ["Chaves", "Chiquinha", "Quico"]
};
// Your code here
console.log(index);
Remove Items:

Exercise 15:
Remove the last character from the array in the key "characters" of the object "show".

javascript
Copy code
let show = {
    name: "Chaves",
    characters: ["Seu Barriga", "Professor Girafales", "Quico"]
};
// Your code here
console.log(show);
Exercise 16:
Remove the first character from the array in the key "characters" of the object "show".

javascript
Copy code
let show = {
    name: "Chaves",
    characters: ["Quico", "Chaves", "Seu Madruga"]
};
// Your code here
console.log(show);
*/






//Here are the five exercises using Star Wars, Lord of the Rings, and Harry Potter universes to reinforce your weak points:
/*
Exercise 1: Add Characters to a Category
Create a function that adds multiple characters to a specific category
in a character library. The function should accept the category
and an array of character names as parameters.
*/

/*
console.log('Exercise 1')
let characters = {
    starWars: ["Luke Skywalker", "Darth Vader"],
    lotr: ["Frodo Baggins", "Gandalf"],
    harryPotter: ["Harry Potter", "Hermione Granger"]
};

function addMultipleCharacters(characters, category, newCharacters) {
    if (characters[category]) {
        characters[category].splice(0, 0, ...newCharacters);
    } else {
        console.log(`Category ${category} does not exist in the library.`);
    }
}

let newLotrCharacters = ["Aragorn", "Legolas"];
addMultipleCharacters(characters, 'lotr', newLotrCharacters);
console.log(characters);

*/


///////////////////////////////////////////////////////////////
/*


        Exercise 2: Remove a Specific Character
        Create a function that removes a specific character from a category. The function should accept the category and the name of the character as parameters.
        
Example:

javascript
Copy code
let characters = {
    starWars: ["Luke Skywalker", "Darth Vader"],
    lotr: ["Frodo Baggins", "Gandalf"],
    harryPotter: ["Harry Potter", "Hermione Granger"]
};

function removeCharacter(characters, category, characterName) {
    // Implement the function here
}

removeCharacter(characters, 'harryPotter', 'Hermione Granger');
console.log(characters);
Exercise 3: Update a Character's Name
Create a function that updates the name of a character in a specific category. The function should accept the category, the old name, and the new name as parameters.

Example:

javascript
Copy code
let characters = {
    starWars: ["Luke Skywalker", "Darth Vader"],
    lotr: ["Frodo Baggins", "Gandalf"],
    harryPotter: ["Harry Potter", "Hermione Granger"]
};

function updateCharacterName(characters, category, oldName, newName) {
    // Implement the function here
}

updateCharacterName(characters, 'starWars', 'Darth Vader', 'Anakin Skywalker');
console.log(characters);
Exercise 4: List All Categories with Character Count
Create a function that lists all categories in the character library and the count of characters in each.

Example:

javascript
Copy code
let characters = {
    starWars: ["Luke Skywalker", "Darth Vader"],
    lotr: ["Frodo Baggins", "Gandalf"],
    harryPotter: ["Harry Potter", "Hermione Granger"]
};

function listCategoriesWithCharacterCount(characters) {
    // Implement the function here
}

listCategoriesWithCharacterCount(characters);
Exercise 5: Transfer Characters Between Categories
Create a function that transfers a character from one category to another. The function should accept the source and destination categories, as well as the character's name, as parameters.

Example:

javascript
Copy code
let characters = {
    starWars: ["Luke Skywalker", "Darth Vader"],
    lotr: ["Frodo Baggins", "Gandalf"],
    harryPotter: ["Harry Potter", "Hermione Granger"]
};

function transferCharacter(characters, fromCategory, toCategory, characterName) {
    // Implement the function here
}

transferCharacter(characters, 'lotr', 'harryPotter', 'Gandalf');
console.log(characters);
*/
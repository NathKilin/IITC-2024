// GPT EXERCISES
//Here are the five exercises using Star Wars, Lord of the Rings, and Harry Potter universes to reinforce your weak points:

//Exercise 1: Add Characters to a Category
//Create a function that adds multiple characters to a specific category in a character library. The function should accept the category and an array of character names as parameters.


let characters = {
starWars: ["Luke Skywalker", "Darth Vader"],
lotr: ["Frodo Baggins", "Gandalf"],
harryPotter: ["Harry Potter", "Hermione Granger"]
};

function addMultipleCharacters(characters, category, newCharacters) {
// Implement the function here
}

let newLotrCharacters = ["Aragorn", "Legolas"];
addMultipleCharacters(characters, 'lotr', newLotrCharacters);
console.log(characters);
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
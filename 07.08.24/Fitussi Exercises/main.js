//Practice Exercises
// 1. Create an object representing a library. It should have properties for different genres, each containing an array of book titles.

let library = {
    horror: ["The Call of Cthulhu", "At the Mountains of Madness"],
    fantasy: ["The Hobbit", "The Lord of the Rings"],
    fiction: ["The Gods Themselves", "I, Robot"],
    romance: ["Pride and Prejudice", "Jane Eyre"]
};
//console.log(library);

///////////////////////////////////////////////////////////////////////////////////////////////

// 2. Add a new book to the "fantasy" genre in your library object.

library.fantasy.push('The Silmarilion')
library.fiction.splice(0, 1, 'Dune')
library.romance.unshift('Wonder')
//console.log(library);

///////////////////////////////////////////////////////////////////////////////////////////////

// 3. Create a function that takes the library object and a genre as parameters, and returns the number of books in that genre.
function countingBooksInCategory (library, genre){
    if (library[genre]){
        return library[genre].length
    }
    else{
        return 0;
    }
}
let numberOfBooks = countingBooksInCategory(library, 'fantasy');
//console.log(`Category: fantasy 
//number of books: ${numberOfBooks}`);

///////////////////////////////////////////////////////////////////////////////////////////////

//Create an object representing a school. It should have properties for different subjects, each containing an array of student names who are enrolled.
let school = {
    mathematics: [
        "Isaac Newton",
        "Carl Friedrich Gauss",
        "Leonhard Euler"
    ],
    science: [
        "Albert Einstein",
        "Marie Curie",
        "Nikola Tesla"
    ],
    history: [
        "Julius Caesar",
        "Cleopatra",
        "Winston Churchill"
    ],
    literature: [
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain"
    ]
};

///////////////////////////////////////////////////////////////////////////////////////////////

// 4. Write a function that adds a new student to a specific subject in the school object.
function addingNewStudent(school, subject, student){
    if (school[subject]){
        school[subject].unshift(student);
    }    
    else {console.log(`Genre ${subject} does not exist in the school.`);
    }
}
addingNewStudent(school, 'literature', 'Tolkien')
//console.log(school);

///////////////////////////////////////////////////////////////////////////////////////////////

//Create a function that prints out all students enrolled in a particular subject.
function printingStudentsSubject(school, subject){
    if (school[subject]){
        console.log('subject: ', subject, school[subject]);}
    else{console.log(`There's no such subject`);
    }
}
//printingStudentsSubject(school, 'mathematics')


///////////////////////////////////////////////////////////////////////////////////////////////
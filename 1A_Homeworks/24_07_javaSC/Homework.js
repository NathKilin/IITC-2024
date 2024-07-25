console.log ('-Variable Declaration and Boolean Expressions');
let firstName = 'admin     ';
let lastName = 'Douglas';

console.log (firstName + ' ' + lastName);
let age = 40;
console.log (age);

const isStudent = true;
if (isStudent) console.log('Is a student');
else console.log('not a student');
console.log('');
let isAdult = age >= 67;
let isJohn = firstName === 'John';

if (isAdult) console.log('Is adult');
else console.log('not an adult');
if (isJohn) console.log('called John');
else console.log('not John');

////////////////////////////////////////////////////
console.log(' ');
console.log ('-Functions and String Methods');
fullName = (firstName + ' ' + lastName);
greet = ('Hello, ' + fullName.toUpperCase() + '! Welcome to the IITC Bootcamp!');
console.log(greet);

console.log(' ');
console.log ('-Conditions');
function checkAge () {
if (age <13 && age > 0) 
    console.log ("You´re achild")
    else if (age >= 13 &&  age <=17)
        console.log('You´re a goddamn teenager!')
    else if (age >= 18 && age <= 64)
        console.log('You´re an adult. Ya Gotta bills to pay')
    else if (age >= 65 && age <= 99)
        console.log('You´re senior')
    else if (age >= 100)
        console.log('Goddman! Man... you´re old.')
    else (console.log('Invalid age number'));
}
checkAge(age);

console.log(' ');
let dayOfWeek = "tuesday";

switch (dayOfWeek) {
  case "monday":
    console.log("today is Monday");
    break;
  case "tuesday":
    console.log("today is Tuesday");
    break;
  case "wednesday":
    console.log("Today is Wednesday");
    break;
  case "thursday":
    console.log("Today is Thursday");
    break;
  case "friday":
    console.log("Today is Friday");
    break;
  case "saturday":
    console.log("Today is Saturday");
    break;
  case "sunday":
    console.log("Today is Sunday");
    break;
  default:
    console.log("Invalid day");
}

////////////////////////////////////////////////////
console.log(' ')
console.log('Complex Conditions')
function checkEligibility (age, isStudent){
    if (age <18 && isStudent) return "You´re a minor student"
        else if (age < 18 && !isStudent) return"You´re a minor but not a student"
        else if (age >= 18 && age<= 24 && isStudent) return"You´re a young adult student"
        else if (age >= 18 && age <= 24 && !isStudent) return "You´re a young adult but not a student"
        else if (age >25 && isStudent) return "Your´re an adult student"
        else if (age >25 && !isStudent) return "You´re and adult but not a student"
    else return "Invalid information"
}
console.log(checkEligibility(age, isStudent))

////////////////////////////////////////////////////
console.log(' ')
console.log('String Comparison and Manipulation')

function formatName(firstName) {
    let trimmedName = firstName.trim();
    let lowerCaseName = trimmedName.toLowerCase(); 
    
    if (lowerCaseName === 'admin') {
        return "Welcome, Admin!"; 
    } else {
        return `Hello, ${trimmedName}!`;
    }
}

console.log(formatName(firstName)); 

////////////////////////////////////////////////////
console.log(' ')
console.log('Nested If Statments')

const isMember = false
function checkDiscount(age, isMember){
    if (age > 0 && age < 18)
        if (isMember) return "You got 20% discount"
        else return "You get a 10% discount"
    else if (age >= 18 && age <65)
        if (isMember) return "You get a 10% discount"
        else return "No discount avalible"
    else if (age >= 65)
        if (isMember) return "You get a 30% discount"
        else return "You get a 20% discount"
}
console.log(checkDiscount(age, isMember))

////////////////////////////////////////////////////
console.log(' ')
console.log('Login validation')

let userName = 'robson'
let password = 4321

function validateLogin(userName, password){
    const storeUsername = 'admin'
    const storedPassword = 1234
    if (userName === storeUsername) 
        userName = true
        else userName = false
    if (password === storedPassword)
        password = true
        else password = false
    if (password && userName)
        return "Login successful"
        else return "Invalid username or password"

}
console.log(validateLogin(userName, password))


////////////////////////////////////////////////////
console.log(' ')
console.log('Substring Extraction')

function extractInitials (firstName, lastName){
    let firstNameInitial = firstName.charAt(0).toUpperCase();
    let lastNameInitial = lastName.charAt(0).toUpperCase();
    let initials = (firstNameInitial+'.'+lastNameInitial)
    return initials;
}
console.log(extractInitials(firstName, lastName));
////////////////////////////////////////////////////
console.log(' ')
console.log('String Replacement')

let email = "nathkilin@gmail.com";
 
function maskingEmail(email) {
    let firstPartOfEmail = email.substring(0, email.lastIndexOf('@'));
    let maskedPart = '*'.repeat(firstPartOfEmail.length);
    let maskedEmail = email.replace(firstPartOfEmail, maskedPart);
    return maskedEmail;
}
console.log(maskingEmail(email));
////////////////////////////////////////////////////
console.log(' ')
console.log('Nested If-Else')

let score = 12
function gradeCalculator(score){
    if (score >= 90)return 'A'
    else if (score >= 80) return 'B'
    else if (score >=70) return 'C'
    else if (score >= 60) return 'D'
    else return 'F'
}
console.log(gradeCalculator(score))
////////////////////////////////////////////////////
console.log(' ')
console.log('Complex Boolean Conditions:')
let isCitizen = true
function canVote(age, isCitizen){
    if (isCitizen && age >= 18) return 'Can vote'
    else return "You are not eligible to vote"
    }
console.log(canVote(age, isCitizen))
////////////////////////////////////////////////////
console.log(' ')
console.log('String and Number Conversion')
function convert_to_upperCase_and_add_age(firstName, age){
    upper_name = firstName.toUpperCase()
    age_string = age.toString()
    return upper_name+age_string;
}
console.log(convert_to_upperCase_and_add_age(firstName, age))
////////////////////////////////////////////////////
console.log(' ')
console.log('Capitalize First Letter')
let word = 'babA'
function capitalize(word){
    first_word = word.substring(0,1)
    first_word_upper = first_word.toUpperCase()
    rest_of_the_word = word.substring(1,).toLowerCase()
    return first_word_upper+rest_of_the_word
}
console.log(capitalize(word));
////////////////////////////////////////////////////
console.log(' ')
console.log('Check Substring')
let mainString = 'sopa';
let subString = 'java';

function containsSubstring(mainString, subString) {
    //if (mainString.lastIndexOf(subString) !== -1) return true;
    //else return false;
    return mainString.includes(subString);
}
console.log(containsSubstring(mainString, subString)); // Deve retornar true
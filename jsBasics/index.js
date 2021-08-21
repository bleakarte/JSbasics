//My first JS
console.log('Hello World');

// Variables
let jina = 'Sam';
console.log(jina);
/*
They can't be a reserved keyword
They should be meaningful
Cannot start with a number 
Cannot contain a space or hypen
They are case sensitive
The value can be changed
*/

// Constant
const interestRate = 0.3;
console.log(interestRate);
// The value cannot be changed

// Data Types
//Primitives/Value Types
let name = 'Bleak'; //String 
let age = 21; //Number
let isLegal = true; //Boolean
let firstName = undefined; //Undefined
let selectedColor = null; //Null

// Reference Types
// Objects
let person = {
    name:'Arte',
    age: 30
}
// Accessing object data
// Dot Notation
person.name = 'Sable';
// Bracket Notation
person['age'] = 30;
console.log(person);

// Arrays
let selectedColors = ['red','blue'];
// The data is dynamic and the data types can be different
selectedColors[2] = 3;
console.log(selectedColors);

// Functions
// Perfoming a task
function greet(name) {
    // body of the function
    console.log('Wagwan '+ name);
}
greet('Janus');
// Calculate a value
function square(number){
    return number * number;
}
console.log(square(2))
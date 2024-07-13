// This is my first Javascript code!
console.log('Hello World');
/* VARIABLES
 They are used to store data temporarily in a computer's memory. For example:Data is stored somewhere and give that
 memory location a name(Variable Name)
and with this name,we can read the data at the given location in the future.
To declare a variable,we use the 'let' keyword. Afterwards,we give the variable a name or an identifier(this is going to be like
 a label placed on a box).
String-Sequence of characters. To declare strings in javascript use ('')
*/
let name = 'Kezaiah';
console.log('name');
/*Rules for naming variables:
1. Variables cannot be a reserved keyword(let,if,else,var,true,false,typeof,return,etc)-it'll result in an error.
2. Variables should be meaningful.
3. Variables cannot start with a number(eg:1name)
4. Variables cannot contain a space or hyphen.
5. Variables are case sensitive.
*/
let firstName = 'Kezaiah';  /*(use of camel notation: which means the first letter of the first word should be 
lowercase and the first letter
of every word that comes after should be uppercase )*/
let lastName = 'Fixon-Owoo'; 
console.log(firstName, lastName);
/*NOTE: To declare multiple variables,Two ways;
1. On one line and separate using a comma. Eg: firstName = 'Kezaiah', lastName = 'Fixon-Owoo';
2. Each declaration on a different line.Eg: let firstName = 'Kezaiah';
                                            let lastName = 'Fixon-Owoo';*/
           
/* CONSTANTS:
The value of a variable can change but the value of a constant cannot change.
If there's no need to reassign a variable,constant should be your default. Otherwise if you need to reassign a 
variable use 'let'. Eg:                                       
let interestRate = 0.3;(This can always be changed later)
interestRate = 1;
console.log(interestRate);*/
/*const interestRate = 0.3;
interestRate = 1;
console.log(interestRate);//This will result in an error.

/* TYPES OF VALUES.
   PRIMITIVES /VALUE TYPES: and REFERENCE TYPES  
   Strings
   Numbers
   Boolean(True or False)
   Undefined
   Null(This is used in situations where we want to clear the value of a variable.*/ 

   let car = 'Toyota';//String literal
   let age = 30;// Number literal
   age = 30; 
   let isApproved = true;//Boolean literal. Eg: If the order is approved, then it needs to be shipped.
   let selectedColor = null;/*Eg: If we want to present the user with a list of colors and the user has no 
   selection,you want to set the selected
    color variable to *null*)*/
    
/* DYNAMIC LANGUAGE: TYPES
1.Static Languages(Statically-typed)
when a variable is declared,the type of that variable is set and cannot be changed in the future.Eg: string name = 'Kezaiah';
2.Dynamic Language(Dynamically-typed)
The type of a variable can change at runtime.
NOTE: In javascript unlike other programming languages, we dont two kinds of numbers.We dont have floating-point numbers and 
integers,all numbers are of type number.
*/

/*(TYPES OF VALUES) REFERENCE TYPES:
Object: When dealing with multiple related variables,we can put these variables inside of an object.
*/
let person = {
   name: 'Kezaiah',
   age: 30
};/*To declare a person object, start with 'let' or 'Const' if we dont want to reassign the person object and set 
it to an object literal */

//Two ways;Dot notation.We can use the dot notation to read the value of a property
person.name = 'Kwarley';
/*Bracket notation. Instead of dot,we use square brackets[]and pass a string that determines the name of the target property
single'' or double quotes"",but single quotes are more common
*/
person['name'] = 'Naa';
console.log(person.name);

/*Arrays.An array is a data structure that we use to represent a list of items.Dealing with a list of objects. Eg: the list of products in a shopping cart or the list of colors the user has selected.
In such situations,we use an array to store that list.[]square brackets are called array literal.They indicate an empty array.Items can be added(colors,cuttlery,cars,etc).
Each element has an index and that determines the position of that element in the array.
*/
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors);//length property returns the number of items or elements in an array.

/*FUNCTIONS:A function is basically a set of statements that performs a task or calculates a value.Parenthesis()is part of the syntax
for declaring functions.Curly brackets{},the curly brackets contains the body of the function.And this is where we add all these
statements to define some kind of logic in our application,*/

//Performing a task.
function greet(name, lastName) {
   console.log('Hello ' + name + ' ' + lastName);//When declaring a function,we dont need to add semicolon at the end.eg:{};Because we are not declaring it like a variable.
}//undefined there in the console is because the default value of variables in JS is undefined.And also because we did not pass a value for the lastname,by default its undefined
greet('Kezaiah', 'Fixon-Owoo');

//Concatenations
/*Types of functions */
//functions that calculates a value
function square(number) {
  return number * number;
}

console.log(square(2));
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
console.log(name);
/*Rules for naming variables:
1. Variables cannot be a reserved keyword(let,if,else,var,true,false,etc)-it'll result in an error.
2. Variables should be meaningful.
3. Variables cannot start with a number(eg:1name)
4. Variables cannot contain a space or hyphen.
5. Variables are case sensitive.
*/
let firstName = 'Kezaiah';  /*(use of camel notation: which means the first letter of the first word should be lowercase and the first letter
of every word that comes after should be uppercase )*/
let lastName = 'Fixon-Owoo'; 
console.log(firstName, lastName);
/*NOTE: To declare multiple variables,Two ways;
1. On one line and separate using a comma. Eg: firstName = 'Kezaiah', lastName = 'Fixon-Owoo';
2. Each declaration on a different line.Eg: let firstName = 'Kezaiah';
                                            let lastName = 'Fixon-Owoo';*/
           
/* CONSTANTS:
The value of a variable can change but the value of a constant cannot change.
If there's no need to reassign a variable,constant should be your default. Otherwise if you need to reassign a variable use 'let'. Eg:                                       
let interestRate = 0.3;(This can always be changed later)
interestRate = 1;
console.log(interestRate);*/
const interestRate = 0.3;
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
   let isApproved = true;//Boolean literal. Eg: If the order is approved, then it needs to be shipped.
   let selectedColor = null;/*Eg: If we want to present the user with a list of colors and the user has no selection,you want to set the selected
    color variable to *null*)*/
    
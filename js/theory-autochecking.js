'use strict';

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 1/32  Status: Done

/*
** THEORY
There can be more than one return statement in a function. The main thing to remember is that the execution of a function is interrupted when the interpreter encounters a return, and all code after it will be ignored in the current function call.

Let's take the age-of-majority function we are already familiar with. It works, but there is "extra" code here, that is, the body of the function can be optimized. In this case, the "early return" technique (pattern) is suitable.

function checkAge(age) {
  let message;

  if (age >= 18) {
    message = "You are an adult";
  } else {
    message = "You are not an adult";
  }

  return message;
}
If the condition in if is met, that is, it is converted to true, we return the string "You are an adult" and the code below will not be executed.
If the condition in if is not met, that is, it is converted to false, return the string "You are a minor".
Using the "early return" pattern and the fact that the execution of the function is interrupted at the return operator, we get rid of the extra variable and the else block. That is, this technique helps to "smooth out" the branches.

** TASK
Write the condition in the if statement so that the function works correctly and uses the "early return" pattern.

** Test
The function checkAge(age) is declared.
The >= operator was used in the age check expression
The call checkAge(20) returns "You are an adult"
The call checkAge(8) returns "You are a minor"
The call checkAge(14) returns "You are a minor"
The call checkAge(38) returns "You are an adult"
There is only one if statement in the function body
There is no else or else if statement in the function body


 */

// Javascript Editor:
// START
/*

function checkAge(age) {
  if () { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
}

*/

// Javascript Editor:
// FINISH
/*
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return 'You are an adult';
  }

  return 'You are a minor';
}

checkAge(20); // returns "You are an adult"
checkAge(8); // returns "You are a minor"
checkAge(14); // returns "You are a minor"
checkAge(38); // returns "You are an adult"

console.log(checkAge(20)); // returns "You are an adult"
console.log(checkAge(8)); // returns "You are a minor"
console.log(checkAge(14)); // returns "You are a minor"
console.log(checkAge(38)); // returns "You are an adult"



console.log(
*/

// RESULT
/*
Result

Done
Assignment 1/32
'Function Declaration' is expected
The name 'checkAge' is assigned to the function
The function 'checkAge' has one parameter 'age'
The function 'checkAge' contains if with >= operator
The function 'checkAge' contains two return
There is no `else` or `else if` statement in the function body
There is only one `if` statement in the function body
The function checkAge(20) call returns You are an adult
The function checkAge(8) call returns You are a minor
The function checkAge(14) call returns You are a minor
The function checkAge(38) call returns You are an adult

Result of code execution:
You are an adult
You are a minor
You are a minor
You are an adult

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 2/32  Status: Done

/*
** THEORY
same

** TASK
The checkPassword function takes the user's password in the password parameter, checks it against the administrator password in the ADMIN_PASSWORD variable, and returns a message about the result of the comparison.

Refactor the code of the checkPassword function using the early "return pattern":

remove the variable message
remove the else
the code should work the same as before the "early return" pattern optimization


** Test
The function checkPassword(password) is declared
The call checkPassword("mangohackzor") returns "Access denied, wrong password!"
The call checkPassword("polyhax") returns "Access denied, wrong password!"
The call checkPassword("jqueryismyjam") returns "Welcome!"


 */

// Javascript Editor:
// START
/*

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}


*/

// Javascript Editor:
// FINISH
/*
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }

  return 'Access denied, wrong password!';
  // Change code above this line
}

checkPassword('mangohackzor'); //  "Access denied, wrong password!"
checkPassword('polyhax'); //  "Access denied, wrong password!"
checkPassword('jqueryismyjam'); //  "Welcome!"

console.log(checkPassword('mangohackzor')); //  "Access denied, wrong password!"
console.log(checkPassword('polyhax')); //  "Access denied, wrong password!"
console.log(checkPassword('jqueryismyjam')); //  "Welcome!"

console.log(
*/

// RESULT
/*
Result

Done

Assignment 2/32
'Function Declaration' is expected
The name 'checkPassword' is assigned to the function
The function 'checkPassword' has one parameter 'password'
The function 'checkPassword' contains if with operator ===
The function 'checkPassword' does not contain statement else
The function 'checkPassword' in return contains a string
The function 'checkPassword' contains no variables besides ADMIN_PASSWORD
The function 'checkPassword' contains exactly two return
The function checkPassword('mangohackzor') call returns Access denied, wrong password!
The function checkPassword('polyhax') call returns Access denied, wrong password!
The function checkPassword('jqueryismyjam') call returns Welcome!

Result of code execution:
Access denied, wrong password!
Access denied, wrong password!
Welcome!

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 3/32  Status: Done

/*
** THEORY
same

** TASK
The checkStorage function checks the order possibility and returns a message about the result. It takes two parameters, the values of which will be set during its call.

available - available quantity of goods in the warehouse
ordered - number of items in the order
Refactor the code of the checkStorage function using the "early return" pattern.

** Test
The function checkStorage(available, ordered) is declared
The call checkStorage(100, 50) returns "The order is accepted, our manager will contact you"
The call checkStorage(100, 130) returns "Your order is too large, not enough goods in stock!"
The call checkStorage(70, 0) returns "Your order is empty!"
The call checkStorage(200, 20) returns "The order is accepted, our manager will contact you"
The call checkStorage(200, 250) returns "Your order is too large, not enough goods in stock!"
The call checkStorage(150, 0) returns "Your order is empty!"

 */

// Javascript Editor:
// START
/*

function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
}


*/

// Javascript Editor:
// FINISH
/*

function checkStorage(available, ordered) {
  // Change code below this line

  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';
  // Change code above this line
}

checkStorage(100, 50); // retturns "The order is accepted, our manager will contact you"
checkStorage(100, 130); // retturns "Your order is too large, not enough goods in stock!"
checkStorage(70, 0); // retturns "Your order is empty!"
checkStorage(200, 20); // retturns "The order is accepted, our manager will contact you"
checkStorage(200, 250); // retturns "Your order is too large, not enough goods in stock!"
checkStorage(150, 0); // retturns "Your order is empty!"

console.log(checkStorage(100, 50)); // retturns "The order is accepted, our manager will contact you"
console.log(checkStorage(100, 130)); // retturns "Your order is too large, not enough goods in stock!"
console.log(checkStorage(70, 0)); // retturns "Your order is empty!"
console.log(checkStorage(200, 20)); // retturns "The order is accepted, our manager will contact you"
console.log(checkStorage(200, 250)); // retturns "Your order is too large, not enough goods in stock!"
console.log(checkStorage(150, 0)); // retturns "Your order is empty!"



console.log(
*/

// RESULT
/*
Result

Done

Assignment 3/32
'Function Declaration' is expected
The name 'checkStorage' is assigned to the function
The function 'checkStorage' has two parameters: 'available' and 'ordered'
'Early return' refactoring is done
The function 'checkStorage' contains 3 return

Result of code execution:
The order is accepted, our manager will contact you
Your order is too large, not enough goods in stock!
Your order is empty!
The order is accepted, our manager will contact you
Your order is too large, not enough goods in stock!
Your order is empty!

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 4/32  Status: Done

/*
** THEORY
An array is used to store an ordered collection of items. It is declared with the opening and closing square brackets [] - an array literal. Within the brackets, each element of the array is separated by a comma.

const planets = ["Earth", "Mars", "Venus"];
Useful
When declaring a variable for an object or array, programmers usually use const. They do this in order not to accidentally overwrite the value, because an attempt to rewrite will throw an error before the code reaches the user.

** TASK
Declare the variable fruits and assign to it an array of fruits - the strings "apple", "plum", "pear" and "orange".

** Test
The variable fruits is declared
The value of the variable fruits is the array ["apple", "plum", "pear", "orange"]

 */

// Javascript Editor:
// START
/*
// Change code below this line

*/

// Javascript Editor:
// FINISH
/*

const fruits = ["apple", "plum", "pear", "orange"];
console.log(fruits);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 4/32
The variable 'fruits' is declared
The variable 'fruits' is declared with const
The value of the variable 'fruits' is an array
The 'fruits' array contains 4 values
The 'fruits' array contains the value 'apple'
The 'fruits' array contains the value 'plum'
The 'fruits' array contains the value 'pear'
The 'fruits' array contains the value 'orange'

Result of code execution:
[ 'apple', 'plum', 'pear', 'orange' ]

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 5/32  Status: Done

/*
** THEORY
To access the value of an array element, use the square brackets syntax array[index]. There must be no space between the array variable name and the square brackets.

Attention
Indexing of array elements starts with zero.

const planets = ["Earth", "Mars", "Venus"];
planets[0]; // "Earth"
planets[2]; // "Venus"

** TASK
Declare three variables and assign a value to each one using square brackets notation.

Variable name	Variable value
firstElement	first element of the array
secondElement	second element of the array
lastElement	last element of the array


** Test
The firstElement variable is declared
The firstElement variable value is a string "apple"
The secondElement variable is declared
The secondElement variable value is a string "plum"
The lastElement variable is declared
The lastElement variable value is a string "orange"



 */

// Javascript Editor:
// START
/*

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line


*/

// Javascript Editor:
// FINISH
/*

const fruits = ["apple", "plum", "pear", "orange"];

// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

console.log(firstElement, secondElement, lastElement);



console.log(
*/

// RESULT
/*
Result

Done

Assignment 5/32
The variable 'fruits' was declared using const
The value of the variable 'fruits' is an array
The 'fruits' array contains 4 values
The variable 'firstElement' was declared using const
The variable 'secondElement' was declared using const
The variable 'lastElement' was declared using const
The firstElement variable has 'apple' value
The secondElement variable has 'plum' value
The 'fruits' array contains 'pear' value
The lastElement variable has 'orange' value

Result of code execution:
apple plum orange

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 6/32  Status: Done

/*
** THEORY
Unlike strings, array elements can be changed by referring to them by index and assigning a different value.

const numbers = [1, 2, 3, 4, 5];
numbers[0] = 7;
numbers[2] = 14;
console.log(numbers); // [7, 2, 14, 4, 5];

** TASK
Override the values of elements with indexes 1 and 3. Replace "plum" with "peach", and "orange" with "banana".

** Test
The fruits variable is declared
The fruits variable value is the array ["apple", "peach", "pear", "banana"]

 */

// Javascript Editor:
// START
/*
const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line


*/

// Javascript Editor:
// FINISH
/*
const fruits = ["apple", "plum", "pear", "orange"];

// Write your code under this line

fruits[1] = "peach";
fruits[3] = "banana";
console.log(fruits); // ["apple", "peach", "pear", "banana"];
console.log(
*/

// RESULT
/*
Result

Done

Assignment 6/32
The variable 'fruits' was declared using const
The value of the variable 'fruits' is an array
The 'fruits' array contains 4 values
The first element of the array has 'apple' value
The second element of the array has 'peach' value
The 'fruits' array contains 'pear' value
The forth element of the array has 'banana' value'

Result of code execution:
[ 'apple', 'peach', 'pear', 'banana' ]
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 7/32  Status: Done

/*
** THEORY
The length of an array, that is, the number of its elements, is stored in the length property. It is a dynamic value that changes automatically when items are added or removed.

const planets = ["Earth", "Mars", "Venus"];
console.log(planets.length); // 3

** TASK
Declare the variable fruitsArrayLength and assign the length of the array fruits to it using the property length.


** Test
The variable fruitsArrayLength is declared
The fruitsArrayLength variable value is 4


 */

// Javascript Editor:
// START
/*
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

*/

// Javascript Editor:
// FINISH
/*
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line
const fruitsArrayLength = fruits.length;
console.log( fruitsArrayLength);

console.log(
*/

// RESULT
/*
Result

Done

Assignment 7/32
The variable 'fruits' was declared using const
The value of the variable 'fruits' is an array
The 'fruits' array contains 4 values
The variable 'fruitsArrayLength' was declared using const
The 'fruitsArrayLength' variable value is 4
The value of the variable 'fruitsArrayLength' was obtained using the 'length' property of the array

Result of code execution:
4
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 8/32  Status: Done

/*
** THEORY
Most often, we do not know in advance what the length of the array will be. In order to get the index value of the last element, the following approach is used - the length of the array is always one more than the index of the last element. Using the formula array_length-1, you can get the index and value of the last element of an array of arbitrary length by subtracting 1 from the array length.

const planets = ["Earth", "Mars", "Venus"];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // "Venus"

** TASK
Declare two variables:

Variable name	Expected value
lastElementIndex	Index of the last element of the array fruits through array_length-1
lastElement	The value of the last array element


** Test
The variable lastElementIndex is declared
The variable lastElementIndex value is 3
The variable lastElement is declared
The variable lastElement value is a string "banana"


 */

// Javascript Editor:
// START
/*
const fruits = ["apple", "peach", "pear", "banana"];

// Change code below this line

*/

// Javascript Editor:
// FINISH
/*
const fruits = ['apple', 'peach', 'pear', 'banana'];

// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

console.log(lastElementIndex, lastElement);
// console.log(
*/

// RESULT
/*
Result

Done

Assignment 8/32
The variable 'fruits' was declared using const
The value of the variable 'fruits' is an array
The 'fruits' array contains 4 values
The variable 'lastElementIndex' was declared using const
The variable 'lastElement' was declared using const
The variable 'lastElementIndex' value is 3
The variable 'lastElement' value is 'banana'
The value of the variable 'lastElement' was obtained by accessing an array element with square brackets
The value of the 'lastElementIndex' variable was obtained from the 'length' property of the array

Result of code execution:
3 banana
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 9/32  Status: Done

/*
** THEORY
same

** TASK
Write a function getExtremeElements(array) that takes one array parameter - an array of elements of arbitrary length. The function must return an array of two elements - the first and the last element of the array parameter.

** Test
The function getExtremeElements(array) is declared
The call getExtremeElements([1, 2, 3, 4, 5]) returns [1, 5]
The call getExtremeElements(["Earth", "Mars", "Venus"]) returns ["Earth", "Venus"]
The call getExtremeElements(["apple", "peach", "pear", "banana"]) returns ["apple", "banana"]


 */

// Javascript Editor:
// START
/*

function getExtremeElements(array) {
  // Change code below this line


  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
function getExtremeElements(array) {
  // Change code below this line
  array = [array[0], array[array.length - 1]];
  return array;
  // Change code above this line
}

getExtremeElements([1, 2, 3, 4, 5]); // returns [1, 5]
getExtremeElements(['Earth', 'Mars', 'Venus']); // returns ["Earth", "Venus"]
getExtremeElements(['apple', 'peach', 'pear', 'banana']); // returns ["apple", "banana"]

console.log(getExtremeElements([1, 2, 3, 4, 5])); // returns [1, 5]
console.log(getExtremeElements(['Earth', 'Mars', 'Venus'])); // returns ["Earth", "Venus"]
console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana'])); // returns ["apple", "banana"]


console.log(
*/

// RESULT
/*
Result

Done

Assignment 9/32
'Function Declaration' is expected
The name 'getExtremeElements' is assigned to the function
The function 'getExtremeElements' has one parameter 'array'
The call getExtremeElements([1, 2, 3, 4, 5]) returns [1, 5]
The call getExtremeElements(['Earth', 'Mars', 'Venus']) returns ['Earth', 'Venus']
The call getExtremeElements(['apple', 'peach', 'pear', 'banana']) returns ['apple', 'banana']
The function the getExtremeElements() call for an arbitrary array returns the first and last elements
Result of code execution:
[ 1, 5 ]
[ 'Earth', 'Venus' ]
[ 'apple', 'banana' ]
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 10/32  Status: Done

/*
** THEORY
The split(delimiter) method allows you to turn a string into an array by “splitting” it at the delimiter, or separator. If the separator is an empty string, then an array of individual characters will be obtained. The separator can be one or more characters.

const name = "Mango";
console.log(name.split("")); // ["M", "a", "n", "g", "o"]

const message = "JavaScript essentials";
console.log(message.split(" ")); // ["JavaScript", "essentials"]

** TASK
Complete the code of the function splitMessage(message, delimiter) so that it returns in the variable words the result of splitting the string message by the delimiter - an array of strings.

** Test
The function splitMessage(message, delimiter) is declared
The call splitMessage("Mango hurries to the train", " ") returns ["Mango", "hurries", "to", "the", "train"]
The call splitMessage("Mango", "") returns ["M", "a", "n", "g", "o"]
The call splitMessage("best_for_week", "_") returns ["best", "for", "week"]


 */

// Javascript Editor:
// START
/*

function splitMessage(message, delimiter) {
  let words;
  // Change code below this line

  // Change code above this line
  return words;
}


*/

// Javascript Editor:
// FINISH
/*
function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
  words = message.split(delimiter);
  // Change code above this line
  return words;
}

splitMessage('Mango hurries to the train', ' '); // returns ["Mango", "hurries", "to", "the", "train"]
splitMessage('Mango', ''); // returns ["M", "a", "n", "g", "o"]
splitMessage('best_for_week', '_'); // returns ["best", "for", "week"]

console.log(splitMessage("Mango hurries to the train", " ")); // returns ["Mango", "hurries", "to", "the", "train"]
console.log(splitMessage("Mango", "")); // returns ["M", "a", "n", "g", "o"]
console.log(splitMessage("best_for_week", "_")); // returns ["best", "for", "week"]

console.log(
*/

// RESULT
/*
Result

Done

Assignment 10/32
'Function Declaration' is expected
The name 'splitMessage' is assigned to the function
The function 'splitMessage' has two parameters 'message' and 'delimiter'
The call splitMessage('Mango hurries to the train', ' ') returns ['Mango', 'hurries', 'to', 'the', 'train']
The call splitMessage('Mango', '') returns ['M', 'a', 'n', 'g', 'o']
The call splitMessage('best_for_week', '_') returns ['best', 'for', 'week']
The function splitMessage() call for an arbitrary string and delimiter returns a specific array

Result of code execution:
[ 'Mango', 'hurries', 'to', 'the', 'train' ]
[ 'M', 'a', 'n', 'g', 'o' ]
[ 'best', 'for', 'week' ]
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 11/32  Status: Done

/*
** THEORY
TASK: ENGRAVING JEWELRY

** TASK
Jewelry engraving service needs a function that would automatically calculate the price of the engraving based on the number of words and the price per word.

The function calculateEngravingPrice(message, pricePerWord) has been declared. This function accepts a string consisting of words separated by spaces only (the message parameter) and the price of the engraving of one word (the pricePerWord parameter).

Write the body of the function to return the total cost of engraving all the words in the string.

** Test
The function calculateEngravingPrice(message, pricePerWord) is declared
The call calculateEngravingPrice("JavaScript is in my blood", 10) returns 50
The call calculateEngravingPrice("JavaScript is in my blood", 20) returns 100
The call calculateEngravingPrice("Web-development is creative work", 40) returns 160
The call calculateEngravingPrice("Web-development is creative work", 20) returns 80



 */

// Javascript Editor:
// START
/*

function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line



   // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
function calculateEngravingPrice(message, pricePerWord) {
  const wordsLength = message.split(' ').length;
  return wordsLength * pricePerWord;
}

calculateEngravingPrice('JavaScript is in my blood', 10); // returns 50
calculateEngravingPrice('JavaScript is in my blood', 20); // returns 100
calculateEngravingPrice('Web-development is creative work', 40); // returns 160
calculateEngravingPrice('Web-development is creative work', 20); // returns 80

console.log(calculateEngravingPrice('JavaScript is in my blood', 10)); // returns 50
console.log(calculateEngravingPrice('JavaScript is in my blood', 20)); // returns 100
console.log(calculateEngravingPrice('Web-development is creative work', 40)); // returns 160
console.log(calculateEngravingPrice('Web-development is creative work', 20)); // returns 80



console.log(
*/

// RESULT
/*
Result

Done

Assignment 11/32
'Function Declaration' is expected
The name 'calculateEngravingPrice' is assigned to the function
The function 'calculateEngravingPrice' has two parameters 'message' and 'pricePerWord'
The call calculateEngravingPrice('JavaScript is in my blood', 10) returns 50
The call calculateEngravingPrice('JavaScript is in my blood', 20) returns 100
The call calculateEngravingPrice('Web-development is creative work', 40) returns 160
The call calculateEngravingPrice('Web-development is creative work', 20) returns 80
The call calculateEngravingPrice() with random parameters returns the right result

Result of code execution:
50
100
160
80
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 12/32  Status: Done

/*
** THEORY
The join(delimiter) array method allows you to concatenate the elements of an array into a string. In a string, elements will be delimited by a character or a group of characters specified in delimiter. That is, it is the opposite of the split(delimiter) string method.

const words = ["JavaScript", "is", "amazing"];
console.log(words.join("")); // 'JavaScriptisamazing'
console.log(words.join(" ")); // 'JavaScript is amazing'
console.log(words.join("*")); // 'JavaScript*is*amazing'

** TASK
Complete the code of the function makeStringFromArray (array, delimiter) so that it returns in the variable string the result of joining the elements of the array array with the delimiter delimiter - a string.

** Test
The function makeStringFromArray(array, delimiter) is declared
The call makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") returns "Mango hurries to the train"
The call makeStringFromArray(["M", "a", "n", "g", "o"], "")) returns "Mango"
The call makeStringFromArray(["top", "picks", "for", "you"], "_") returns "top_picks_for_you"

 */

// Javascript Editor:
// START
/*

function makeStringFromArray(array, delimiter) {
  let string;
  // Change code below this line



  // Change code above this line
  return string;
}

*/

// Javascript Editor:
// FINISH
/*
function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);
  return string;
}

makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' '); // returns "Mango hurries to the train"
makeStringFromArray(['M', 'a', 'n', 'g', 'o'], ''); // returns "Mango"
makeStringFromArray(['top', 'picks', 'for', 'you'], '_'); // returns "top_picks_for_you"

console.log(makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ')); // returns "Mango hurries to the train"
console.log(makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '')); // returns "Mango"
console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_')); // returns "top_picks_for_you"

console.log(
*/

// RESULT
/*
Result

Done

Assignment 12/32
'Function Declaration' is expected
The name 'makeStringFromArray' is assigned to the function
The function 'makeStringFromArray' has two parameters 'array' and 'delimiter'
The call makeStringFromArray(['Mango', 'hurries', 'to', 'the', 'train'], ' ') returns 'Mango hurries to the train'
The call makeStringFromArray(['M', 'a', 'n', 'g', 'o'], '') returns 'Mango'
The call makeStringFromArray('best for week', '_') returns 'best_for_week'
The function makeStringFromArray() call for an arbitrary string and separator returns a specific array

Result of code execution:
Mango hurries to the train
Mango
top_picks_for_you

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 13/32  Status: Done

/*
** THEORY
TASK: SLUG GENERATOR

** TASK
The term slug is a human-readable unique identifier that is used in web development to create readable URLs.

For example, instead of the user seeing mysite.com/posts/1q8fh74tx in the address bar, you can make a slug from the title of the article. As a result, the address will be more pleasant to read: mysite.com/posts/arrays-for-begginers.

Attention
Slug is always a lowercase string separated by dashes.

Write a slugify(title) function that takes the title of the article, a title parameter, and returns a slug constructed from that string.

The value of the title parameter will be strings whose words are separated only by spaces
All slug characters must be in lowercase
All slug words must be separated by a dash


** Test
The function slugify(title) is declared
The call slugify("Arrays for begginers") returns "arrays-for-begginers"
The call slugify("English for developer") returns "english-for-developer"
The call slugify("Ten secrets of JavaScript") returns "ten-secrets-of-javascript"
The call slugify("How to become a JUNIOR developer in TWO WEEKS") returns "how-to-become-a-junior-developer-in-two-weeks"

 */

// Javascript Editor:
// START
/*

function slugify(title) {
  // Change code below this line
  
  // Change code above this line
}


*/

// Javascript Editor:
// FINISH
/*
function slugify(title) {
  const slagString = title.toLowerCase().split(' ').join('-');
  return slagString;
}

slugify("Arrays for begginers"); // returns "arrays-for-begginers"
slugify("English for developer"); // returns "english-for-developer"
slugify("Ten secrets of JavaScript"); // returns "ten-secrets-of-javascript"
slugify("How to become a JUNIOR developer in TWO WEEKS"); // returns "how-to-become-a-junior-developer-in-two-weeks"

console.log(slugify("Arrays for begginers")); // returns "arrays-for-begginers"
console.log(slugify("English for developer")); // returns "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // returns "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // returns "how-to-become-a-junior-developer-in-two-weeks"


console.log(
*/

// RESULT
/*
Result

Done

Assignment 13/32
'Function Declaration' is expected
The name 'slugify' is assigned to the function
The function 'slugify' has one parameter 'title'
The call slugify('Arrays for begginers') returns 'arrays-for-begginers'
The call slugify('English for developer') returns 'english-for-developer'
The call slugify('Ten secrets of JavaScript') returns 'ten-secrets-of-javascript'
The call slugify('How to become a JUNIOR developer for TWO WEEKS') returns 'how-to-become-a-junior-developer-for-two-weeks'
The function slugify() call for an arbitrary string returns the modified slug string
Result of code execution:
arrays-for-begginers
english-for-developer
ten-secrets-of-javascript
how-to-become-a-junior-developer-in-two-weeks

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 14/32  Status: Done

/*
** THEORY
The slice(begin, end) method returns a new array containing a copy of a part of the original array without modifying it. A copy is made from begin up to, but not including, end - the indexes of the elements of the original array.

If begin and end are not specified, a complete copy of the original array will be created.
If end is not specified, copying will be from start to the end of the original array.
If the value of start is negative and end is not specified, then the last N elements will be copied.
const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

** TASK
Modify the code so that the variables contain partial copies of the original fruits array.

firstTwoEls - an array of the first two elements
nonExtremeEls - an array of all elements except the first and last
lastThreeEls - an array of the last three elements

** Test
The variable fruits is declared
The variable fruits value is an array ["apple", "plum", "pear", "orange", "banana"]
The variable firstTwoEls is declared
The variable firstTwoEls value is an array ["apple", "plum"]
The variable nonExtremeEls is declared
The variable nonExtremeEls value is an array ["plum", "pear", "orange"]
The variable lastThreeEls is declared
The variable lastThreeEls value is an array ["pear", "orange", "banana"]
A copy of part of the 'fruits' array is assigned to the variable lastThreeEls after applying the slice method with the correct arguments


 */

// Javascript Editor:
// START
/*
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = ;
const nonExtremeEls = ;
const lastThreeEls = ;

*/

// Javascript Editor:
// FINISH
/*
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
// The variable firstTwoEls value is an array ["apple", "plum"]

const nonExtremeEls = fruits.slice(1, -1);
// The variable nonExtremeEls value is an array ["plum", "pear", "orange"]

const lastThreeEls = fruits.slice(-3);
// The variable lastThreeEls value is an array ["pear", "orange", "banana"]

console.log(firstTwoEls);
console.log(nonExtremeEls);
console.log(lastThreeEls);


console.log(
*/

// RESULT
/*
Result

Done

Assignment 14/32
The 'fruits' variable is declared with 'const' and has a value ['apple', 'plum', 'pear', 'orange', 'banana']
The 'firstTwoEls' variable is declared with 'const' and has a value ['apple', 'plum']
A copy of part of the 'fruits' array is assigned to the variable 'firstTwoEls' after applying the 'slice' method'
The 'nonExtremeEls' variable is declared with 'const' and has a value ['plum', 'pear', 'orange']
A copy of part of the 'fruits' array is assigned to the variable 'nonExtremeEls' after applying the 'slice' method'
The 'lastThreeEls' variable is declared with 'const' and has a value ['pear', 'orange', 'banana']
A copy of part of the 'fruits' array is assigned to the variable 'lastThreeEls' after applying the 'slice' method'

Result of code execution:
[ 'apple', 'plum' ]
[ 'plum', 'pear', 'orange' ]
[ 'pear', 'orange', 'banana' ]

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 15/32  Status: Done

/*
** THEORY
The concat method is used to concatenate two or more arrays. It does not change the array on which it is called, but returns a new one. The order of the method arguments affects the order of the elements in the new array.

const firstArray = ["Mercury", "Venus", "Earth"];
const secondArray = ["Mars", "Jupiter"];
const thirdArray = ["Saturn", "Uranus", "Neptune"];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

** TASK
Complete the code so that the allClients variable contains an array of all the elements of the oldClients and newClients arrays.

** Test
The variable oldClients is declared
The variable oldClients value is an array ["Mango", "Ajax", "Poly", "Kiwi"]
The variable newClients is declared
The variable newClients value is an array ["Peach", "Houston"]
The variable allClients is declared
The variable allClients value is an array ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
An array is assigned to the variable allClients after applying the method 'concat' with the correct arguments


 */

// Javascript Editor:
// START
/*
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = ; // Change this line
*/

// Javascript Editor:
// FINISH
/*
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

console.log(allClients)

console.log(
*/

// RESULT
/*
Result

Done

Assignment 15/32
The variable 'oldClients' is declared with 'const' and has a value ['Mango', 'Ajax', 'Poly', 'Kiwi']
The variable 'newClients' is declared with 'const' and has a value ['Peach', 'Houston']
The variable 'allClients' is declared with 'const' and has a value ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston']
An array of copies of the array 'oldClients' and 'newClients' is assigned to the 'allClients' variable after applying the method 'concat' with the correct arguments

Result of code execution:
[ 'Mango', 'Ajax', 'Poly', 'Kiwi', 'Peach', 'Houston' ]

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 16/32  Status: Done

/*
** THEORY
TASK: ARRAY COMPOSITION

** TASK
Write a function makeArray(firstArray, secondArray, maxLength) to create a new array with all the elements of the original two arrays firstArray and secondArray. The maxLength parameter contains the maximum allowed length of the new array.

If the number of elements in the new array is greater than maxLength, the function should return a copy of the array with the length of maxLength elements. Otherwise, the function must return the whole new array.

** Test
The function makeArray(firstArray, secondArray, maxLength) is declared
The call makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) returns ["Mango", "Poly", "Ajax"]
The call makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) returns ["Mango", "Poly", "Houston", "Ajax"]
The call makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) returns ["Mango", "Ajax", "Chelsea"]
The call makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) returns ["Earth", "Jupiter"]
The call makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) returns ["Earth", "Jupiter", "Neptune", "Uranus"]
The call makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) returns []
The function makeArray() call with random arrays, and a random number returns the correct array


 */

// Javascript Editor:
// START
/*

function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line

    // Change code above this line
  }

*/

// Javascript Editor:
// FINISH
/*
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }
  return newArray;
}

OR
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  return newArray.length <= maxLength ? newArray : newArray.slice(0, maxLength);
}

makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3); // returns ["Mango", "Poly", "Ajax"]
makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4); // returns ["Mango", "Poly", "Houston", "Ajax"]
makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3); // returns ["Mango", "Ajax", "Chelsea"]
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2); // returns ["Earth", "Jupiter"]
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4); // returns ["Earth", "Jupiter", "Neptune", "Uranus"]
makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0); // returns []
// The function makeArray() call with random arrays, and a random number returns the correct array

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // returns ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // returns ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // returns ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // returns ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // returns ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // returns []


console.log(
*/

// RESULT
/*
Result

Done

Assignment 16/32
'Function Declaration' is expected
The name 'makeArray' is assigned to the function
The function 'makeArray' has three parameters: 'firstArray', 'secondArray' and 'maxLength'
The 'makeArray' function uses the 'concat' and 'slice' methods
The call makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3) returns ['Mango', 'Poly', 'Ajax']
The call makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4) returns ['Mango', 'Poly', 'Houston', 'Ajax']
The call makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3) returns ['Mango', 'Ajax', 'Chelsea']
The call makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2) returns ['Earth', 'Jupiter']
The call makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4) returns ['Earth', 'Jupiter', 'Neptune', 'Uranus']
The call makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0) returns []
The function makeArray() call with random arrays and a random number returns the correct array

Result of code execution:
[ 'Mango', 'Poly', 'Ajax' ]
[ 'Mango', 'Poly', 'Houston', 'Ajax' ]
[ 'Mango', 'Ajax', 'Chelsea' ]
[ 'Earth', 'Jupiter' ]
[ 'Earth', 'Jupiter', 'Neptune', 'Uranus' ]
[]

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 17/32  Status: Done

/*
** THEORY
Loops are used to repeat code over and over. A for loop declaration consists of three statements.

for (Initialization; Condition; Post - expression) {
  // Loop body
}
Initialization is performed once before the start of the loop. Used to create a counter variable and specify its initial value.
Condition is an expression that is evaluated before each iteration (repetition) of the loop. The loop body is executed only when the expression evaluates to true. The loop ends if the value is false.
Post-expression is executed at the end of each iteration of the loop, before checking the condition. It is used to update the counter variable.
Body - a set of instructions to execute on each repetition. Executed if the condition expression evaluates to true.
for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}
In the example, the variable i is declared, initialized with the value 0 and the loop (its body) is executed until i <= 20, that is, the condition is converted to true. After each iteration, the counter is incremented by 5.

** TASK
Complete the for loop to log all integers in the range from start to end inclusive.

** Test
The variable start is declared
The variable start value is 3
The variable end is declared
The variable end value is 7
The variable i is declared - loop counter
The initial value of the variable i is 3
The loop condition is converted to true as long as i is less than or equal to 7
At each iteration, the value of the variable i is increased by one
The output to the console of the variable i will show the numbers 3, 4, 5, 6, 7


 */

// Javascript Editor:
// START
/*
const start = 3;
const end = 7;

for (let i = ; i <= ; i += ) { // Change this line
  console.log(i);
}


*/

// Javascript Editor:
// FINISH
/*
const start = 3;
const end = 7;

for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}

console.log(
*/

// RESULT
/*
Result

Done

Assignment 17/32
The variable 'start' is declared with 'const' and has a value 3
The variable 'end' is declared with 'const' and has a value 7
The 'for' loop initialization with 'let' is expected
'i' as variable name when initializing 'for' loop is expected
'start' as variable value when initializing 'for' loop is expected
Operator '<=' and operands 'i' and 'end' as condition for loop 'for' is expected
Operator '+ =', variable 'i' and value 1 as final expression of 'for' loop is expected
The body of the 'for' loop uses the console output of the 'i' variable
Outputting the variable 'i' to the console will show the numbers 3, 4, 5, 6, 7

Result of code execution:
3
4
5
6
7
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 18/32  Status: Done

/*
** THEORY
TASK: SUM OF NUMBERS (FOR LOOP)

** TASK
Write a function calculateTotal(number), that takes an integer (the number parameter) and returns the sum of all integers from one to that number. For example, if number is 3, then the sum is 1 + 2 + 3, that is, 6.

** Test
The function calculateTotal(number) is declared
The function calculateTotal(1) call returns 1
The function calculateTotal(3) call returns 6
The function calculateTotal(7) call returns 28
The function calculateTotal(18) call returns 171
The function calculateTotal(24) call returns 300
The function calculateTotal() call with a random number returns the correct value

 */

// Javascript Editor:
// START
/*
function calculateTotal(number) {
 // Change code below this line

  // Change code above this line
}
*/

// Javascript Editor:
// FINISH
/*
function calculateTotal(number) {
  let totalSum = 0;

  for (let i = 0; i <= number; i += 1) {
    totalSum += i;
  }
  return totalSum;
}

calculateTotal(1); // returns 1
calculateTotal(3); // returns 6
calculateTotal(7); // returns 28
calculateTotal(18); // returns 171
calculateTotal(24); // returns 300

console.log(calculateTotal(1)); // returns 1
console.log(calculateTotal(3)); // returns 6
console.log(calculateTotal(7)); // returns 28
console.log(calculateTotal(18)); // returns 171
console.log(calculateTotal(24)); // returns 300

console.log(
*/

// RESULT
/*
Result

Done

Assignment 18/32
'Function Declaration' is expected
The name 'calculateTotal' is assigned to the function
The function 'calculateTotal' has one parameter 'number'
The function calculateTotal(1) call returns 1
The function calculateTotal(3) call returns 6
The function calculateTotal(7) call returns 28
The function calculateTotal(18) call returns 171
The function calculateTotal(24) call returns 300
The function calculateTotal() call with a random number returns the correct value

Result of code execution:
1
6
28
171
300
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 19/32  Status: Done

/*
** THEORY
The for loop can be used to iterate over an array, that is, to "iterate over" it element by element.

const planets = ["Earth", "Mars", "Venus"];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
To access the elements, the syntax of square brackets array[index] is used, where index is the value of the loop counter from 0 to the last index of the array, which is one less than the length of the array.

** TASK
Complete the code of the for loop so that it sequentially logs all the elements of the fruits array.

** Test
The variable fruits is declared
The variable fruits value is an array ["apple", "plum", "pear", "orange"]
The variable i - loop counter is declared
The initial value of the variable i is 0
The loop condition is converted to true as long as i is less than 4
At each iteration, the value of the variable i is increased by one
In the body of the for loop, the const fruit variable is declared and a value is assigned to this variable - an array element
The body of the for loop uses the console output of the fruit variable


 */

// Javascript Editor:
// START
/*
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i =; ) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}
*/

// Javascript Editor:
// FINISH
/*
const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

console.log(
*/

// RESULT
/*
Result

Done

Assignment 19/32
The variable 'fruits' is declared with 'const' and has the value ['apple', 'plum', 'pear', 'orange']
The 'for' loop initialization with 'let' is expected
'i' as variable name when initializing 'for' loop is expected
'start' as variable value when initializing 'for' loop is expected
Operator '<' and operands 'i' and 'fruits.length' as ​​condition of 'for' loop is expected
Operator '+=', variable 'i' and value 1 as final expression of 'for' loop is expected
In the body of the 'for' loop, the variable 'fruit' is declared using 'const' and a value is assigned to this variable - an element of the array
The body of the 'for' loop uses the console output of the variable 'fruit'
Outputting the variable 'fruit' to the console will show the strings 'apple', 'plum', 'pear', 'orange'

Result of code execution:
apple
plum
pear
orange
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 20/32  Status: Done

/*
** THEORY
TASK: PURCHASE COST CALCULATION

** TASK
Write a function calculateTotalPrice(order), that takes one order parameter, an array of numbers, and calculates the total of its elements. The total sum of the elements must be stored in the total variable, which is returned as a result of the function.

** Test
The function calculateTotalPrice(order) is declared
The function calculateTotalPrice([12, 85, 37, 4]) call returns 138
The function calculateTotalPrice([164, 48, 291]) call returns 503
The function calculateTotalPrice([412, 371, 94, 63, 176]) call returns 1116
The function calculateTotalPrice() call with a random array returns the correct value


 */

// Javascript Editor:
// START
/*
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // Change code above this line
  return total;
}

*/

// Javascript Editor:
// FINISH
/*
function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }
  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // returns 138
console.log(calculateTotalPrice([164, 48, 291])); // returns 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // returns 1116

console.log(
*/

// RESULT
/*
Result

Done

Assignment 20/32
'Function Declaration' is expected
The name 'calculateTotalPrice' is assigned to the function
The function 'calculateTotalPrice' has one parameter 'order'
The function calculateTotalPrice([12, 85, 37, 4]) call returns 138
The function calculateTotalPrice([164, 48, 291]) call returns 503
The function calculateTotalPrice([412, 371, 94, 63, 176]) call returns 1116
The function calculateTotalPrice() call with a random array returns the correct value

Result of code execution:
138
503
1116
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 21/32  Status: Done

/*
** THEORY
TASK: FIND THE LONGEST WORD

** TASK
Write a function findLongestWord(string) that takes an arbitrary string consisting only of words separated by spaces (the string parameter) and returns the longest word in this string.

** Test
The function findLongestWord(string) is declared
The function findLongestWord("The quick brown fox jumped over the lazy dog") call returns jumped
The function findLongestWord("Google do a roll") call returns Google
The function findLongestWord("May the force be with you") call returns force
The function findLongestWord() called with a random string returns the correct value

 */

// Javascript Editor:
// START
/*
function findLongestWord(string) {
  // Change code below this line

  // Change code above this line
}
*/

// Javascript Editor:
// FINISH
/*
variant#1
function findLongestWord(string) {
  let longestWord;
  let wordLength = 0;
  const words = string.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > wordLength) {
      longestWord = words[i];
      wordLength = words[i].length;
    }
  }
  return longestWord;
}

variant#2
function findLongestWord(string) {
  let indexLongestWord;
  let wordLength = 0;
  const words = string.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > wordLength) {
      indexLongestWord = i;
      wordLength = words[i].length;
    }
  }
  return words[indexLongestWord];
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // call returns jumped
console.log(findLongestWord('Google do a roll')); // call returns Google
console.log(findLongestWord('May the force be with you')); // call returns force

console.log(
*/

// RESULT
/*
Result

Done

Assignment 21/32
'Function Declaration' is expected
The name 'findLongestWord' is assigned to the function
The function 'findLongestWord' has one parameter 'string'
findLongestWord('The quick brown fox jumped over the lazy dog') returns 'jumped'
findLongestWord('Google do a roll') returns 'Google'
findLongestWord('May the force be with you') returns 'force'
The function findLongestWord() call with a random string returns the correct value

Result of code execution:
jumped
Google
force

*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 22/32  Status: Done

/*
** THEORY
const planets = ["Earth", "Mars", "Venus"];
planets.push("Jupiter");
planets.push("Saturn", "Uranus", "Neptune");

console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

** TASK
Modify the code of the createArrayOfNumbers(min, max) function so that it returns an array of all integers from the value min to max.

** Test
The function createArrayOfNumbers(min, max) is declared
The function createArrayOfNumbers(1, 3) call returns [1, 2, 3]
The function createArrayOfNumbers(14, 17) call returns [14, 15, 16, 17]
The function createArrayOfNumbers(29, 34) call returns [29, 30, 31, 32, 33, 34]
The function createArrayOfNumbers() call with random min and max returns the correct array
The push method was used in the for loop


 */

// Javascript Editor:
// START
/*
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line

  // Change code above this line
  return numbers;
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3)); // call returns [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // call returns [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); // call returns [29, 30, 31, 32, 33, 34]

console.log(
*/

// RESULT
/*
Result

Done

Assignment 22/32
'Function Declaration' is expected
The name 'createArrayOfNumbers' is assigned to the function
The function 'createArrayOfNumbers' has two parameters 'min' and 'max'
The function createArrayOfNumbers(1, 3) call returns [1, 2, 3]
The function createArrayOfNumbers(14, 17) call returns [14, 15, 16, 17]
The function createArrayOfNumbers(29, 34) call returns [29, 30, 31, 32, 33, 34]
The function createArrayOfNumbers() call with random `min` and `max` returns the correct array
The `push` method was used in the for loop

Result of code execution:
[ 1, 2, 3 ]
[ 14, 15, 16, 17 ]
[ 29, 30, 31, 32, 33, 34 ]
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 23/32  Status: Done

/*
** THEORY
TASK: FILTERING AN ARRAY OF NUMBERS

** TASK
Write a function filterArray(numbers, value), that takes an array of numbers (the numbers parameter) and returns a new array containing only those elements of the numbers array that are greater than the value of the value parameter (number).

** Test
The function filterArray(numbers, value) is declared
The function filterArray([1, 2, 3, 4, 5], 3) call returns [4, 5]
The function filterArray([1, 2, 3, 4, 5], 4) call returns [5]
The function filterArray([1, 2, 3, 4, 5], 5) call returns []
The function filterArray([12, 24, 8, 41, 76], 38) call returns [41, 76]
The function filterArray([12, 24, 8, 41, 76], 20) call returns [24, 41, 76]
The function filterArray() called with a random array, and a number returns the correct array
The push method was used in the for loop

 */

// Javascript Editor:
// START
/*
function filterArray(numbers, value) {
   // Change code below this line

  // Change code above this line
}
*/

// Javascript Editor:
// FINISH
/*
'use strict';

function filterArray(numbers, value) {
  // Change code below this line
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i += 1) {
    // console.log(words[i].length);
    if (numbers[i] > value) {
      newNumbers.push(numbers[i]);
    }
    // Change code above this line
  }
  return newNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // call returns [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // call returns [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // call returns []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // call returns [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // call returns [24, 41, 76]

*/

// RESULT
/*
Result

Done

Assignment 23/32
'Function Declaration' is expected
The name 'filterArray' is assigned to the function
The function 'filterArray' has two parameters 'numbers' and 'value'
The function filterArray([1, 2, 3, 4, 5], 3) call returns [4, 5]
The function filterArray([1, 2, 3, 4, 5], 4) call returns [5]
The function filterArray([1, 2, 3, 4, 5], 5) call returns []
The function filterArray([12, 24, 8, 41, 76], 38) call returns [41, 76]
The function filterArray([12, 24, 8, 41, 76], 20) call returns [24, 41, 76]
The function filterArray() call with a random array and a number returns the correct array
The `push` method was used in the for loop

Result of code execution:
[ 4, 5 ]
[ 5 ]
[]
[ 41, 76 ]
[ 24, 41, 76 ]
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 24/32  Status: Done

/*
** THEORY
The includes(value) method checks if there is an element with the value of the value parameter in the array and returns true or false, respectively. The scope of this method is reduced to situations when it is necessary to check whether there is an element in the array and its position (index) is not important.

const planets = ["Earth", "Mars", "Venus"];

console.log(planets.includes("Earth")); // true
console.log(planets.includes("Mars")); // true
console.log(planets.includes("Venus")); // true
console.log(planets.includes("Jupiter")); // false

** TASK
The checkFruit(fruit) function takes a string with the name of the fruit (the fruit parameter), and checks if there is such a fruit in the fruits array.

Complete the function's code so that if:

the fruit is in the array, then the function returns true;
there is no fruit in the array, then the function returns false.

** Test
The function checkFruit(fruit) is declared
The call checkFruit("plum") returns true
The call checkFruit("mandarin") returns false
The call checkFruit("pear") returns true
The call checkFruit("Pear") returns false
The call checkFruit("apple") returns true
The function checkFruit() called with a random word returns the correct boolean value
The function used the includes method


 */

// Javascript Editor:
// START
/*
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return; // Change this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  return fruits.includes(fruit); // Change this line
}

console.log(checkFruit('plum')); // returns true
console.log(checkFruit('mandarin')); // returns false
console.log(checkFruit('pear')); // returns true
console.log(checkFruit('Pear')); // returns false
console.log(checkFruit('apple')); // returns true

*/

// RESULT
/*
Result

Done

Assignment 24/32
'Function Declaration' is expected
The name 'checkFruit' is assigned to the function
The function 'checkFruit' has one parameter 'fruit'
The call checkFruit('plum') returns true
The call checkFruit('mandarin') returns false
The call checkFruit('pear') returns true
The call checkFruit('Pear') returns false
The call checkFruit('apple') returns true
The function checkFruit() call with a random word returns the correct boolean value
The function used the 'includes' method

Result of code execution:
true
false
true
false
true
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 25/32  Status: Done

/*
** THEORY
TASK: COMMON ELEMENTS

** TASK
Common elements of arrays are those elements which are present in multiple arrays.

For example, in two arrays [1, 3, 5] and [0, 8, 5, 3] the common numbers are 3 and 5, because they are present in both source arrays. And the numbers 0, 1 and 8 are present only in one of the arrays.

Write a function getCommonElements(array1, array2) that takes two arrays of arbitrary length in the parameters array1 and array2 and returns a new array consisting of those elements that are present in both of the original arrays.

** Test
The function getCommonElements(array1, array2) is declared
The call getCommonElements([1, 2, 3], [2, 4]) returns [2]
The call getCommonElements([1, 2, 3], [2, 1, 17, 19]) returns [1, 2]
The call getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) returns [12, 27, 3]
The call getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) returns [10, 30, 40]
The call getCommonElements([1, 2, 3], [10, 20, 30]) returns []
The function getCommonElements() called with two random arrays returns the correct array
The includes and push methods were used in the for loop


 */

// Javascript Editor:
// START
/*
function getCommonElements(array1, array2) {
  // Change code below this line

 // Change code above this line
}
*/

// Javascript Editor:
// FINISH
/*
function getCommonElements(array1, array2) {
  const common = []; // Array to contain common elements

  for (const el of array1) {
    if (array2.includes(el)) {
      common.push(el);
    }
  }
  return common; // Return the common elements
}

console.log(
*/

// RESULT
/*
Result

Done

Assignment 25/32
'Function Declaration' is expected
The name 'getCommonElements' is assigned to the function
The function 'getCommonElements' has two parameters 'array1' and 'array2'
The call getCommonElements([1, 2, 3], [2, 4]) returns [2]
The call getCommonElements([1, 2, 3], [2, 1, 17, 19]) returns [1, 2]
The call getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) returns [12, 27, 3]
The call getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) returns [10, 30, 40]
The call getCommonElements([1, 2, 3], [10, 20, 30]) returns []
The function getCommonElements() call with two random arrays returns the correct array
The 'includes' and 'push' methods were used in the 'for' loop
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 26/32  Status: Done

/*
** THEORY
The for...of statement declares a loop that iterates over iterable objects such as arrays and strings. The body of the loop will execute for the value of each element. This is a good replacement for a for loop if you don't need access to the iteration counter.

for (const variable of iterable) {
  // loop body
}
variable - a variable that will store the value of the element at each iteration
iterable - a collection that has enumerable elements, for example an array
const planets = ["Earth", "Mars", "Venus"];

for (const planet of planets) {
  console.log(planet);
}

** TASK
Refactor the code for the calculateTotalPrice(order) function by replacing the for loop with for...of.

** Test
The function calculateTotalPrice(order) is declared
The function calculateTotalPrice([12, 85, 37, 4]) call returns 138
The function calculateTotalPrice([164, 48, 291]) call returns 503
The function calculateTotalPrice([412, 371, 94, 63, 176]) call returns 1116
The function calculateTotalPrice([]) call returns 0
The function calculateTotalPrice() called with a random array of numbers returns the correct amount


 */

// Javascript Editor:
// START
/*
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Change code above this line
  return total;
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';
function calculateTotalPrice(order) {
  let total = 0;

  for (const price of order) {
    total += price;
  }

  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // returns 138
console.log(calculateTotalPrice([164, 48, 291])); // returns 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // returns 1116
console.log(calculateTotalPrice([])); // returns 0


console.log(
*/

// RESULT
/*
Result

Done

Assignment 26/32
'Function Declaration' is expected
The name 'calculateTotalPrice' is assigned to the function
The function 'calculateTotalPrice' has one parameter 'order'
The function calculateTotalPrice([12, 85, 37, 4]) call returns 138
The function calculateTotalPrice([164, 48, 291]) call returns 503
The function calculateTotalPrice([412, 371, 94, 63, 176]) call returns 1116
The function calculateTotalPrice([]) call returns 0
The function calculateTotalPrice() call with a random array of numbers returns the correct amount
The function calculateTotalPrice() uses a for..of loop

Result of code execution:
138
503
1116
0
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 27/32  Status: Done

/*
** THEORY
TASK: FILTERING AN ARRAY OF NUMBERS 2.0

** TASK
Refactor the filterArray(numbers, value) function by replacing the for loop with for...of.

** Test
The function filterArray(numbers, value) is declared
The function filterArray([1, 2, 3, 4, 5], 3) call returns [4, 5]
The function filterArray([1, 2, 3, 4, 5], 4) call returns [5]
The function filterArray([1, 2, 3, 4, 5], 5) call returns []
The function filterArray([12, 24, 8, 41, 76], 38) call returns [41, 76]
The function filterArray([12, 24, 8, 41, 76], 20) call returns [24, 41, 76]
The function filterArray() called with a random array and a number returns the correct array
The function filterArray() uses a for..of loop


 */

// Javascript Editor:
// START
/*
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); //returns [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); //returns [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); //returns []
console.log(filterArray([12, 24, 8, 41, 76], 38)); //returns [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); //returns [24, 41, 76]


console.log(
*/

// RESULT
/*
'Function Declaration' is expected
The name 'filterArray' is assigned to the function
The function 'filterArray' has two parameters 'numbers' and 'value'
The function filterArray([1, 2, 3, 4, 5], 3) call returns [4, 5]
The function filterArray([1, 2, 3, 4, 5], 4) call returns [5]
The function filterArray([1, 2, 3, 4, 5], 5) call returns []
The function filterArray([12, 24, 8, 41, 76], 38) call returns [41, 76]
The function filterArray([12, 24, 8, 41, 76], 20) call returns [24, 41, 76]
The function filterArray() call with a random array and a number returns the correct array
The function calculateTotalPrice() uses a for..of loop

Result of code execution:
[ 4, 5 ]
[ 5 ]
[]
[ 41, 76 ]
[ 24, 41, 76 ]
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 28/32  Status: Done

/*
** THEORY
5 % 1 = 0;
// 5 divided by 1 is 5 and the remainder is 0

5 % 2 = 1;
//  5 divided by 2 is 2 and the remainder is 1

5 % 3 = 2;
//  5 divided by 3 is 1 and the remainder is 2

5 % 4 = 1;
//  5 divided by 4 is 1 and the remainder is 1

5 % 5 = 0;
//  5 divided by 5 is 1 and the remainder is 0

** TASK
Complete the modulus expressions so that the code passes the tests.

** Test
The variable a is declared
The value of the variable a is the number 0
The variable b is declared
The value of the variable b is the number 1
The variable c is declared
The value of the variable c is the number 3
The variable d is declared
The value of the variable d is the number 5
The variable e is declared
The value of the variable e is the number 2


 */

// Javascript Editor:
// START
/*
const a = 3 % ;
const b = 4 % ;
const c = 11 % ;
const d = 12 % ;
const e = 8 % ;
*/

// Javascript Editor:
// FINISH
/*
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 8;
const d = 12 % 7;
const e = 8 % 3;

console.log(
*/

// RESULT
/*
Result

Done

Assignment 28/32
The variable a is declared
The value of the variable a is the number 0
The variable b is declared
The value of the variable b is the number 1
The variable c is declared
The value of the variable c is the number 3
The variable d is declared
The value of the variable d is the number 5
The variable e is declared
The value of the variable e is the number 2
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 29/32  Status: Done

/*
** THEORY
TASK: EVEN NUMBERS

** TASK
Write a function getEvenNumbers(start, end) that returns an array of all even numbers from start to end. An even number is a number that is divisible by 2 without a remainder (10 % 2 === 0).

** Test
The function getEvenNumbers(start, end) is declared
The function getEvenNumbers(2, 5) call returns [2, 4]
The function getEvenNumbers(3, 11) call returns [4, 6, 8, 10]
The function getEvenNumbers(6, 12) call returns [6, 8, 10, 12]
The function getEvenNumbers(8, 8) call returns [8]
The function getEvenNumbers(7, 7) call returns []
The function getEvenNumbers() called with random start and end returns the correct array


 */

// Javascript Editor:
// START
/*
function getEvenNumbers(start, end) {
   // Change code below this line

    // Change code above this line
  }
*/

// Javascript Editor:
// FINISH
/*
'use strict';
function getEvenNumbers(start, end) {
  // Change code below this line
  const evenNumbers = []; // Array to contain evenNumbers elements

  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i); // Push to evenNumbers array
    }
  }
  return evenNumbers;
  // Change code above this line
}

console.log(getEvenNumbers(2, 5)); // returns [2, 4]
console.log(getEvenNumbers(3, 11)); // returns [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // returns [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); // returns [8]
console.log(getEvenNumbers(7, 7)); // returns []

console.log(
*/

// RESULT
/*
Result

Done

Assignment 29/32
'Function Declaration' is expected
The name 'getEvenNumbers' is assigned to the function
The function 'getEvenNumbers' has two parameters 'start' and 'end'
The function getEvenNumbers(2, 5) call returns [2, 4]
The function getEvenNumbers(3, 11) call returns [4, 6, 8, 10]
The function getEvenNumbers(6, 12) call returns [6, 8, 10, 12]
The function getEvenNumbers(8, 8) call returns [8]
The function getEvenNumbers(7, 7) call returns []
The function getEvenNumbers() call with a random array and a number returns the correct array

Result of code execution:
[ 2, 4 ]
[ 4, 6, 8, 10 ]
[ 6, 8, 10, 12 ]
[ 8 ]
[]
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 30/32  Status: Done

/*
** THEORY
You can stop the execution of the loop at any time. To do this, there is a break operator, which completely stops the execution of the loop and transfers control to code following the loop.

In the example, we are looking for the number 3. As soon as the if condition is fulfilled, the loop will stop executing (it will be interrupted).

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Found number 3, stop the loop");
    break;
  }
}

console.log("Log after loop");

** TASK
Complete the code so that the first number in the range from start to end which is divisible by 5 without a remainder is written into the variable number.

** Test
The variable start is declared with the value 6
The variable end is declared with the value 27
The variable number is declared without initialization
The total value of the variable number is equal to 10
The for loop uses break to exit before all iterations of the loop have finished

 */

// Javascript Editor:
// START
/*
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
  }
}
*/

// Javascript Editor:
// FINISH
/*
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}
console.log(number);


console.log(
*/

// RESULT
/*
Result

Done

Assignment 30/32
The variable start is declared with the value 6
The variable end is declared with the value 27
The variable number is declared without initialization
The total value of the variable number is 10
The for loop uses break to exit before all iterations of the loop have finished

Result of code execution:
10
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 31/32  Status: Done

/*
** THEORY
If the loop is in the body of a function, then the break operator does not terminate the execution of the function, but only interrupts the loop. In order to interrupt the execution of a loop and a function at once, there is a return operator.

In the example, we are looking for the number 3. As soon as the if condition is fulfilled, we make a return, which will interrupt the execution of the loop and the function.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Found number 3, return, interrupting the loop and the function");
      return i;
    }
  }

  // This console.log will fail
  console.log("Log after the loop in the body of the function");
}

const result = fn();
console.log("Log after exiting the function");
console.log(`The result of executing the function ${result}`);

** TASK
Refactor the findNumber(start, end, divisor) function so that it:

returns the first number from in the range start to end, which is divisible by divisor without a remainder
does not use the break operator
does not use the variable number

** Test
The function findNumber(start, end, divisor) is declared
The call findNumber(2, 6, 5) returns 5
The call findNumber(8, 17, 3) returns 9
The call findNumber(6, 9, 4) returns 8
The call findNumber(16, 35, 7) returns 21
The function findNumber() called with a random set of numbers returns a valid result
A for loop should not use break to exit until all iterations of the loop have finished


 */

// Javascript Editor:
// START
/*
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }

  return number;
  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';
function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return (number = i);
    }
  }
}

console.log(findNumber(2, 6, 5)); // returns 5
console.log(findNumber(8, 17, 3)); // returns 9
console.log(findNumber(6, 9, 4)); // returns 8
console.log(findNumber(16, 35, 7)); // returns 21

*/

// RESULT
/*
Result

Done

Assignment 31/32
'Function Declaration' is expected
The name 'findNumber' is assigned to the function
The function 'findNumber' has three parameters 'start', 'end' and ''divisor
The call findNumber(2, 6, 5) returns 5
The call findNumber(8, 17, 3) returns 9
The call findNumber(6, 9, 4) returns 8
The call findNumber(16, 35, 7) returns 21
The call `findNumber()` with a random set of numbers returns a valid result
A for loop should not use `break` to exit until all iterations of the loop have finished

Result of code execution:
5
9
8
21
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 32/32  Status: Done

/*
** THEORY
TASK: INCLUDES() FUNCTION

** TASK
Write a function includes(array, value) which does the same as the array method array.includes(value) - It checks if the array contains value, returning true if it does and false otherwise.

When performing this task, the array.includes(value) method cannot be used in the body of the includes() function.

** Test
The function includes(array, value) is declared
The call includes([1, 2, 3, 4, 5], 3) returns true
The call includes([1, 2, 3, 4, 5], 17) returns false
The call includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") returns true
The call includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") returns false
The call includes(["apple", "plum", "pear", "orange"], "plum") returns true
The call includes(["apple", "plum", "pear", "orange"], "kiwi") returns false
The function includes() called for a random array with random value returns a valid boolean
The includes function uses for, return, but not the array method includes


 */

// Javascript Editor:
// START
/*
function includes(array, value) {
  // Change code below this line

  // Change code above this line
}

*/

// Javascript Editor:
// FINISH
/*
'use strict';

function includes(array, value) {
  let result;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}

// return isMember ? '$2.00' : '$10.00';

console.log(includes([1, 2, 3, 4, 5], 3)); // returns true
console.log(includes([1, 2, 3, 4, 5], 17)); // returns false
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
); // returns true
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus')
); // returns false
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum')); // returns true
console.log(includes(['apple', 'plum', 'pear', 'orange'], 'kiwi')); // returns false

*/

// RESULT
/*
Result

Done

Assignment 32/32
'Function Declaration' is expected
The name 'includes' is assigned to the function
The function 'includes' has two parameters 'array' and 'value'
The call includes([1, 2, 3, 4, 5], 3) returns true
The call includes([1, 2, 3, 4, 5], 17) returns false
The call includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter') returns true
The call includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Uranus') returns false
The call includes(['apple', 'plum', 'pear', 'orange'], 'plum') returns true
The call includes(['apple', 'plum', 'pear', 'orange'], 'kiwi') returns false
The call `includes()` with a random array and a random 'value' returns a valid result
The 'includes' function uses 'for', 'return', but not the array method 'includes'
Result of code execution:
true
false
true
false
true
false
*/

///////////////////////////////////////////////
// JS V2 block-2 Autochecking  ASSIGNMENT 32/32  Status: Done

/*
** THEORY


** TASK


** Test


 */

// Javascript Editor:
// START
/*

*/

// Javascript Editor:
// FINISH
/*

*/

// RESULT
/*


*/

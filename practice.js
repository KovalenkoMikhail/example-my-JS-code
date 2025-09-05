// JavaScript Code Snippets - Organized by Topic

// ===================================
// VARIABLES, STRINGS, AND COMMENTS
// ===================================

// Variables
let userName = "Brad";
let place = "first";
let string = "an \n apple";
let numb = 631;
let numb2 = 9.3;

// String Concatenation
console.log(userName + " took " + place + " place in the game.");
console.log("How \ndeep \n \nis \nthe \nocean?");
var str1 = "100";
var num1 = 50;
var str2 = "50";
var result = str1 + num1;
console.log(result);

// Comments
// This is a single-line comment.
/*
 This is a multi-line comment.
*/

// ===================================
// DATA TYPES AND TYPE COERCION
// ===================================

// Type Coercion (Implicit Conversion)
let numStr = "100";
let num = 20;
console.log(numStr - num);
console.log(true + true); // Outputs 2
console.log("33" + 1); // Outputs "331"
console.log(false + false); // Outputs 0
console.log(+"4"); // Outputs 4
console.log(2 - "50"); // Outputs -48
console.log(2 + "3"); // Outputs "23"
console.log("5" + 2); // Outputs "52"
console.log("5" * 2 + "2" * "3"); // Outputs 16
console.log("5" * 2); // Outputs 10

// Explicit Type Conversion
let a = "42";
let b = Number(a);
console.log(Number(a));
console.log(typeof Number(a));
console.log(typeof b);

// ===================================
// COMPARISON AND LOGICAL OPERATORS
// ===================================

// Comparison Operators
console.log(5 != 3);
console.log("s" > "big");
console.log(undefined == 0);
console.log(undefined == null);
console.log("Batman" < "Superman");
console.log(5 == 3);
console.log("cat" >= "Cat");
console.log(null == 0);

// Equality Operators
let a_eq = "5";
let b_eq = 5;
let result1 = a_eq == b_eq; // true, because of type coercion
let result2 = a_eq === b_eq; // false, because types are different
console.log(result1, result2);

// Logical Operators
let a_log = "Cyber";
let b_log = 1;
let c_log = false;
let d_log = c_log || (a_log === "Cyber" && b_log == 1);
console.log(d_log);
console.log(true && 0);
console.log(false && "sun");
console.log(1 || 0);
let statement = false;
console.log(!((statement && false) || false));
const x_log = "10";
const y_log = 10;
const z_log = true;
console.log(x_log == y_log && z_log);
console.log(x_log === y_log || !z_log);
console.log(!(!false && true) || (!!false && true));
console.log(0 || undefined || "" || (0 && ""));

// ===================================
// FUNCTIONS
// ===================================

// Function Declarations and Expressions
function asd(a, b) {
  console.log(a / b);
}
asd(50, 2);

function multiply(a, b) {
  return a * b;
}
let result_mult = multiply(7, 4);
console.log(result_mult);

function equals(a, b) {
  return a === b;
}
console.log(equals(5, "5"));

function addNumbers(x, y) {
  let sum = x + y;
  sum++;
  return sum;
}

function multiply_func(num) {
  return num * 3;
}
multiply_func(addNumbers(5, 10));

function countSquare(numbers) {
  return numbers * numbers;
}
console.log(countSquare(2));

function sum_inc(a, b, c) {
  a++;
  b++;
  c++;
  return a + b + c;
}
console.log(sum_inc(1, 7, -4));

function meow() {
  return "meow";
}

function sleep() {
  return "zzzz....";
}

function play() {
  return "trololo";
}

// Arrow Functions
let sum = (a, b) => a + b;
console.log(sum(1, 2));

let square = (x) => {
  return x * x;
};
console.log(square(4));

let sayHi = function () {
  console.log("Hello");
};
sayHi();

const findMax = (x, y) => (x > y ? x : y);
console.log(findMax(6, 9));

let someName = () => {
  console.log("You called a function someName!");
};
// someName(); // This would log the message

let sumOfNumbers = (a, b) => a + b;
let result_sum = sumOfNumbers(7, 2);
console.log(result_sum, sumOfNumbers);

let funcc = (a, b) => a * b;
console.log(funcc(5, 2));

let someFunc = (k, l, m) => {
  return k + l + m;
};
console.log(someFunc(1, 2, 3));

let captainAdder = (name) => {
  return "captain " + name;
};
console.log(captainAdder("Jack Sparrow"));

let func1 = (a, b) => {
  return a / b + a * b;
};
let func2 = (c, d) => {
  return c + (5 * d) / c;
};
let result_funcs = 7 - func1(50, 4) / func2(40, 30);
console.log(result_funcs);

let multiplication = (a, b) => a * b;
console.log(multiplication(2, 6));

// Higher-Order Functions
function returnText(text) {
  console.log(text());
}
function getText() {
  return "This is a text";
}
returnText(getText);

function alertMessage(text) {
  console.log(text());
}
const textFunc = function () {
  return "Hello world!";
};
alertMessage(textFunc);

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("anonymFunc");
})();

// ===================================
// CONTROL FLOW: LOOPS AND CONDITIONS
// ===================================

// If-Else Statements
let time = 6;
let sound;
if (time > 21) {
  sound = sleep();
} else if (time >= 6) {
  sound = play();
} else {
  sound = meow();
}
console.log(sound);

let a_cond = 30;
let b_cond = 6;
let c_cond;
if (a_cond < 100 && b_cond < 10) {
  c_cond = a_cond * b_cond;
} else if (a_cond < 50 && b_cond < 6) {
  c_cond = a_cond - b_cond;
} else {
  c_cond = a_cond + b_cond;
}
console.log(c_cond);

let age = 18;
if (age < 6) {
  console.log("Anna is a little child");
} else if (age >= 6 && age < 18) {
  console.log("Anna goes to school");
} else if (age === 18) {
  console.log("Anna is going to study at University");
} else if (age > 18 && age < 22) {
  console.log("Anna studies at University");
} else {
  console.log("Anna works");
}

if (age < 18) {
  console.log("Sorry, but you are a minor.");
} else {
  console.log("That's ok. You can enter the pub.");
}

let condition = true;
if (!!!condition) {
  console.log("Cat!");
} else {
  console.log("Dog!");
}

// Ternary Operator
let count = 2;
let isMoreThan2 = !(count > 2) ? true : false;
console.log(isMoreThan2);

var a_ternary = 10;
var b_ternary = 15;
var result_ternary = a_ternary > b_ternary ? "A is greater" : "B is greater";
console.log(result_ternary);

const light = 299792458;
const sound_speed = 343;
let lightIsPower = light > sound_speed ? true : false;
console.log(lightIsPower);

// Loops
// do-while
let n_loop = 256;
do {
  n_loop = n_loop * n_loop;
  console.log(n_loop);
} while (n_loop < 100);

let isRed = true;
do {
  console.log("Hey Harry!");
  isRed = false;
} while (isRed == true);

let n_loop2 = 16;
do {
  n_loop2 = n_loop2 - 16;
  console.log(n_loop2);
} while (n_loop2 < 0);

// while
let n_while = 1;
while (n_while <= 10) {
  if (n_while < 6) {
    console.log("Tree!");
  }
  if (n_while >= 6) {
    console.log("City!");
  }
  n_while++;
}

let countdown = 10;
while (countdown > -1) {
  console.log(countdown);
  countdown--;
}

// for
let a_for;
for (a_for = 6; a_for >= 3; a_for--) {
  console.log("moments");
}

// ===================================
// ARRAYS
// ===================================

// Array Creation
const fruit = ["apple", "orange", "banana"];
let arrOne = ["Bill", "Dave", "Kate"];
let newArray = new Array(4);
console.log(newArray);
let fruits = [];
console.log(fruits);

// Array Manipulation
let arrTwo = arrOne.slice(0, 2);
console.log(arrTwo);
let arrThree = arrOne.slice(-2, -1);
console.log(arrThree);

let numbers = [3, 5, 8, 2, 10];
let sum_arr = numbers.reduce((acc, val) => acc + val, 0);
let avg = sum_arr / numbers.length;
let output = `The sum of the array is ${sum_arr} and the average is ${avg}.`;
console.log(output);

let marks = [12, 14, 1, 22];
console.log(marks[0] - marks[marks.length - 1]);

let myArray = [1, 2, 3];
let modifyArray = (arr) => {
  arr.shift();
  arr.push(5, 6);
  return arr;
};
console.log(myArray[0]);

// Array Traversal
for (i in fruit) {
  console.log(fruit[i]);
}

// Array Checking
function checkData(Data) {
  console.log(Array.isArray(marks));
}
checkData();

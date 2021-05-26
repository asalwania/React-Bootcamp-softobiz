// Js Introducton
// javascript can change html content
// one of the many methods is getElementById().
// the example below "finds" an html element with id="demo", and changes the element content to "hello Javascript"....
// document.getElementById("demo").innerHTML = "Hello JavaScript";

// javaScript can also change html styles
// document.getElementById("demo").style.color = "red";

// // javascript can hide and show html elements
// document.getElementById("demo").style.display = "none"; //hiding element
// document.getElementById("demo").style.display = "block"; // showing element

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

// using document.write()
// document.write(5 + 6);

// using window.alert()
// window.alert(5+6)

// javascript keywords:- These are reserved keywords and cannot be used as names for variables ---

// break :          Terminate a switch or loop
// continue :       Jumsp out of a loop and start at the top
// debugger :       Stops the execution of javascript, and calls (if availabel) the debugging function
// do ... while :  Executes a block of statements, and repeats the block, while a condition is true
// for :           Marks a block of statements to be executed, as long and condition is true
// function :      Declares a fucntion
// if...else :     Marks a block of statements to be executed,depending on conditioin
// return :        Exits a function
// switch :        Marks a block of statements to be executed, depending on different cases
// try...catch :   Implements error handling to a block of statements
// var :           Declares a variable

// diffenence between var, let and const:-
// var has a functional scope where as let and const has block scope

var a = 4;
let b = 5;
function add() {
  // we can access variable a and b both here here
  console.log(a + b);
}
add();

{
  var a = 4;
  let b = 5;
}
function add2() {
  // we can't access variable b here beacuse now b has a block scope and we cant use outside the scope
  console.log(a + b);
}

// and const is similar to let but big difference is that we cannot reasign any value to it

// javacript operaters
// 1. assingment operator (=) assigns a value to variable
const x = 10;
// 2. addition operator(+) add numbers or concat strings
// 3. mulitplication(*)
// -  --> subtraction
// **	--> Exponentiation (ES2016)
// /	--> Division
// %	Modulus --> (Division Remainder)
// ++	--> Increment
// --	--> Decrement

// assignment

// Operator	    Example	          Same As
// =	          x = y	            x = y
// +=	          x += y	          x = x + y
// -=	          x -= y	          x = x - y
// *=	          x *= y	          x = x * y
// /=	          x /= y	          x = x / y
// %=	          x %= y	          x = x % y
// <<=	        x <<= y	          x = x << y
// >>=	        x >>= y	          x = x >> y
// >>>=	        x >>>= y	        x = x >>> y
// &=	          x &= y	          x = x & y
// ^=	          x ^= y	          x = x ^ y
// |=	          x |= y	          x = x | y
// **=	        x **= y          	x = x ** y

// Functions:-

// JS function is a block of code designed to perform a particular task.
// and it is executed when somthing invokes it

// e.g.

function myFunction(p1, p2) {
  return p1 + p2;
}

// we can reuse code with the help of functions
// we can also use functions as variable values
const func = myFunction(4, 5);
const text = `The multiplication of 4 and 5 is ${func}`;

// variables declared within a function, become LOCAL to the function

// e.g.

// code here can NOT use carName

function myFunction() {
  var carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName

// Since local variables are only recognized inside their functions, variables with the same name can be used in different functions

// JS objects

// every thing in js is an object
// objects have there own properties and methods

const car = {
  type: "fiat",
  model: 500,
  color: "white",
  getInfo: function () {
    console.log(
      `This is ${this.type} ${this.model} car of ${this.color} color`
    );
  },
};

// in above object type,model and color and getInfo is method and we can access them by:-
// for properties
car.type;
// for methods
car.getInfo();

// this Keword
// in a function defination , this refers to the owner of the function
// in the above example, this is the car object that owns the getInfo function
// so this.type in function means type property of car object

// if we access the object method with out parentheses, it will return the function defination
// e.g.
const info = car.getInfo;

// when a js variable is declared with the keyword "new", the variable is created as an object
const y = new String(); // declares y as a string object

// avoid string, number and boolean objects. they complicate the code and slow down the execution

// JS events
// js can react to html events
// const changeDate = () => {
//   document.getElementById("demo").innerHTML = new Date();
// };

// Event	                Description
// onchange	    ------>   An HTML element has been changed
// onclick	    ------>   The user clicks an HTML element
// onmouseover	------>   The user moves the mouse over an HTML element
// onmouseout	  ------>   The user moves the mouse away from an HTML element
// onkeydown	  ------>   The user pushes a keyboard key
// onload	      ------>   The browser has finished loading the page

// Strings:-

// js string are used for stoings and manipulating text
// and is zero or more characters written inside quotes either single or double quotes

let xy = "Ajay kumar";

// We can use quotes inside a string, as long as they don't match the quotes surrounding the string:
const str = "It's alright";
const str2 = 'He is called "Johny"';

// to find the length of a string we can use built in length property;
const len = str.length;

// escape characters
// if you want to add same quotos or special characters inside the string you can can use escape characters
// the backslash (\) escape characte turns special character in string character

//        Code	  Result	    Description
//        \'	    '	          Single quote
//        \"	    "	          Double quote
//        \\	    \	          Backslash

var str3 = 'We are the so-called "Vikings" from the north.';

//    other     escape sequences are valid in JS;
//    Code	    Result
//    \b	      Backspace
//    \f	      Form Feed
//    \n	      New Line
//    \r	      Carriage Return
//    \t	      Horizontal Tabulator
//    \v	      Vertical Tabulator

// finding a string in a string
const str4 = "please locate where 'locate' occurs!";
const pos = str4.indexOf("locate"); // this will return the first occurance of loacte
// console.log(pos)
const lastpos = str4.lastIndexOf("locate"); // this will return the last occurance of loacte
// console.log(lastpos)

// both indexof or lastIndexOf return -1 if the text is not found

// seraching for a string
const src = str4.search("locate");
// console.log(src)

// main difference between search and indexof is that indexof can also take regular expressions as argument

// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

const slc = str4.slice(7, 13);
// console.log(slc)
// if we use -ve sign with arguments it goes from last to first
// it means the index of last charater will be -1

// if we ommit second parameter the method will return rest of the string

// substring is similar to slice the difference is that it does not take -ve arguments

// substr is also similar to slice the difference is that it takes second parameter as length of extracted part
const substr = str4.substr(7, 6);
// console.log(substr)

// Replacing String Content
// The replace() method replaces a specified value with another value in a string

const replacceStr = "Please visit Microsoft!";
const n = replacceStr.replace("Microsoft", "Google");
// console.log(n)

// by default replace method replace only the first match and by default it is case sensitive
// to replace case insensitive we can use regex with a /i flag or to rplace all matches use /g flag

const str5 = "Please visit Microsoft and Microsoft!";
const n2 = str5.replace(/Microsoft/g, "W3Schools");
console.log(n2);

// converting to upper and lower case
const text1 = "Hello world";
const text2 = text1.toLowerCase();
const text3 = text1.toUpperCase();

// The concat() Method
// concat() joins two or more strings

const text4 = "Hello" + " " + "World!";
const text5 = "Hello".concat(" ", "World!");
// console.log(text4)

// String.trim()
// The trim() method removes whitespace from both sides of a string

var strtrm = "       Hello World!        ";
// console.log(strtrm.trim());

// we can also use the replace solution above to add a trim function to the JavaScript String.prototype

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  };
}

// JavaScript String Padding
// ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string

let str6 = "Ajay";
str6 = str6.padStart(6,'!')
// console.log(str6)

// Extracting String Characters
// There are 3 methods for extracting string characters:

// charAt(position)
// charCodeAt(position)
// Property access [ ]


// split method convert string to array 
let splitStr = 'a,b,c,d,e'
// console.log(splitStr.split(','))
// Js Introducton
// javascript can change html content
// one of the many methods is getElementById().
// the example below "finds" an html element with id="demo", and changes the element content to "hello Javascript"....
document.getElementById("demo").innerHTML = "Hello JavaScript";

// javaScript can also change html styles
document.getElementById("demo").style.color = "red";

// javascript can hide and show html elements
document.getElementById("demo").style.display = "none"; //hiding element
document.getElementById("demo").style.display = "block"; // showing element

// Writing into an HTML element, using innerHTML.
// Writing into the HTML output using document.write().
// Writing into an alert box, using window.alert().
// Writing into the browser console, using console.log().

// using document.write()
document.write(5 + 6);

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

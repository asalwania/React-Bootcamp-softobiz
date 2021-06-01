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

// var a = 4;
// let b = 5;
// function add() {
//   // we can access variable a and b both here here
//   console.log(a + b);
// }
// add();

// {
//   var a = 4;
//   let b = 5;
// }
// function add2() {
//   // we can't access variable b here beacuse now b has a block scope and we cant use outside the scope
//   console.log(a + b);
// }

// // and const is similar to let but big difference is that we cannot reasign any value to it

// // javacript operaters
// // 1. assingment operator (=) assigns a value to variable
// const x = 10;
// // 2. addition operator(+) add numbers or concat strings
// // 3. mulitplication(*)
// // -  --> subtraction
// // **	--> Exponentiation (ES2016)
// // /	--> Division
// // %	Modulus --> (Division Remainder)
// // ++	--> Increment
// // --	--> Decrement

// // assignment

// // Operator	    Example	          Same As
// // =	          x = y	            x = y
// // +=	          x += y	          x = x + y
// // -=	          x -= y	          x = x - y
// // *=	          x *= y	          x = x * y
// // /=	          x /= y	          x = x / y
// // %=	          x %= y	          x = x % y
// // <<=	        x <<= y	          x = x << y
// // >>=	        x >>= y	          x = x >> y
// // >>>=	        x >>>= y	        x = x >>> y
// // &=	          x &= y	          x = x & y
// // ^=	          x ^= y	          x = x ^ y
// // |=	          x |= y	          x = x | y
// // **=	        x **= y          	x = x ** y

// // Functions:-

// // JS function is a block of code designed to perform a particular task.
// // and it is executed when somthing invokes it

// // e.g.

// function myFunction(p1, p2) {
//   return p1 + p2;
// }

// // we can reuse code with the help of functions
// // we can also use functions as variable values
// const func = myFunction(4, 5);
// const text = `The multiplication of 4 and 5 is ${func}`;

// // variables declared within a function, become LOCAL to the function

// // e.g.

// // code here can NOT use carName

// function myFunction() {
//   var carName = "Volvo";
//   // code here CAN use carName
// }

// // code here can NOT use carName

// // Since local variables are only recognized inside their functions, variables with the same name can be used in different functions

// // JS objects

// // every thing in js is an object
// // objects have there own properties and methods

// const car = {
//   type: "fiat",
//   model: 500,
//   color: "white",
//   getInfo: function () {
//     console.log(
//       `This is ${this.type} ${this.model} car of ${this.color} color`
//     );
//   },
// };

// // in above object type,model and color and getInfo is method and we can access them by:-
// // for properties
// car.type;
// // for methods
// car.getInfo();

// // this Keword
// // in a function defination , this refers to the owner of the function
// // in the above example, this is the car object that owns the getInfo function
// // so this.type in function means type property of car object

// // if we access the object method with out parentheses, it will return the function defination
// // e.g.
// const info = car.getInfo;

// // when a js variable is declared with the keyword "new", the variable is created as an object
// const y = new String(); // declares y as a string object

// // avoid string, number and boolean objects. they complicate the code and slow down the execution

// // JS events
// // js can react to html events
// // const changeDate = () => {
// //   document.getElementById("demo").innerHTML = new Date();
// // };

// // Event	                Description
// // onchange	    ------>   An HTML element has been changed
// // onclick	    ------>   The user clicks an HTML element
// // onmouseover	------>   The user moves the mouse over an HTML element
// // onmouseout	  ------>   The user moves the mouse away from an HTML element
// // onkeydown	  ------>   The user pushes a keyboard key
// // onload	      ------>   The browser has finished loading the page

// // Strings:-

// // js string are used for stoings and manipulating text
// // and is zero or more characters written inside quotes either single or double quotes

// let xy = "Ajay kumar";

// // We can use quotes inside a string, as long as they don't match the quotes surrounding the string:
// const str = "It's alright";
// const str2 = 'He is called "Johny"';

// // to find the length of a string we can use built in length property;
// const len = str.length;

// // escape characters
// // if you want to add same quotos or special characters inside the string you can can use escape characters
// // the backslash (\) escape characte turns special character in string character

// //        Code	  Result	    Description
// //        \'	    '	          Single quote
// //        \"	    "	          Double quote
// //        \\	    \	          Backslash

// var str3 = 'We are the so-called "Vikings" from the north.';

// //    other     escape sequences are valid in JS;
// //    Code	    Result
// //    \b	      Backspace
// //    \f	      Form Feed
// //    \n	      New Line
// //    \r	      Carriage Return
// //    \t	      Horizontal Tabulator
// //    \v	      Vertical Tabulator

// // finding a string in a string
// const str4 = "please locate where 'locate' occurs!";
// const pos = str4.indexOf("locate"); // this will return the first occurance of loacte
// // console.log(pos)
// const lastpos = str4.lastIndexOf("locate"); // this will return the last occurance of loacte
// // console.log(lastpos)

// // both indexof or lastIndexOf return -1 if the text is not found

// // seraching for a string
// const src = str4.search("locate");
// // console.log(src)

// // main difference between search and indexof is that indexof can also take regular expressions as argument

// // slice() extracts a part of a string and returns the extracted part in a new string.

// // The method takes 2 parameters: the start position, and the end position (end not included).

// const slc = str4.slice(7, 13);
// // console.log(slc)
// // if we use -ve sign with arguments it goes from last to first
// // it means the index of last charater will be -1

// // if we ommit second parameter the method will return rest of the string

// // substring is similar to slice the difference is that it does not take -ve arguments

// // substr is also similar to slice the difference is that it takes second parameter as length of extracted part
// const substr = str4.substr(7, 6);
// // console.log(substr)

// // Replacing String Content
// // The replace() method replaces a specified value with another value in a string

// const replacceStr = "Please visit Microsoft!";
// const n = replacceStr.replace("Microsoft", "Google");
// // console.log(n)

// // by default replace method replace only the first match and by default it is case sensitive
// // to replace case insensitive we can use regex with a /i flag or to rplace all matches use /g flag

// const str5 = "Please visit Microsoft and Microsoft!";
// const n2 = str5.replace(/Microsoft/g, "W3Schools");
// console.log(n2);

// // converting to upper and lower case
// const text1 = "Hello world";
// const text2 = text1.toLowerCase();
// const text3 = text1.toUpperCase();

// // The concat() Method
// // concat() joins two or more strings

// const text4 = "Hello" + " " + "World!";
// const text5 = "Hello".concat(" ", "World!");
// // console.log(text4)

// // String.trim()
// // The trim() method removes whitespace from both sides of a string

// var strtrm = "       Hello World!        ";
// // console.log(strtrm.trim());

// // we can also use the replace solution above to add a trim function to the JavaScript String.prototype

// if (!String.prototype.trim) {
//   String.prototype.trim = function () {
//     return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
//   };
// }

// // JavaScript String Padding
// // ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string

// let str6 = "Ajay";
// str6 = str6.padStart(6,'!')
// // console.log(str6)

// // Extracting String Characters
// // There are 3 methods for extracting string characters:

// // charAt(position)
// // charCodeAt(position)
// // Property access [ ]

// // split method convert string to array
// let splitStr = 'a,b,c,d,e'
// // console.log(splitStr.split(','))

// --------------------------------------------------------------------------------------------------------

// // JavaScript Numbers

// // Js has only one type of number which can be written with or with out decimals.

// // extra large or extra small numbers can be written with exponent notation

// let x = 123e5;
// let y = 123e-5;
// // console.log(x,y)

// // Unlike other programming languages, Js does not define different types of numbers, like integers,short, long, floating etc.
// // Js numbers are always stroes number  in 64 bits where the number (the fraction) is stored in bits 0 to 51, the exponent in bits
// //  52 to 62, and the sign in bit 63:

// // integers are acurate upto 15 digits if are without exponent notation
// const x1 = 999999999999999; // x2 will be 999999999999999
// const y1 = 9999999999999999; // y2 will be 10000000000000000
// // console.log(x1,y1)

// // The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate
// const x3 = 0.2 + 0.1; // x3 will be 0.30000000000000004
// // console.log(x3)

// // to solve this problem we can use:
// const x4 = (0.2 * 10 + 0.1 * 10) / 10;
// // console.log(x4)

// // Numeric Strings
// // JavaScript strings can have numeric content
// var x5 = "100";
// var y5 = "10";
// var z5 = x5 / y5; // z will be 10
// // console.log(z5)
// // it means all operations except + will use numeric strings as numbers

// // NaN - Not a Number
// // NaN is a JavaScript reserved word indicating that a number is not a legal number.
// // Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)
// const x6 = 100 / "Apple"; // x will be NaN (Not a Number)
// // console.log(x6)

// // we can use the global js function isNan() to find out if value is a number
// isNaN(x6); // returns true because x is Not a Number
// // If you use NaN in a mathematical operation, the result will also be NaN
// var x7 = NaN;
// var y7 = 5;
// var z7 = x7 + y7; // z will be NaN
// // console.log(z7)

// // Or the result might be a concatenation if other variable is a string
// var x8 = NaN;
// var y8 = "5";
// var z8 = x8 + y8; // z will be NaN5
// // console.log(z8)

// // NaN is a number: typeof NaN returns number
// console.log(typeof NaN);

// // Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number
// let myNumber = 2;
// while (myNumber != Infinity) {
//   // Execute until Infinity
//   myNumber = myNumber * myNumber;
// }
// // console.log(myNumber);

// // division by zero is alos inginity
// let x9 = 2 / 0; // x9 will be Infinity
// let y9 = -2 / 0; // y9 will be -Infinity

// // type of infinity will also return a number

// // Hexadecimal
// // js interprets numeriv constants as hexadecimal if they are preceded by 0x

// let x10 = 0xff; // x10 will be 255
// // Never write a number with a leading zero (like 07).
// // Some JavaScript versions interpret numbers as octal if they are written with a leading zero

// // JavaScript Number Methods:-

// // toString method
// // it returns a number as a string
// let x11 = 123;
// x11.toString(); // returns 123 from variable x11
// (123).toString(); // returns 123 from literal 123
// (100 + 23).toString(); // returns 123 from expression 100 + 23

// // The toExponential() Method
// // toExponential() returns a string, with a number rounded and written using exponential notation.
// // A parameter defines the number of characters behind the decimal point
// let x12 = 9.656;
// x12.toExponential(2); // returns 9.66e+0
// x12.toExponential(4); // returns 9.6560e+0
// x12.toExponential(6); // returns 9.656000e+0

// // The toFixed() Method
// // toFixed() returns a string, with the number written with a specified number of decimals
// let x13 = 9.656;
// x13.toFixed(0); // returns 10
// x13.toFixed(2); // returns 9.66
// x13.toFixed(4); // returns 9.6560
// x13.toFixed(6); // returns 9.656000

// // The toPrecision() Method
// // toPrecision() returns a string, with a number written with a specified length
// let x14 = 9.656;
// x14.toPrecision(); // returns 9.656
// x14.toPrecision(2); // returns 9.7
// x14.toPrecision(4); // returns 9.656
// x14.toPrecision(6); // returns 9.65600

// // The valueOf() Method
// // valueOf() returns a number as a number
// let x15 = 123;
// x15.valueOf(); // returns 123 from variable x15
// (123).valueOf(); // returns 123 from literal 123
// (100 + 23).valueOf(); // returns 123 from expression 100 + 23

// // Converting Variables to Numbers
// // There are 3 JavaScript methods that can be used to convert variables to numbers:
// // The Number() method
// // The parseInt() method
// // The parseFloat() method
// // These methods are not number methods, but global JavaScript methods

// // Method	                  Description
// // Number()	    ------->    Returns a number, converted from its argument.
// // parseFloat()	------->    Parses its argument and returns a floating point number
// // parseInt()	  ------->    Parses its argument and returns an integer

// // JavaScript Arrays
// // js arrays are used to store mulitple values in a single variable
// const cars = ["Saab", "Volvo", "BMW"];
// // document.getElementById("demo").innerHTML = cars;

// // Arrays are Objects
// // Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
// // But, JavaScript arrays are best described as arrays.
// // Arrays use numbers to access its "elements". In this example, person[0] returns John

// // Array Elements Can Be Objects
// // JavaScript variables can be objects. Arrays are special kinds of objects.
// // Because of this, you can have variables of different types in the same Array.
// // You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array
// cars[0] = { name: "Saab" };
// cars[1] = new Date().getFullYear();
// // console.log(cars)

// // The length Property
// // he length property of an array returns the length of an array (the number of array elements)
// console.log(cars.length);

// // Looping Array Elements
// // The safest way to loop through an array, is using a for loop
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// // Associative Arrays
// // Many programming languages support arrays with named indexes.
// // Arrays with named indexes are called associative arrays (or hashes).
// // JavaScript does not support arrays with named indexes.
// // In JavaScript, arrays always use numbered indexes

// // to recoginse array we cannot use typeof because it will return object
// // so we can use two methods instanceof Array and Array.isarray()
// console.log(cars instanceof Array);
// // or
// console.log(Array.isArray(cars));

// // JavaScript Array Methods:-

// // convert array to string
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// // we can aslo use join method it is also like toString but we can specify separator
// // console.log(fruits.join('-'))

// // Popping and Pushing
// // When you work with arrays, it is easy to remove elements and add new elements.
// // This is what popping and pushing is:
// // Popping items out of an array, or pushing items into an array

// // Shifting Elements
// // Shifting is equivalent to popping, working on the first element instead of the last.
// // The shift() method removes the first array element and "shifts" all other elements to a lower index

// // The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

// // Deleting Elements
// // Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete
// const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits1[0]; // Changes the first element in fruits to undefined
// // console.log(fruits1)

// // Splicing an Array
// // The splice() method can be used to add new items to an array

// const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
// fruits3.splice(2, 0, "Lemon", "Kiwi");
// // console.log(fruits3)

// // Merging (Concatenating) Arrays
// // The concat() method creates a new array by merging (concatenating) existing arrays]
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys); // Concatenates (joins) myGirls and myBoys
// // console.log(myChildren)

// // The concat() method can take any number of array arguments
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin", "Morgan"];
// const myChildren1 = arr1.concat(arr2, arr3); // Concatenates arr1 with arr2 and arr3
// // console.log(myChildren1)

// // Slicing an Array
// // The slice() method slices out a piece of an array into a new array.
// // This example slices out a part of an array starting from array element 1 ("Orange")
// const fruits4 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits4.slice(1);
// // console.log(citrus)

// // Sorting an Array
// // The sort() method sorts an array alphabetically
// const fruits5 = ["banana", "orange", "apple", "mango"];
// // console.log(fruits5.sort())

// // reversing an array
// // console.log(fruits5.reverse())
// // basically we can use sort and reverse to sort array in descending order

// // numbeirc sort
// const points = [40, 100, 1, 5, 25, 10];
// points.sort();
// // console.log(points)
// points.sort(function (a, b) {
//   return a - b;
// });
// // console.log(points)

// // sorting an array in random order
// points.sort(function (a, b) {
//   return 0.5 - Math.random();
// });
// // console.log(points)

// //finding max of an array
// function max(array) {
//   array.sort(function (a, b) {
//     return a - b;
//   });
//   return array[array.length - 1];
// }

// //finding min of an array
// function min(array) {
//   array.sort(function (a, b) {
//     return a - b;
//   });
//   return array[0];
// }

// console.log(max(points));
// console.log(min(points));

// console.log(Math.max.apply(null, points));

// // Sorting Object Arrays
// // JavaScript arrays often contain objects

// const cars1 = [
//   { type: "Volvo", year: 2016 },
//   { type: "Saab", year: 2001 },
//   { type: "BMW", year: 2010 },
// ];
// console.log(
//   cars1.sort(function (a, b) {
//     return a.year - b.year;
//   })
// );

// // JavaScript Array Iteration Methods
// // Array.forEach()
// // The forEach() method calls a function (a callback function) once for each array element
// const text = "";
// const num = [45, 4, 9, 16, 25];
// function cb(val, idx, arr) {
//   return "number" + idx + ": " + val;
// }
// const newNum = num.forEach(cb);  // for each does not return anything
// console.log(newNum) // this will return undefined

// // array.map()
// const text1 = "";
// const num1 = [45, 4, 9, 16, 25];

// const newNum1 = num1.map(cb);  // map returns a new array
// console.log(newNum1) // this will return an array

// // Array.filter()
// // The filter() method creates a new array with array elements that passes a test.
// // This example creates a new array from elements with a value larger than 18
// const numbers = [45, 4, 9, 16, 25];
// const over18 = numbers.filter(myFunction);

// function myFunction(value, index, array) {
//   return value > 18;
// }
// console.log(over18)

// // Array.reduce()
// // The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// const sum = numbers.reduce((total,val,idx,arr)=> {return total + val},0)
// console.log(sum)

// // Array.indexOf()
// // The indexOf() method searches an array for an element value and returns its position
// var fruits6 = ["Apple", "Orange", "Apple", "Mango"];
// var a = fruits6.indexOf("Apple");
// console.log(a)

// // Array.find()
// // The find() method returns the value of the first array element that passes a test function

// // Array.findIndex()
// // The findIndex() method returns the index of the first array element that passes a test function
// console.log(fruits6.findIndex((val) => val === 'Orange'))

// // JavaScript Date Objects

// // Creating Date Objects
// // Date objects are created with the new Date() constructor.

// // There are 4 ways to create a new date object:

// // new Date()
// // new Date(year, month, day, hours, minutes, seconds, milliseconds)
// // new Date(milliseconds)
// // new Date(date string)

// console.log(new Date())
// console.log(new Date(2018,11,24,10,33,30,0));
// console.log(new Date(2018)); // 2018 will be treated as milliseconds
// console.log(new Date(47,7,16)); // 47 will be treated as 1947

// // JavaScriptDate Input
// // There are generally 3 types of JavaScript date input formats:

// // Type	          Example
// // ISO Date	   ------->   "2015-03-25" (The International Standard)
// // Short Date	 ------->   "03/25/2015"
// // Long Date	 ------->   "Mar 25 2015" or "25 Mar 2015"

// // JavaScript Get Date Methods

// // Method	                          Description
// // getFullYear()	      -------->   Get the year as a four digit number (yyyy)
// // getMonth()        	-------->     Get the month as a number (0-11)
// // getDate()	          -------->   Get the day as a number (1-31)
// // getHours()	        -------->     Get the hour (0-23)
// // getMinutes()      	-------->     Get the minute (0-59)
// // getSeconds()	      -------->     Get the second (0-59)
// // getMilliseconds()	  -------->   Get the millisecond (0-999)
// // getTime()	          -------->   Get the time (milliseconds since January 1, 1970)
// // getDay()	          -------->     Get the weekday as a number (0-6)
// // Date.now()	        -------->     Get the time. ECMAScript 5

// // Set Date Methods
// // Set Date methods are used for setting a part of a date:

// // Method	                      Description
// // setDate()	        --------->  Set the day as a number (1-31)
// // setFullYear()	    --------->  Set the year (optionally month and day)
// // setHours()	      --------->    Set the hour (0-23)
// // setMilliseconds()	--------->  Set the milliseconds (0-999)
// // setMinutes()	    --------->    Set the minutes (0-59)
// // setMonth()	      --------->    Set the month (0-11)
// // setSeconds()	    --------->    Set the seconds (0-59)
// // setTime()	        --------->  Set the time (milliseconds since January 1, 1970)

// // Math Properties (Constants)
// // The syntax for any Math property is : Math.property.
// // JavaScript provides 8 mathematical constants that can be accessed as Math properties

// // Math.E        --------> returns Euler's number
// // Math.PI       --------> returns PI
// // Math.SQRT2    --------> returns the square root of 2
// // Math.SQRT1_2  --------> returns the square root of 1/2
// // Math.LN2      --------> returns the natural logarithm of 2
// // Math.LN10     --------> returns the natural logarithm of 10
// // Math.LOG2E    --------> returns base 2 logarithm of E
// // Math.LOG10E   --------> returns base 10 logarithm of E

// // random method to get values between two numbers

// function getRndInt(min,max){
//   return Math.floor(Math.random() *(max-min) + min)
// }

// console.log(getRndInt(0,100))

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// // Boolean Values

// // basically boolean values represents one of two values: true or false

// // very often in programing , we need a data type that can only have on of the two values,like:
// //            yes/no
// //            on/off
// //            true/false

// console.log(10 > 9); // will return true because statement is right
// console.log(10 < 9); // will return false because statement is wrong

// // Comparisons and Conditions:-

// //        Operator	        Description	                    Example
// //        ==	              equal to	                      if (day == "Monday")
// //        >	                greater than	                  if (salary > 9000)
// //        <	                less than	                      if (age < 18)
// //        >=                greater than or equal to        if(age >= 18)
// //        <=                less than or equal to        if(age <= 18)

// // boolean of 0 is false and 1 is true
// console.log(Boolean(0)); // return false
// console.log(Boolean(1)); // return true

// // the difference between (x==y) and (x===y).
// // == only checks values whereas === also checks data types with values e.g.
// console.log("5" == 5); // will return true
// console.log("5" === 5); // will return false

// // Comparing two JavaScript objects will always return false.

// // JS Comarisons

// // Operator	              Description	                      Comparing	            Returns

// // ==	                    equal to	                        x == 8	              false
// //                                                          x == 5	true
// //                                                          x == "5"	true

// // ===	                  equal value and equal type	      x === 5	              true
// //                                                          x === "5"	false

// // !=	                    not equal	                        x != 8	              true

// // !==	                  not equal value or

// //                        not equal type	                  x !== 5	              false
// //                                                          x !== "5"	true
// //                                                          x !== 8	true

// // >	                    greater than	                    x > 8	                false

// // <	                    less than	                        x < 8	                true

// // >=	                    greater than or equal to	        x >= 8	              false

// // <=	                    less than or equal to	            x <= 8	              true

// //JavaScript if else and else if:-

// // there are conditional statements in used to perform certain operations if they fullfill given conditions

// // 'if' Statement
// // it is used to specify a block of js code to be executed if a condition is true.
// // e.g.
// if ("19" == 19) {
//   console.log(true);
// }

// // 'else' statement
// // it will execute the bolck which will not fullfill if statement
// if ("19" === 19) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // 'else if' statement
// // it is used to specify new condition if the first condition is false
// if ("19" === 19) {
//   //.......
// } else if ("19" === 19) {
//   //......
// } else {
//   //.......
// }

// // switch statement
// // the switch statement is used to select one of many code blocks to be executed
// const nm = "Alka";
// switch (nm) {
//   case "Ajay":
//     console.log("Hello Ajay");
//     break;
//   case "Alka":
//     console.log("Hello Alka");
//     break;
//   default:
//     return "Hello user";
// }

// // we can use default case any where it is not mendetory to use it at last
// // but we need to use break statement after default is it is not in last

// // switch cases use strict comperision (===)

// // if we want to execute a code again and again with different values we can use loop
// // there are different kinds of loops
// // for -        loops through a block of code a number of times
// // for/in -     loops through the properties of an object
// // for/of -     loops through the values of an iterable object
// // while -      loops through a block of code while a specified condition is true
// // do/while -   also loops through a block of code while a specified condition is true

// // for loop
// for (let i = 0; i <= 4; i++) {
//   console.log(i);
// }

// // for in loop
// const arr = ["ajay", "alka", "pooja", "kamlesh"];
// for (i in arr) {
//   console.log(i); // will console indexes of array elements
// }

// // for of loop
// for (i of arr) {
//   console.log(i); // will console elements of array
// }

// // while loop
// // it loops through a block of code as long as a specified condition is true
// let x = 0;
// while (x < 3) {
//   console.log("The number is ", x + 1);
//   x++;
// }

// // do WHile
// // the do while loop is a varient of the while loop. this loop will execute the block once, before checking if the condition is true
// x = 0;
// do {
//   x++;
//   console.log(x);
// } while (x < 10);

// // JS Break
// // the break statement jumps out of a loop
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     break;
//   }
//   console.log("The number is " + i);
// }

// // and continue statement 'jumps over' one iteration in the loop
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log("The number is " + i);
// }

// ---------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------
// // JS type conversion

// // there are five diffrerent data types that can contain values in js:
// // String,number,boolean,object,function

// // And there are six types of objects
// // object,, Date, Array String, Number, Boolean

// // and 2 data types that cannot contain values:
// // null, undefined

// // we can use type of operator to find the type of a js variable
// // typeof "John";                               // Returns "string"
// // typeof 3.14;                                 // Returns "number"
// // typeof NaN;                                  // Returns "number"
// // typeof false;                                // Returns "boolean"
// // typeof [1, 2, 3, 4];                         // Returns "object"
// // typeof { name: "John", age: 34 };            // Returns "object"
// // typeof new Date();                           // Returns "object"
// // typeof function () {};                       // Returns "function"
// // typeof myCar;                                // Returns "undefined" *
// // typeof null;                                 // Returns "object"

// // to convert data into string
// true.toString(); // returns "true"
// String(true); // returns "true"
// String(123); // returns "123"
// String(Date()); // return "Thu Jul 17 2014 15:38:19 GMT+0200 (W. Europe Daylight Time)"
// Date.toString(); // return same as above line

// // converting strings to a number
// Number("3.14"); // returns 3.14
// Number(" "); // returns 0
// Number(""); // returns 0
// Number("99 88"); // returns NaN when it cannot be converted
// console.log(+"5"); // returns 5

// // Automatic Type Conversion:
// 5 + null; // returns 5         because null is converted to 0
// "5" + null; // returns "5null"   because null is converted to "null"
// "5" + 2; // returns "52"      because 2 is converted to "2"
// "5" - 2; // returns 3         because "5" is converted to 5
// "5" * "2"; // returns 10        because "5" and "2" are converted to 5 and 2

// // JavaScript Bitwise Operators
// console.log(5 & 1);
// console.log(5 | 1);
// console.log(~0101);
// console.log(~0101);
// console.log(4 ^ 1);

// // Regular expression in js
// // seraching with Regex
// let str = "Visit W3Schools";
// let n = str.replace(/w3schools/i,'Miscrosoft');
// console.log(n);

// // find by [abc] 
// console.log(str.search(/[s]/g))
// console.log(str.replace(/[s]/g,"S"));

// //Try and catch

// try {
//     const b=5
//     debugger;
//     b=6
//     console.log(b)
// } catch (error) {
//     console.log('Cannot add value to constant')
// }finally{
//     console.log('this will execute in every condition')
// }

// class Person{
//     constructor(name,age,department){
//         this.name = name,
//         this.age=age,
//         this.department=department
//     }

//     getInfo = ()=>{
//         console.log(`${this.name} is ${this.age} years old and works in ${this.department} department`)
//     }
// }

// const emp1 = new Person('Ajay',29,'IT')
// emp1.getInfo()

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Javascript JSON (javascript object notation)
// json is a format for storing and transporting data 
// it is often used when data is sent from server to a web page
// e.g.
var text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// convert json data to js object
const obj = JSON.parse(text)
console.log(obj)



// js debugging


// js resereved keyword
// abstract	arguments	await*	boolean
// break	byte	case	catch
// char	class*	const	continue
// debugger	default	delete	do
// double	else	enum*	eval
// export*	extends*	false	final
// finally	float	for	function
// goto	if	implements	import*
// in	instanceof	int	interface
// let*	long	native	new
// null	package	private	protected
// public	return	short	static
// super*	switch	synchronized	this
// throw	throws	transient	true
// try	typeof	var	void
// volatile	while	with	yield
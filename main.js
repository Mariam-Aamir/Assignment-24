"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
const string1 = "Hello";
const string2 = "world";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
// • Tests using the lower case function
const upperCase = "HELLO";
const lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const number1 = 10;
const number2 = 20;
console.log(number1 === number2); //false
console.log(number1 !== number2); //true
console.log(number1 > number2); //false
console.log(number1 < number2); //true
console.log(number1 >= number2); //false
console.log(number1 <= number2); //true
// • Tests using "and" and "or" operators
const x = 10;
const y = 20;
const z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y < z); //true
// • Test whether an item is in a array
const array1 = [1, 2, 3, 4, 5];
const itemtofind = 3;
console.log(array1.indexOf(itemtofind) !== -1); //true
// • Test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //true

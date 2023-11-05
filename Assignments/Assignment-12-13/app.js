// 1. Write a program that takes a character (number or string) 
// in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII 
// codes:- A=65, Z=90, a=97, z=122)

let char = prompt("Enter a character: ");

if (!isNaN(char)) {
    alert("The input is a number.");
} else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    alert("The input is an uppercase letter.");
} else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is not a number or letter.");
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var integer1 = +prompt("Enter first number")
var integer2 = +prompt("enter second number")
if(integer1>integer2) {
  alert(integer1 + " is larger than " + integer2)
} else if(integer1<integer2){
  alert( integer1+" is smaller than " + integer2)
} else{
  alert("both nums are equal")
}

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero
var num = +prompt("Enter the number");
if (num>0) {
alert(num+" is positive number")
} else if (num<0) {
alert(num+" is negative number")
} else{
  alert(num)
}

// 4. Write a program that takes a character (i.e. string of 
//   length 1) and returns true if it is a vowel, false otherwise
var string = prompt("Enter the vowles")
if (string== "a") {
alert("true")
} else if (string== "e") {
alert("true")
} else if (string== "i") {
  alert("true")
} else if (string== "o") {
  alert("true")
} else if (string== "u") {
  alert("true")
}
else{
  alert("false")
}

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then 
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are 
// same, show message “Correct! The password you 
// entered matches the original password”. Show 
// “Incorrect password” otherwise

var password = 123
var user = +prompt("Enter your password in number");
if (user==0) {
  alert("Please enter your password");
} else if (user==password) {
alert("Correct! The password you entered is matches the original password")
}
else{
  alert("Incorrect Password")
}

// 6. This if/else statement does not work. Try to fix it:
// var hour = 13;
// var greeting = +prompt("Enter the hour")
// if (hour==13) {
//   alert("Please enter your password");
// }
// else{
//   alert("Incorrect Password")
// }
// 6. This if/else statement does not work. Try to fix it:
var greeting= +prompt("enter the hour")
var hour = 13;
if (hour < 18) {
alert(greeting = "Good day")
} else {
  alert(greeting = "Good evening");
}

// 7. Write a program that takes time as input from user in 24 
// hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statement
var time = +prompt("enter the time in 24-hour clock format")
if (time>=0 && time< 1200) {
  alert("Good morning!")
} else if (time >= 1200 && time < 1700) {
alert("Good afternoon!")
} else if (time >= 1700 && time < 2100) {
  alert("Good evening!")
} else if (time >= 2100 && time <= 2359) {
alert("good night")
} else{
  alert("invalid input")
}



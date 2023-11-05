// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10
document.write("The value of a is: " + a + '</br>')
document.write(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,," + '</br>');

var val = 10+1
document.write("The value of ++a is: " +val + '</br>'+ "Now the value of a " +" is: " + val + '</br>');
var val2 = val+1
document.write("The value of a++ is: " +val + '</br>'+ "Now the value of a " +" is: " + val2 + '</br>');


var val3 = --a+2
document.write("The value of --a is: " + val + '</br>' + "Now the value of a " +" is: " + val3 + '</br>')
var val4 = a-- +1
document.write("The value of a-- is: " + val + '</br>' + "Now the value of a " +" is: " + val4+ '</br>')



//2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--
document.write('<h2>Output in variables a,b & reult</h2>' + '</br>');

var a =2, b=1
var a1 = --a - --b
document.write("a is: "+a1 + '</br>')
var a2 = --a - --b + ++b;
document.write("b is: "+a2 + '</br>')
var a3 = --a - --b + ++b + b--;
document.write("result: "+a3 + '</br>')

// 3. Write a program that takes input a name from user & 
// greet the user.

var userName = prompt("Enter your Name")
alert("Hi " +userName)

// 5. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.
document.write('<br>', "<h3>Table</h3>"); 
var table = +prompt ("Enter any number")
if (table===0){
    for (let i = 1; i <= 10; i++) {
        document.write(  '<br>', 5+" X " + i + " = " +  5*i, '<br>' );
      } 
} else{
    for (let i = 1; i <= 10; i++) {
        document.write(  '<br>', table+" X " + i + " = " +  table*i, '<br>' );
      } 

}
//   6. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable.

// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
// 1. Write a program that takes two user inputs for first and 
// last name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name.
var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
alert( "Hello "+firstName + " " +lastName);

// 2. Write a program to take a user input about his favorite 
// mobile phone model. Find and display the length of user 
// input in your browser
 var userInput = prompt("Enter your favorite mobile phone model")
 document.write("My favorite phone is: " + userInput+ '</br>'+ "Length of string is : " + userInput.length);

//  3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser
var letter = "Pakistani "
document.write('<br>', "<h3>String & Index</h3>"); 

document.write('</br>'+"String: " + letter +'</br>');
document.write("Index of 'n' is: "+ letter.indexOf("n"));

// 4. Write a program to find the last index of letter “l” in the 
// word “Hello World” and display the result in your browser
var letter = "Hello World"
document.write('<br>', "<h3>Last Index of 'l'</h3>"); 

document.write('</br>'+"String: " + letter +'</br>');
document.write("Index of 'l' is: "+ letter.lastIndexOf("l"));

// 5. Write a program to find the character at 3rd index in the 
// word “Pakistani” and display the result in your browser.
var letter = "Pakistani "
document.write('<br>', "<h3>Character index</h3>"); 

document.write('</br>'+"String: " + letter +'</br>');
document.write("character at index 3: "+ letter.charAt("3"));

// 6. Repeat Q1 using string concat() method
var firstName = prompt("Enter your Mother name")
var lastName = prompt("Enter your Father name")
document.write( '</br>'+"Hello "+firstName.concat(" "+lastName));

// 7. Write a program to replace the “Hyder” to “Islam” in the 
// word “Hyderabad” and display the result in your browser.
document.write('<br>', "<h3>Replacement</h3>"); 

var city = "Hyderabad"
document.write("City: " +city +'</br>')
document.write("After replacement: "+ city.replace("Hyder", "Islam"));

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and 
// football together.”;
document.write('<br>', "<h3>All replacement</h3>"); 

var replace = "Ali and Sami are best friends. They play cricket and football together"
document.write(replace +'<br>'+ '<b>After replacement of and: </b>' +replace.replace(/and/g, "&" )+'<br>');

// 9. Write a program that converts a string “472” to a number 
// 472. Display the values & types in your browser
document.write('<br>', "<h3>Conversion of string</h3>"); 

var nuumb = "472"
document.write('<b>String:</b>'+ " "+nuumb +'<br>'+'<b>Type:</b>' +" String"+ '<br>'+'<b>value:</b>'+ (+nuumb)+'<br>'+'<b>Type:</b>'+ "number" );

// 10. Write a program that takes user input. Convert and 
// show the input in capital letters
document.write('<br>', "<h3>Capital letters</h3>"); 

var userIn= prompt("Enter any word in small letters")
document.write('<br>'+"User input: "+userIn +'<br>' +"Upper Case: "+ userIn.toUpperCase("userIn") +'<br>' )

// Write a program that takes user input. Convert and 
// show the input in title case.
var user = prompt("Enter your name");
var firstLetter = user.slice(0,1 )
var otherLetters = user.slice(1);
firstLetter = firstLetter.toUpperCase();
otherLetters = otherLetters.toLowerCase();
document.write("User input: "+ user +'<br>'+ " Title case: " + firstLetter + otherLetters)


// 12. Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.
document.write('<br>', "<h3>variable num into string</h3>"); 

var number = "35.36"
var replacement = number.replace(".", "")
document.write('<br>'+"Number: " + number) 
document.write('<br>'+"Result: "+ replacement + '<br>') ;

// 13. Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


var userInput = prompt("enter your any input")
if (userInput.charCodeAt(0) >=33 && userInput.charCodeAt(0) >=44) {
    alert("Please enter a valid username")
} else if ( userInput.charCodeAt(0) >=46 && userInput.charCodeAt(0)>=64){
    alert("Please enter a valid username")
} else {
    alert(userInput)
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. 
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var input = prompt('Welcome to ABC bakery,what do you want to order Sir/Madam ?');

if (arr.includes(input)) {
    var index = arr.indexOf(input);
    alert(input + ' is available at index ' + index + ' in our bakery.');
  } else {
    alert('We are Sorry ' + input + ' is not available in our bakery.');
  }
// 15. Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// Take user input for the password
var password = prompt("Enter a password:");
var alphabetRegex = /[a-zA-Z]/;
var numberRegex = /[0-9]/;
if (
  password.length >= 6 &&
  alphabetRegex.test(password) &&
  numberRegex.test(password) &&
  !numberRegex.test(password.charAt(0))
) {
  alert("Password is valid!");
} else {
  alert("Please enter a valid password that meets the requirements.");
}
// 16. Write a program to convert the following string to an 
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
document.write("<h2>split method</h2>");

var university = "University of Karachi";
var array = university.split(" ");
document.write("Array elements: " + array);

// 17. Write a program to display the last character of a user 
// input
document.write('<br>', "<h3>Last character</h3>"); 

var user = "pakistan"
document.write("User input: "+ user + '<br>'+ "Last character of input: " + user.charAt(user.length-1))

// 18. You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

document.write('<br>', "<h3>Occurence</h3>");
let sentence = "The quick brown fox jumps over the lazy dog";
document.write(sentence)
let word = "the";

// Split the sentence into an array of words
let words = sentence.split(" ");

// Loop through each word in the array and count how many times the word appears
let count = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].toLowerCase() === word.toLowerCase()) {
    count++;
  }
}

document.write('<br>'+ "There are "+count + " occurences of word 'the'");
//MATH METHODS 
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write('<br>', "<h3>Positive integers</h3>"); 

var user = +prompt("Enter a positive integer")
document.write('<b>Number:</b>'+ + user)
document.write('<br>' +'<b>Round of value:</b>'+ Math.round(user) + '<br>' +'<b>Floor value:</b>'+ Math.floor(user) +'<br>' +'<b>Ceil value:</b>'+  Math.ceil(user)+'<br>' );

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
document.write('<br>', "<h3>Negative integers</h3>"); 

var user = +prompt("Enter a negative integer")
document.write('<b>Number:</b>'+ + user)
document.write('<br>' +'<b>Round of value:</b>'+ Math.round(user) + '<br>' +'<b>Floor value:</b>'+ Math.floor(user) +'<br>' +'<b>Ceil value:</b>'+  Math.ceil(user) );

// 3. Write a program that displays the absolute value of a 
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
document.write('<br>', "<h3>Absolute Value</h3>"); 

var abs = -6
var abs1 = 7
document.write('<br>'+"The absolute value of " + abs + " is " + Math.abs(abs)+ '<br>'+ "The absolute value of "+ abs1+ " is "+ Math.abs(abs1)+'<br>');

// 4. Write a program that simulates a dice using random() 
// method of JS Math class. Display the value of dice in your 
// browser.
document.write('<br>', "<h3>Dice Value</h3>"); 

var myNum= (Math.round(Math.random()*10))
document.write('<b>Random dice value: </b>'+myNum+ '<br>')


// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
document.write('<br>', "<h3>Coin Toss method</h3>"); 

var numb = (Math.round(Math.random()*10))
if (numb==2){
  document.write(numb+ '<br>'+"random coin value: Heads")
} else if (numb==1) {
document.write(numb +'<br>'+ "random coin value: Tails")
} else {
  document.write("TRY AGAIN UNTILL YOU SEE THE VALUE OF TAILS & HEADS")
}

// 6. Write a program that shows a random number between 1 
// and 100 in your browser
document.write('<br>', "<h3>Random number between 1-100</h3>"); 

var numb = (Math.round(Math.random()*100))
document.write('<b>Random number between 1 and 100 is: </b>'+numb+ '<br>')

// 7. Write a program that asks the user about his weight. Parse 
// the user input and display his weight in your browser. 
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
document.write('<br>', "<h3>Weight</h3>"); 

var userInput = prompt("Enter your weight:");
var weight = +(userInput);
document.write("Your weight is: " + weight + " kilograms");

// 8. Write a program that stores a random secret number from 
// 1 to 10 in a variable. Ask the user to input a number 
// between 1 and 10. If the user input equals the secret 
// number, congratulate the user.
var secretNumber = 4;
var guess = prompt("Enter the guess number between 1 and 10");

if (guess=="4") {
    alert("Congratulation! You guessed the secret numer")

} else if (guess < "4") {
    alert("your guesed is too low. Try again!")

} else if (guess > "4") {
       alert("Your guessed is too high. Try again!")
}
else {
    alert("Ops! You guessed wrong. Trry again")
}

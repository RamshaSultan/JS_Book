// 1. Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

var city  = prompt("Enter Your City Name")
if (city== "karachi" || city== "Karachi") {
           alert("Welcome to city of light")
  }  else {
         alert("You are not welcome to city of light")
       }
//    2. Write a program to take “gender” as input from user. If the
//    user is male, give the message: Good Morning Sir. If the 
//    user is female, give the message: Good Morning Ma’am

var gender = prompt("Enter your gender")
if (gender== "male" || gender=="Male") {
    alert("Good Morning Sir")
} else if (gender== "female" || gender=="Female") {
    alert("Good Morning Ma'am")
}

// 3. Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:
var color = prompt("Enter the color of road traffic signal")
if (color== "red" || color=="Red") {
    alert("Must Stop")
} else if (color== "yellow" || color=="Yellow") {
    alert("Ready to move")
} else if(color== "green" || color== "Green") {
    alert("Move now")
}

// 4. Write a program to take input remaining fuel in car (in 
//     litres) from user. If the current fuel is less than 0.25litres, 
//     show the message “Please refill the fuel in your car”
  var fuel = prompt("Enter your reamining fuel in car \n(in liters)");
  if (fuel<= "0.25liters") {
    alert("Please refil the fuel in your car")
  }  else if (fuel> "0.25liters"){
    alert("you don't need to refill the fuel in your car")
  }

//   5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = ("4");
if (++a === 5){
alert("given condition for variable a is true");
}
 var b = ("82");
if (b++ === 83){
alert("given condition for variable b is true");
}
var c =("12");
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
if("car" < "cat") {
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:

document.write("Total Marks : " +total1)
if (totalPer>=80) {
  document.write('</br>'+"Marks obtained "+total2+ '</br>'+"Percentage: "+Math.round(totalPer) + " %"+'</br>'+"Grade: A-one "+'</br>'+ "Remarks : Excellent")
} else if(totalPer>=70) {
  document.write('</br>'+"Marks obtained "+total2+ '</br>'+"Percentage: "+Math.round(totalPer)+" %"+'</br>'+"Grade: A"+'</br>'+ "Remarks : Good")
} else if (totalPer>=60) {
  document.write('</br>'+"Marks obtained "+total2+ '</br>'+"Percentage: "+Math.round(totalPer)+" %"+'</br>'+"Grade: B"+'</br>'+ "Remarks : You need to improve")
} else if(totalPer<=60) {
  document.write('</br>'+"Marks obtained "+total2+ '</br>'+"Percentage: "+Math.round(totalPer)+ " %"+'</br>'+"Grade: Fail"+'</br>'+ "Remarks : Sorry")
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 4;
var guess = prompt("Enter the guess number between 1 and 10");

if (guess=="4") {
    alert("Congratulation! You guessed the secret numer")

} else if (guess < "4") {
    alert("Close enough to correct answer. Try again!")

} else if (guess > "4") {
       alert("Your guessed is too high. Try again!")
}
else {
    alert("Ops! You guessed wrong. Trry again")
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

var give = +prompt("Enter any number")
if (give %3==0) {
alert("This number is divisible by 3")
} 
else (
  alert("The number is not divisible by 3")
)


// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var give1 = +prompt("Enter any number")
if (give1 %2 ==0) {
alert("This is an Even Number")
}
else(
  alert("This is an odd Number")
)

// 10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt("Enter the current temperature")
if (temp>40) {
alert("It's too hot outside")
} else if(temp>30) {
alert("The Weather today is Normal")
} else if(temp>20) {
alert("Today's Weather is Cool")
} else if (temp>10) {
alert("OMG! Today's weather is so ool")
}

// 11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

var input = +prompt("Enter the first Number")
var input1 = +prompt("Enter the second Number")
if(input + input1){
  alert(input+input1)
  if(input-input1){
    alert(input-input1)
    if(input*input1){
      alert(input*input1)
      if(input / input1){
        alert(input / input1)
        if(input % input1){
          alert(input%input1)
        }
      }
    }
  }
}
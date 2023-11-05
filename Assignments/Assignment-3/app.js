//Variable for Numbers:
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = alert("I am 19 Years old");

// . Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var numVisits = 0;
if (localStorage.getItem("numVisits")) {
  numVisits = localStorage.getItem("numVisits");
}
numVisits++;

localStorage.setItem("numVisits", numVisits);

alert("You have visited this site " + numVisits + " times.");

//  //3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:

var birthYear = ("My birth year is 2005 ");
var newBirthYear = ("Data type of my decleared variable is number");
document.write(birthYear, '<br>', newBirthYear,  '<br>');

// //4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// //a. Visitor’s name
// //b. Product title
// //c. Quantity i.e. how many products a visitor wants to order
// //Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”
var visitorName = "Aisha ";
var productTitle = "ordered ";
var quantity = "10 T-shirt on XYZ Clothing brand";
document.write(visitorName + productTitle + quantity);




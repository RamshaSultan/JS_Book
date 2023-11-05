//MATH EXPRESSIONS 
//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var mess = "sum of 5 and sum of 3 is "
var num1 = 5 ;
var num2 =  3 ;
var ner = num1 + num2
document.write( mess + ner), '<br>';

//2. Repeat task1 for subtraction, multiplication, division & modulus.

document.write("<h4>FOR SUBTRACTION</h4>" );

var mess = "sub of 5 and sub of 3 is "
var num1 = 5 ;
var num2 =  3 ;
var ner = num1 - num2
document.write( mess + ner), '<br>';

document.write("<h4>FOR MULTIPLICATION</h4>" );

var mess = "multiplication of 5 and multiplication of 3 is "
var num1 = 5 ;
var num2 =  3 ;
var ner = num1 * num2
document.write( mess + ner), '<br>';

document.write("<h4>FOR DIVISION</h4>" );

var mess = "Division of 5 and division of 3 is "
var num1 = 5 ;
var num2 =  3 ;
var ner = num1 / num2
document.write( mess + ner), '<br>';

document.write("<h4>FOR MODULUS</h4>" );

var mess = "Modulus of 5 and modulus of 3 is "
var num1 = 5 ;
var num2 =  3 ;
var ner = num1 % num2
document.write( mess + ner);

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is:  ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value 
// by 3. 
// l. Output : “The remainder is : 0”.

 var variable = "value after decleration is: "

 var initial = 8;
 document.write('<br>', "Initial value:" + initial)

var increment = "Value after increment is:";
var num = 9;
document.write('<br>', increment + num);

var addition = "Value after addition is:"
var num1 = num + 7;
document.write('<br>', addition + num1);

var decrement = "Value after decrement is:"
var num2 = num1 - 1;
document.write('<br>', decrement + num2);

var reaminder = "The reaminder is:";
var remain = num2 % 3
document.write('<br>', reaminder + remain, '<br>' )

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output

var ticketPrice = "600"
var cost = ticketPrice * 5;
document.write('<br>', "Total cost to buy a 5 tickets to a movie is " + cost + "PKR")

//5. Write a script to display multiplication table of any number in your browser.
 
document.write('<br>', "<h3>Table = 6</h3>"); 
let table = 6
  for (let i = 1; i <= 10; i++) {
    document.write(  '<br>', table+" X " + i + " = " +  table*i, '<br>' );
  }

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.

document.write('<br>', "<h4>Celsius to Fahrenheit</h4>"); 
var Celsius = 75
var Fahrenheit = (Celsius*9/5) + 32
document.write(Celsius + " °C is " + Fahrenheit + " ℉" + '</br>')

document.write('<br>', "<h4> Fahrenheit to Celsius</h4>"); 

var Fahrenheit = 56
var Celsius = (Fahrenheit-32)*5/9
document.write(Fahrenheit + " ℉ is " +Celsius + '</br>'  )

// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

document.write('<br>', "<h3>Shopping Cart</h3>"); 
var item1 = 560
document.write("Price of item 1 is " + item1, '<br>')
var item2 = 600
document.write("Price of item 2 is " + item2, '<br>')
var item3 = 40
document.write("Ordered quantity of item 1 is " + item3, '<br>')
var item4 = 100
document.write("Ordered quantity of item 2 is " + item4, '<br>')
var item5 = 200
document.write("Price of Shipping Charges is " + item5, '<br>')
var total = item1 + item2 + item3 + item4 + item5
document.write("Total Cost of your order is " + total, '<br>')

//8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser
document.write('<br>', "<h3>Marks Sheet</h3>"); 

var totalMark = 980
document.write("Total Marks = " + totalMark, '<br>')

var marksObta = 804
document.write("Marks Obtained = " + marksObta, '<br>')

var per = (marksObta / totalMark)*100
document.write("Percentage = " + per+ "%", '<br>')


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

document.write('<h2>Curreny in PKR</h2>' + '</br>');
var totalcurreny= 1048+700;
document.write('Total Currency in PKR: ' + totalcurreny  + '</br>');


// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write('<h2>Arithmatic of the sequence</h2>' + '</br>');

var numb = 15+5*10/2
document.write(numb)

// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write('<h2>Age Calculator</h2>' + '</br>');
var currentYear =2023
 var DOB = 2007
 var differenceAge =currentYear-DOB
 document.write(differenceAge)

//  12. The Geometrizer: Calculate properties of a circle.
//  a. Store a radius into a variable.
//  MATH EXPRESSIONS | JAVASCRIPT
//  Page 8 of 9
//  b. Calculate the circumference based on the radius, and
//  output “The circumference is NN”.
//  (Hint : Circumference of a circle = 2 π r , π = 3.142)
//  Calculate the area based on the radius, and output “The 
//  area is NN”. (Hint : Area of a circle = π r2, π = 3.142
document.write('<h2>The Geometrizer</h2>' + '</br>');

var rad = 20
document.write("Radius of a circle: " +rad + '</br>')
rad = 2*3.142*20
document.write(rad + '</br>')
rad = 3.142*20**2
document.write("The Area is: "+ rad)


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”

document.write('<h2>The LifeTime Supply Calculator</h2>' + '</br>');
 var  favSn = "Chatty Chins"
 document.write("Favourite Snack: " + favSn + '</br>')
 var curA = 15
 document.write("Current Age: " + curA + '</br>')
 var maxA = 65
 document.write("Estimated Maximum Age: " + maxA + '</br>');
 var amountOfSna = 3
 document.write("Amount of snack per day: " + amountOfSna  + '</br>')
 var xx = (maxA-curA)*amountOfSna
 document.write("You will need " +xx + " chatty chins to last you untill the ripe old age of " +maxA)
























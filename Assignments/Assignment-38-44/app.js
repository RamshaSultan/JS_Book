//FUNCTIONS, SWITCH 
// STATEMENTS, WHILE… DOWHILE LOOP

// 1. Write a custom function power ( a, b ), to calculate the value of 
// a raised to b.
document.write('<br>', "<h3>Power of any number</h3>"); 

function power(a, b) {
    var result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }
var a = +prompt("Enter number 1")
var b = +prompt("Enter number 2")
var result = power(a, b);
document.write(a+ " raised to "+ b+" is "+result);

// 2. Any year is entered through the keyboard. Write a function to 
// determine whether the year is a leap year or not.
function leapYears(){
    var year1 = new Date().getFullYear();
    for(i=0; i<10;i++){
        var year =year1++;
        var y = new Date(year, 1, 29).getDate();
        if (y==29) {
            alert(year+" is a leap year");
        } else {
            alert(year+" is not a leap year")
        }
    }
}
leapYears()

// 3. If the lengths of the sides of a triangle are denoted by a, b, and 
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

document.write('<br>', "<h3>Area of triangle</h3>"); 

function calculateArea(a, b, c) {
  var s = calculateS(a, b, c);
  var area = Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
  return area;
}
function calculateS(a, b, c) {
  var s = (a + b + c) / 2;
  return s;
}
var sideA = +prompt("Enter the triangle area side A")
var sideB =  +prompt("Enter the triangle area side B")
var sideC =  +prompt("Enter the triangle area side C")
var triangleArea = calculateArea(sideA, sideB, sideC);
document.write("Area of the triangle:", triangleArea);

// 4. Write a function that receives marks received by a student in 3 
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction 
// and other are for average and percentage. Call those functions 
// from mainFunction and display result in mainFunction
document.write('<br>', "<h3>Average marks & percentage</h3>"); 

function marks(){
var st1 = +prompt("ENter the marks of 1 subject");
var st2 = +prompt("Enter the marks of 2 subject");
var st3 = +prompt("Enter the marks of 3 subject");
return [st1, st2, st3];
}

function avgerage() {
var avgMarks = marks()
var sum = 0
for (var i =0; i<avgMarks.length; i++){
    sum+= avgMarks[i]
}
var dd = sum / avgMarks.length;
return dd
}
 function avgPercentage(){
    var avg = avgerage()
    var totalMark = 300
    var per = (avg / totalMark)*100
    return[avg, per];
 }
function mainFunction(){
    var result = avgPercentage()
    document.write('<br>'+"Average Marks: "+ result[0]);
    document.write('<br>'+"percentage: " + result[1] +"%"+'<br>');
}
mainFunction()

// 5. You have learned the function indexOf. Code your own custom 
// function that will perform the same functionality. You can code 
// for single character as of now.
document.write('<br>', "<h3>Custom index number</h3>"); 

function customIndexOf(str, char) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return i;
      }
    }
    return -1;
  }
  var str = "Hello, world!";
  var char = "o";
  var index = customIndexOf(str, char);
document.write('<br>'+index+ '<br>');

// 6. Write a function to delete all vowels from a sentence. Assume 
// that the sentence is not more than 25 characters long.
document.write('<br>', "<h3>Remove Vowles</h3>"); 

    function removeVowels(str) {
        var vowels = ["a", "e", "i", "o", "u"];
        var newStr ="";
      
        for (var i = 0; i < str.length; i++) {
if (vowels.indexOf(str[i].toLowerCase())=== -1){
    newStr += str[i]
  }
}
       return newStr;
   }
      
var myString = "Here i make a code in which we remove thye letters of vowles and see the result after removing the vowles .";
document.write("<br>"+"<b>Correct string:</b>"+ myString)
var newString = removeVowels(myString);
document.write("<br>"+"<b>New string:</b>"+newString); // Output: Ths s 25-chrctr strng.
      
// 7. Write a function with switch statement to count the number of 
// occurrences of any two vowels in succession in a line of text. 
// For example, in the sentence

document.write('<br>', "<h3>Pair of Vowles</h3>"); 

function VowelPairs(text) {
    var pairs = []
    var vowels = "aeiou";
    
    for (var i = 0; i < text.length - 1; i++) {
      var pair = text[i] + text[i + 1];
      switch (pair) {
        case "ea":
        case "ae":
        case "ui":
        case "io":
        case "ou":
            pairs.push(pair)
      
          break;
        default:
          break;
      }
    }
    
    return pairs;
  }

  var text = "“Pleases read this application and give me gratuity.";
  document.write('<br>'+"Phrase: "+ text)
var pairs = VowelPairs(text);
document.write('<br>'+"Pairs of vowles: ");

for (var i =0 ; i<pairs.length; i++){
    document.write(pairs[i]+ " ")
}

// 8. The distance between two cities (in km.) is input through the 
// keyboard. Write four functions to convert and print this 
// distance in meters, feet, inches and centimeters.
document.write('<br>', "<h3>Distance of two cities</h3>"); 


function kmToMeters(km) {
    return km * 1000;
  }
  
  function kmToFeet(km) {
    return km * 3280.84;
  }
  
  function kmToInches(km) {
    return km * 39370.1;
  }
  
  function kmToCentimeters(km) {
    return km * 100000;
  }
  
  var distanceInKm = prompt("Enter distance between two cities (in km):");
  
  var distanceInMeters = kmToMeters(distanceInKm);
  var distanceInFeet = kmToFeet(distanceInKm);
  var distanceInInches = kmToInches(distanceInKm);
  var distanceInCentimeters = kmToCentimeters(distanceInKm);
  
  document.write('<br>'+"Distance in meters: " + distanceInMeters + "<br>");
  document.write("Distance in feet: " + distanceInFeet + "<br>");
  document.write("Distance in inches: " + distanceInInches + "<br>");
  document.write("Distance in centimeters: " + distanceInCentimeters + "<br>");

//   9. Write a program to calculate overtime pay of employees. 
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
// worked above 40 hours. Assume that employees do not work 
// for fractional part of an hour.

document.write('<br>', "<h3>Over time pay</h3>"); 

var hoursWorked = prompt("Enter hours worked by the employee:");
var hourlyRate = prompt("Enter hourly rate of the employee:");

if (hoursWorked > 40) {
  var overtimeHours = hoursWorked - 40;
  var overtimePay = overtimeHours * 12;
  var totalPay = 40 * hourlyRate + overtimePay;
  document.write("Total pay: Rs. " + totalPay);
} else {
  var totalPay = hoursWorked * hourlyRate;
  document.write("Total pay: Rs. " + totalPay);
}

// 10. A cashier has currency notes of denominations 10, 50 and 
// 100. If the amount to be withdrawn is input through the 
// keyboard in hundreds, find the total number of currency notes 
// of each denomination the cashier will have to give to the 
// withdrawer

document.write('<br>', "<h3>Currency notes</h3>"); 

var amount = prompt("Enter amount to be withdrawn (in hundreds):");

var hundredNotes = Math.floor(amount / 100);
var fiftyNotes = Math.floor((amount % 100) / 50);
var tenNotes = Math.floor(((amount % 100) % 50) / 10);

document.write('<br>'+"Number of 100 notes: " + hundredNotes + "<br>");
document.write("Number of 50 notes: " + fiftyNotes + "<br>");
document.write("Number of 10 notes: " + tenNotes + "<br>");
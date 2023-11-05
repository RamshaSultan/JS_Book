// // FUNCTION
// // 1. Write a function that displays current date & time in your 
// // browser.
document.write('<br>', "<h3>Current date and time</h3>"); 

function dateTime() {
   document.write( new Date());
   }
   dateTime() ;
   
// //    2. Write a function that takes first & last name and then it 
// // greets the user using his full name

function userName(firstName,lastName){
    var h = firstName+ " " + lastName;
    var y = "Hello "+h
    alert(y)
}
var firstName =prompt("enter your first name");
var lastName= prompt("enter your last name");

userName(firstName,lastName);

// // 3. Write a function that adds two numbers (input by user) 
// // and returns the sum of two numbers
function userInput(num1,num2){
    var use = num1 + num2
    alert("The sum of two numbers is: "+ use)
}
var num1 = +prompt("Enter the first number");
var  num2 = +prompt("Enter the second number");
userInput(num1,num2);

// // 4. Calculator:
// // Write a function that takes three arguments num1, num2 
// // & operator & compute the desired operation. Return and 
// // show the desired result in your browser.
document.write('<br>', "<h3>Three arguments</h3>"); 

function operator(numb1,numb2,oper) {
    var result;
   switch(oper) {
    case"+":
    result= numb1 + numb2;
    break;
    case "-":
        result= numb1 - numb2;
        break;
    case"*":
    result=numb1*numb2;
    break;
    case"/":
    result= numb1 / numb2;
    break;
    case"%":
    result= numb1 % numb2;
    break;    
    default:
        result= "invalid operator"
   } 
       return result;
}
var numb1 = +prompt("Enter number 1")
var numb2 = +prompt("Enter number 2")
var oper = prompt("Enter any operator(+, -, *, /, %)")
var result = operator(numb1, numb2, oper)
document.write('</br>'+"Result: "+ result+ '</br>')


// 5. Write a function that squares its argument
document.write('<br>', "<h3>Square of an argument</h3>"); 

function squares (num){
 return num * num
}
var x = 5
var s = squares(x)
document.write("The square of an argument is: "+ s);

// 6. Write a function that computes factorial of a number
document.write('<br>', "<h3>Factorial of a number</h3>"); 

function factorial (num) {  
    if (num > 1) {
        return num * factorial(num -1)
    }
    return 1
}
document.write("The factorial of number 7 is: "+factorial(7));

// 7. Write a function that take start and end number as inputs 
// & display counting in your browser
document.write('<br>', "<h3>Start & end numbers</h3>"); 

function countNumbers(start, end) {
  var count = start;
  while (count <= end) {
    document.write(count + "<br>");
    count++;
  }
}
countNumbers(0, 10);

// 8. Write a nested function that computes hypotenuse of a 
// right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
document.write('<br>', "<h3>Hypotenus of rectangle triangle</h3>"); 

function calculateHypotenuse(base, perpendicular) {
    let hypotenuseSquare = calculateSquare(base) + calculateSquare(perpendicular);
    let hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  
  function calculateSquare(num) {
    return num * num;
  }

  let base = 6;
  let perpendicular = 8;
  let hypotenuse = calculateHypotenuse(base, perpendicular);
  
document.write(`The hypotenuse of a right angle triangle with base ${base} and perpendicular ${perpendicular} is ${hypotenuse}.`);
  
// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables.

// arguments as value
document.write('<br>', "<h3>Area of rectangle as value</h3>"); 

function areaOfTriangle(width,height){
    var a = width * height
    return a
}
var v = 5
var y = 6
var area = areaOfTriangle(5,6)
document.write('<br>'+"The area of a rectangle is: "+ area) 

document.write('<br>', "<h3>Area of rectangle as variable</h3>"); 

// arguments as variable
var v = 5
var y = 6
var area = areaOfTriangle(v,y)
document.write('<br>'+"The area of a rectangle is: "+ area) 

// 10. Write a JavaScript function that checks whether a passed 
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as 
// forward, e.g., madam.

function palindrome(check){
    var userP= check.split("").reverse().join("")
if (userP===check){
    alert("This is a palindrome sequence")
} else{
    alert("This is not a palindrome sequence")
}
}
var p = prompt("ENter any pharse to check the palindrome sequence");
var u=palindrome(p)

// 11. Write a JavaScript function that accepts a string as a 
// parameter and converts the first letter of each word of the 
// string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
document.write('<br>', "<h3>Capital letter</h3>"); 

function capitalizeWords(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  
    return words.join(' ');
  }
var str = 'the quick brown fox';
var capitalizedStr = capitalizeWords(str);
document.write('<br>'+'<b>Original String:</b>' + str+'<br>'+'<b>Capitalized String:</b>' +capitalizedStr);

// 12. Write a JavaScript function that accepts a string as a 
// parameter and find the longest word within the string. 
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development
document.write('<br>', "<h3>Longest word</h3>"); 

function longestWord(word){
var words = word.split(" ");
var longest = "";
for (i=0; i <words.length; i++){
    if (words[i].length>longest.length) {
        longest=words[i]
    }
}
return longest
}
var word = "Web Development Tutorial";
document.write('<b>The actual phrase is: </b>'+ word);
var longest = longestWord(word);
document.write('<br>'+'<b>Longest word is: </b>'+longest);

// 13. Write a JavaScript function that accepts two arguments, a 
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string. 
// Sample arguments : 'JSResourceS.com', 'o'

// function argu(string,letter){
//     return string.split(letter).length-1
// }
// var u =argu("Bye Bye waniya".indexOf("1"))
// document.write(u)
document.write('<br>', "<h3>Most repeated word</h3>"); 

function argu(string, letter) {
    var count = 0;
    for (var i = 0; i <string.length; i++) {
        if(string[i]===letter) {
            count++;
        }
    }
    return "y".repeat(count);
  }
  var u = argu("Bye Bye Ramsha", "y");
  document.write(u);


//   14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output 
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area 
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
document.write('<br>', "<h3>Circumference & Area of circle</h3>"); 

function calcCircumference(radius){
    var us = 2*3.142*radius
    return us    
}
function calcArea(){
    var e = 3.142*radius*radius
    return e
}
var radius = 4
var t = calcCircumference(radius);
var o= calcArea(radius);
document.write('<br>'+ "Circumference of circle is: "+ t+ '<br>'+ "Area of circle is: "+ o)
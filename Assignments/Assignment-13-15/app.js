// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser.
var educationalQualification = []
educationalQualification= ["1) SSC"+ '</br>'+"2) HSC"+'</br>'+ "3) BCS" +'</br>'+ "4) BS"+ '</br>'+ "5) BCOM"+ '</br>'+ "6) MS"+ '</br>'+
"7) M.PHILL"+ '</br>'+ "8) PHD"]
document.write('<h2>QUALIFICATION</h2>' + educationalQualification+ '</br>');

// // 8. Write a program to store 3 student names in an array.Take
// // another array to store score of these three students. 
// // Assume that total marks are 500 for each student, display 
// // the scores & percentages of students
document.write('<h3>Score of students</h3>' + '</br>')

var student3 = ["Hafsa", "Maham", "Zainab"];
var score = ["325", "250", "480"];

var per1= score[0] *100/500;
var per2= score[1] *100/500;
var per3= score[2] *100/500;

document.write("Score of "+ student3[0]+ " is "+ score[0]+ " Percentage: "+ per1+"%" +'</br>')
document.write("Score of "+ student3[1]+ " is "+ score[1]+ " Percentage: "+ per2+"%"+'</br>')
document.write("Score of "+ student3[2]+ " is "+ score[2]+ " Percentage: "+ per3+"%" +'</br>')


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
document.write('<h3>COLOR NAMES</h3>' + '</br>')

// Initialize array with color names
let colors = ["red ", "green ", "blue"];

// Display the array elements
document.write("Initial array: " + colors + "<br>");

// Ask the user what color to add to the beginning
let colorToAddToBeginning = prompt("Enter a color to add to the beginning:");

// Add the color to the beginning of the array
colors.unshift(colorToAddToBeginning);

// Display the updated array
document.write("New color added to the beginning: " + colors + "<br>");

// Ask the user what color to add to the end
let colorToAddToEnd = prompt("Enter a color to add to the end:");

// Add the color to the end of the array
colors.push(colorToAddToEnd);

// Display the updated array
document.write("New color added to the end: " + colors + "<br>");

// Add two more colors to the beginning of the array
colors.unshift("yellow ", "orange");

// Display the updated array
document.write("Two colors added to the beginning: " + colors + "<br>");

// Delete the first color in the array
colors.shift();

// Display the updated array
document.write("First color deleted: " + colors + "<br>");

// Delete the last color in the array
colors.pop();

// Display the updated array
document.write("Last color deleted: " + colors + "<br>");

// Ask the user at which index to add a color and what color to add
let indexToAddColor = prompt("Enter the index to add the color:");
let colorToAdd = prompt("Enter the color to add:");

// Add the color to the desired position/index
colors.splice(indexToAddColor, 0, colorToAdd);

// Display the updated array
document.write("New color added at user-defined index: " + colors + "<br>");

// Ask the user at which index to delete color(s) and how many colors to delete
let indexToDeleteColor = prompt("Enter the index to delete the color(s):");
let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");

// Remove the same number of color(s) from user-defined position/index
colors.splice(indexToDeleteColor, numberOfColorsToDelete);

// Display the updated array
document.write("User-defined colors deleted: " + colors + "<br>");

// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.
document.write('<h2>ARRAY SORT</h2>' + '</br>');

var studentScore = ["320 ", "230 ", "480 ", "120"];
document.write("Scores of Students "+studentScore);
var std = studentScore.sort()
document.write( "<br>"+"Ordered Scores of Students " + std+ "<br>");


// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.
document.write('<h2>CITIES LIST</h2>' + '</br>');

var cities = ["Lahore ", "Faislabad ", "Hyderabad ", "Karachi ", "Multan ", "Quetta "]
document.write("Cities list: "+cities +'</br>');
var n = cities.slice(1, 3)
document.write("Selected cities: " +n);

// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
document.write('<h3>ARRAY Join Method</h3>' + '</br>');

var arr = ["This " ,"is ", "my ", "cat"];
var joinedStr= arr.join('')
document.write('</br>'+joinedStr)


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)
document.write('<h2>First In First Out Method</h2>' + '</br>');
var dev = ["Keyboard ", "Mouse ", "Printer ", "Monitor"+ '</br>']
document.write(dev)

var dev1 = dev.shift(0)
document.write('<strong>OUT</strong>'+'</br>'+dev1+ '</br>')
var dev2 = dev.shift(1)
document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+dev2 + '</br>')
var dev3 = dev.shift(2)
document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+dev3+ '</br>')
var dev4 = dev.shift(3)
document.write('<strong>OUT</strong>'+'</br>'+dev4)

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)
document.write('<h2>Last In-First Out</h2>' + '</br>');
var Devices = ["Keyboard ", "mouse ", "printer ", "monitor"+ '</br>']
document.write(Devices)

var dev1 = Devices.pop(1)
document.write('<strong>OUT</strong>'+'</br>'+dev1+ '</br>')
var dev2 =Devices.pop(2)
document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+dev2 + '</br>')
var dev3 = Devices.pop(3)
document.write('<strong>OUT</strong>'+ '</br>'+'</br>'+dev3+ '</br>')
var dev4 = Devices.pop(0)
document.write('<strong>OUT</strong>'+'</br>'+dev4+ '</br>')

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method
document.write('<h2>Car Companies</h2>' + '</br>');

var phoneManufactures = ["civic ", "BMW ", " Lamborgini", "Honda ", "Audi ", "Farari "];
document.write(phoneManufactures)
document.write('</br>' + carcompany.shift(1)+ '</br>'+ carcompan.shift(2)+ '</br>'+carcompan.shift(3)+ '</br>'+carcompan.shift(4)+ '</br>'+carcompan.shift(5))
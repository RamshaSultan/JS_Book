document.write('<h3>Multidimensional Array</h3>' + '</br>');
// 2. Declare and initialize a multidimensional array 
// representing the following matrix:
var myArray = [
    ["0 ","1 ","2 ","3 "+'</br>'+ "1 ", "0 ", "1 ","2"+'</br>'+ "2 ", "1 ", "0 ", "1 "]
];
var innerArray = myArray[0];
var joinedStr= innerArray.join('');
document.write(joinedStr +'</br>');

// 3. Write a program to print numeric counting from 1 to 10.
document.write('<h3>Numeric Counting from 1-10</h3>' + '</br>');

for (var i = 1; i<=10; i++){
document.write([i])
}
// 4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user
document.write('<h3>Multiplication table</h3>' + '</br>');

let table = +prompt("Enter a number to show its multiplication table")
let table1 = +prompt("Enter the length multiplication table")  
for (let i = 1; i <=table1; i++) {
    document.write(  '<br>', table+" X " + i+ " = " +  table*i, '<br>' );
  }

//   5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]
var fruits = ["apple" +'<br>'+ "banana" +'<br>'+ "mango"+ '<br>'+ "orange"+ '<br>'+ "strawberry"]
for (i=0; i<fruits.length; i++) {
console.log(i+":"+fruits[i])
}

// 6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

document.write('<h3>Counting"</h3>' + '</br>');

for (var i = 1; i<=10; i++){
document.write([i])
}

document.write('<h3>Reverse Counting"</h3>' + '</br>');

for (var i = 10; i>=0; i--){
document.write([i])
}
document.write('<h3>Odd"</h3>' + '</br>');

var odd = ["1 ", "3 ", "5 ", "7 ", "9 ", "11 ", "13 ", "15 ", "17 ", "19 "]
document.write('</br>'+odd)

document.write('<h3>Even"</h3>' + '</br>');
var even = ["0 ", "2 ", "4 ", "6 ", "8 ", "10 ","12 ","14 ","16 ", "18 ", "20"]
document.write('</br>'+even)

document.write('<h3>Series</h3>' + '</br>')
var series= ["2k ", "4k ", "6k ","8k ", "10k ", "12k ", "14k ", "16k ", "18k ", "20k "]
document.write('</br>'+series)

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.
var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

var input = prompt('Welcome to ABC bakery,what do you want to order Sir/Madam ?');

if (arr.includes(input)) {
    var index = arr.indexOf(input);
    alert(input + ' is available at index ' + index + ' in our bakery.');
  } else {
    alert('We are Sorry ' + input + ' is not available in our bakery.');
  }
// 8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]


var A = [24,53,78,91,12]
var largestNumber = A[0]
document.write('<h3>Array items</h3>'+ A+'</br>');

for (var i=0; i<A.length; i++) {
if (A[i] > largestNumber){
largestNumber = A[i];
}
}
document.write('<h3>Largest Number</h3>' + '</br>')

document.write("The largest Number in the array is " + largestNumber)

// 9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

var B = [24,53,78,91,12]
var smallestNumber = B[0]
document.write('<h3>Array items</h3>'+ B+'</br>');

for (var i=0; i<B.length; i++) {
  if (B[i] < smallestNumber){
  smallestNumber = B[i];
  }
  }
  document.write('<h3>Smallest Number</h3>' + '</br>')
  
  document.write("The Smallest Number in the array is " + smallestNumber);

  // 10. Write a program to print multiples of 5 ranging 1 to 
  // 100.
  document.write('<br>', "<h3>Multiplies of 5</h3>"); 
let table2 = 5
  for (let i = 1; i <=20; i++) {
    document.write(table2*i  +",");
  }

  